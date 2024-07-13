import mongoose from 'mongoose';
import Event from './Event';

// Define the EventInfo schema, inheriting from Event
const eventInfoSchema = new mongoose.Schema({
    contact_name: {
        type: String,
        required: true,
    },
    contact_phone: {
        type: String,
        required: true,
    },
    withTowable: {
        type: Boolean,
        required: true,
    },
    description: {
        type: String,
        required: true,
        maxlength: [500, 'Description cannot be more than 500 characters'],
        minLength: [5, 'Description must be at least 4 characters']
    },
});

// Create the EventInfo model using the discriminator
const EventInfo = Event.discriminator('EventInfo', eventInfoSchema);

export default EventInfo;