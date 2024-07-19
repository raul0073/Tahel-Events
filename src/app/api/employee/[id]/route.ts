import Employee from "@/lib/DB/Models/Employee";
import Event, { EventType } from "@/lib/DB/Models/Event";
import connectMongoDB from "@/lib/DB/MongoConnection";
import { NextRequest, NextResponse } from "next/server";

// Utility function to handle error responses
function handleError(error: any, status = 500) {
    return NextResponse.json({ error: error.message || 'שגיאה פנימית בשרת' }, { status });
}

// Get employee by ID
export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
    const { id } = params;
    try {
        await connectMongoDB();

        const employee = await Employee.findById(id);
        if (!employee) {
            return NextResponse.json({ error: 'משתמש לא נמצא' }, { status: 404 });
        }

        return NextResponse.json(employee, { status: 200 });
    } catch (error) {
        return handleError(error);
    }
}

// Employee post to register to event
export async function POST(req: NextRequest, { params }: { params: { id: string } }) {
    try {
        const { id } = params;
        const data = await req.json();
        await connectMongoDB();

        const event = await Event.findById(data._id);
        if (!event) {
            return NextResponse.json({ error: 'אירוע לא נמצא' }, { status: 404 });
        }

        const employee = await Employee.findById(id);
        if (!employee) {
            return NextResponse.json({ error: 'משתמש לא נמצא' }, { status: 404 });
        }

        event.employee = `${employee.first_name} ${employee.last_name}`;
        event.isAssigned = true;
        await event.save();

        return NextResponse.json(event, { status: 200 });
    } catch (error) {
        return handleError(error);
    }
}

// Employee request to remove themselves from event
export async function PUT(req: NextRequest, { params }: { params: { id: string } }) {
    try {
        const { id } = params;
        const data = await req.json();
        await connectMongoDB();

        const event = await Event.findById(data._id);
        if (!event) {
            return NextResponse.json({ error: 'אירוע לא נמצא' }, { status: 404 });
        }

        event.employee = '';
        event.isAssigned = false;
        await event.save();

        return NextResponse.json(event, { status: 200 });
    } catch (error) {
        return handleError(error);
    }
}


// Delete employee
export async function DELETE(req: NextRequest, { params }: { params: { id: string } }) {
    try {
        const { id } = params;

        if (!id) {
            return NextResponse.json({ error: 'מספר מזהה לא תקין' }, { status: 404 });
        }

        await connectMongoDB();

        // Get the employee by ID
        const emp = await Employee.findById(id);
        if (!emp) {
            return NextResponse.json({ error: 'עובד לא נמצא' }, { status: 404 });
        }

        // Update all events to remove this employee
        const events = await Event.updateMany({ employee: `${emp.first_name} ${emp.last_name}` },
         { $unset: 
            { employee: 1,
            isAssigned: false
            }
        });

        // Delete the employee
        await Employee.findByIdAndDelete(id);

        return NextResponse.json(events, { status: 200 });
    } catch (error) {
        return handleError(error);
    }
}
