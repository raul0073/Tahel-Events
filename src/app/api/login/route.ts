import connectMongoDB from "@/lib/DB/MongoConnection";
import { NextRequest, NextResponse } from "next/server";
import Employee, { UserLoginType } from '../../../lib/DB/Models/Employee';


export async function POST(req: NextRequest, res: NextResponse) {
    const loginDetails: UserLoginType = await req.json();
    try {
        await connectMongoDB();

        const user = await Employee.findOne({ email: loginDetails.email });
        if (!user) {
            return NextResponse.json({ error: 'כתובת המייל אינה רשומה במערכת' }, { status: 404 });
        }

        if (user.password !== loginDetails.password) {
            return NextResponse.json({ error: 'סיסמה שגויה' }, { status: 401 });
        }
        user.lastSeen = new Date()
        await user.save()

        
        return NextResponse.json({ msg: 'התחברות הושלמה בהצלחה', user: user });
    } catch (err) {
        throw new Error('Cannot login user: ' + err);
    }
}
