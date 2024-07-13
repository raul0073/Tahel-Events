import mongoose, { Schema } from 'mongoose';


// mongoose schema
export const equipmentSchema = new Schema({
    label: {
        type: String,
        required: true,
    },
}, {
    timestamps: true
},
)



const Equipment = mongoose.models.equipments || mongoose.model("equipments", equipmentSchema)
export default Equipment


export type EquipmentType = {
    _id: string,
    label: string,
}
export type EquipmentDTO = {
    label: string,
}

