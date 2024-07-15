import { equipmentSchema } from '@/lib/DB/Models/Equipment';
import mongoose, { Schema } from 'mongoose';


// mongoose schema
const eventSchema = new Schema({
    date: {
        type: Date,
        required: true,
    },
    start: {
        type: Number,
        required: true,
    },
    end: {
        type: Number,
        required: true,
    },
    location: {
        type: String,
        required: true
    },
    isAssigned: {
        type: Boolean,
        default: false
    },
    equipment: {
        type: [String],
        required: true
    },
    employee: {
        type: String,
        required: false,
        default: ''
    }
}, {
    timestamps: true
},
)


const Event = mongoose.models.events || mongoose.model("events", eventSchema)
export default Event



export type iLocation ={
    city: string,
    street: string,
    no: number
}

export type EventType = {
    _id?: string;
    date: Date;
    start: number;
    end: number;
    location: string;
    isAssigned: boolean;
    equipment: string[]; 
    employee?: string;
  }
  
  export type EventsStateType = {
    [month: number]: EventType[];
  }
  