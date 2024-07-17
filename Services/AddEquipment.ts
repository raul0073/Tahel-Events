'use server'
import { EquipmentDTO } from "@/lib/DB/Models/Equipment";
const {localhost} = process.env

export const addEquipmentService = async (data: EquipmentDTO) => {
    try {
      console.log(localhost)
        const res = await fetch(`${localhost}/api/equipment`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        });
    
        if (!res.ok) {
            return res.json()
        }
    
        return res.json()
      } catch (err) {
        console.log("cant add equipment", err);
      }

}

