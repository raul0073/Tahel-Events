import Event from "@/lib/DB/Models/Event";
import connectMongoDB from "@/lib/DB/MongoConnection";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, res:NextResponse) {
    try {
        await connectMongoDB();
        const events = await Event.find({});
        if (!events) {
            return NextResponse.json({ error: 'תקלה. לא נמצאו אירועים    ' }, { status: 404 });
        }
        return NextResponse.json(events, { status: 200 });
    } catch (err) {
        return NextResponse.json(err, { status: 500 });
    }
}


export async function POST(req: NextRequest, res:NextResponse) {
    try {
        const data = await req.json()
        if(!data){
            return NextResponse.json({ error: 'תקלה. אירוע לא חוקי    ' }, { status: 404 });
        }
        await connectMongoDB();
        const newEvent = new Event(data)        
        await newEvent.save()


        const savedEvent = await Event.findById(newEvent._id);
        console.log(savedEvent)
        return NextResponse.json(savedEvent, { status: 201  });
    } catch (err) {
        return NextResponse.json(err, { status: 500 });
    }
}
