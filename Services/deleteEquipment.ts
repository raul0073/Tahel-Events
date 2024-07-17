'use server'
const {localhost} = process.env

export const deleteEquipmentService = async (id: string) => {
  console.log(id)
    try {
        const res = await fetch(`${localhost}/api/equipment/${id}`, {
          method: 'DELETE',
        });
    
        if (!res.ok) {
            return res.json()
        }
    
        return res.json()
      } catch (err) {
        console.log("cant delete equipment", err);
      }

}

