'use server'
const {localhost} = process.env

export const updateEquipmentNameService = async (id: string, newName: string) => {
    console.log("SERVICE",id, newName)
    try {
        const res = await fetch(`${localhost}/api/equipment/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ newName }), 
        });
    
        if (!res.ok) {
            return res.json()
        }
    
        return res.json()
      } catch (err) {
        console.log("cant update equipment", err);
      }

}
