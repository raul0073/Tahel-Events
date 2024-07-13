import { UserLoginType } from "@/lib/DB/Models/Employee";
import { EquipmentDTO, EquipmentType } from "@/lib/DB/Models/Equipment";


export const addEquipmentService = async (data: EquipmentDTO) => {
    try {
        const res = await fetch(`api/equipment`, {
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

