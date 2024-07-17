import mongoose, { Schema } from 'mongoose';


// mongoose schema
const employeeSchema = new Schema({
    first_name: {
        type: String,
        required: true,
    },
    last_name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true,
        maxlength: [50, 'Password cannot be more than 50 characters']
    },
    phone_number: {
        type: String,
        required: true,
        maxlength: [10, 'Phone nnumber must be 10 numbers'],
        minLength: [10, 'Phone nnumber must be 10 numbers'],
    },
    isManager: {
        type: Boolean,
        required: true,
        default: false,
    },
    lastSeen: { type: Date, default: null }
}, {
    timestamps: true
},
)



const Employee = mongoose.models.employees || mongoose.model("employees", employeeSchema)
export default Employee



export type UserLoginType = {
    email: string,
    password: string,
}


export type UserType = {
    _id: string,
    first_name: string,
    last_name: string,
    email: string,
    password: string,
    phone_number: string,
    isManager: boolean,
    lastSeen?: Date;
}