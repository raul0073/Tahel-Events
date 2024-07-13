import Employee from "@/lib/DB/Models/Employee";
import Event from "@/lib/DB/Models/Event";
import connectMongoDB from "@/lib/DB/MongoConnection";
import { NextRequest, NextResponse } from "next/server";


// get employee by id
export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
    const { id } = params;
    try {
        await connectMongoDB();

        const emp = await Employee.findById(id);
        if (!emp) {
            return NextResponse.json({ error: 'תקלה. משתמש לא נמצא    ' }, { status: 404 });
        }

        return NextResponse.json(emp, { status: 200 });
    } catch (err) {
        return NextResponse.json(err, { status: 500 });
    }
}


export async function POST(req: NextRequest, { params }: { params: { id: string } }) {
        const eventId = await req.json()
        const { id } = params;
    try {

        await connectMongoDB();
        // get event
        const event = await Event.findById(eventId);
        if (!event) {
            return NextResponse.json({ error: 'תקלה. אירוע לא נמצא    ' }, { status: 404 });
        }
        // get employee
        const thisEmp = await Employee.findById(id)
        // attach employee to event
        const newEvent = new Event(event)
        newEvent.employee = `${thisEmp.first_name} ${thisEmp.last_name}`;
        newEvent.isAssigned = true;
        newEvent.save()

        return NextResponse.json(newEvent, { status: 200 });
    } catch (err) {
        return NextResponse.json(err, { status: 500 });
    }
}


