import Equipment from "@/lib/DB/Models/Equipment";
import connectMongoDB from "@/lib/DB/MongoConnection";
import { NextRequest, NextResponse } from "next/server";


// get all equipment
export async function GET(req: NextRequest, res:NextResponse) {
    try {
        await connectMongoDB();

        const equipment = await Equipment.find({});
        if (!equipment) {
            return NextResponse.json({ error: 'תקלה. ציוד לא נמצא    ' }, { status: 404 });
        }

        return NextResponse.json(equipment, { status: 200 });
    } catch (err) {
        return NextResponse.json(err, { status: 500 });
    }
}

export async function POST(req: NextRequest, res:NextResponse) {
    
    try {
        const data = await req.json()
        if(!data){
            return NextResponse.json({ error: 'תקלה. ציוד לא חוקי    ' }, { status: 404 });
        }
        await connectMongoDB();

        const newEquipment = new Equipment(data)
        const findExistsingEquipment = await Equipment.findOne({label: newEquipment.label})
        if(findExistsingEquipment){
            return NextResponse.json({ error: 'תקלה. ציוד עם שם זהה כבר קיים    ' }, { status: 404 });
        }
        
        newEquipment.save()
        
        return NextResponse.json(newEquipment, { status: 200 });
    } catch (err) {
        return NextResponse.json(err, { status: 500 });
    }
}
