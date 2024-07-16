import Employee from "@/lib/DB/Models/Employee";
import connectMongoDB from "@/lib/DB/MongoConnection";
import { NextRequest, NextResponse } from "next/server";


// Get employee by ID
export async function GET(req: NextRequest, res: NextResponse) {
    try {
        await connectMongoDB();

        const employees = await Employee.find({});
        if (!employees) {
            return NextResponse.json({ error: ' לא נמצאו עובדים' }, { status: 404 });
        }

        return NextResponse.json(employees, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error: 'שגיאה. נסה שניץ' }, { status: 500 });
    }
}
