import Equipment from "@/lib/DB/Models/Equipment";
import connectMongoDB from "@/lib/DB/MongoConnection";
import { NextRequest, NextResponse } from "next/server";

export async function DELETE(req: NextRequest, { params }: { params: { id: string } }) {
    const { id } = params;
    try {
        if (!id) {
            return NextResponse.json({ error: 'מספר מזהה לא חוקי' }, { status: 400 });
        }
        await connectMongoDB();
        const result = await Equipment.deleteOne({ _id: id });

        if (result.deletedCount === 0) {
            return NextResponse.json({ error: 'ציוד לא נמצא' }, { status: 404 });
        }
        console.log(result)
        return NextResponse.json("נמחק בהצלחה", { status: 200 });
    } catch (err) {
        return NextResponse.json(err, { status: 500 });
    }
}
export async function PUT(req: NextRequest, { params }: { params: { id: string } } ) {
    const {newName} = await req.json()
    const {id} = params
    console.log("ROUTE:" , id, newName)
    try {
        if (!newName) {
            return NextResponse.json({ error: ' שם מתנפח לא חוקי' }, { status: 400 });
        }
        await connectMongoDB();
        const result = await Equipment.updateOne({ _id: id }, { $set: { label: newName } });

        if (result.matchedCount === 0) {
            return NextResponse.json({ error: 'ציוד לא נמצא  ' }, { status: 404 });
        }
        
        return NextResponse.json("עודכן בהצלחה", { status: 200 });
    } catch (err) {
        return NextResponse.json(err, { status: 500 });
    }
}

