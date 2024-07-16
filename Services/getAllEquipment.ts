

'use server'
const {localhost} = process.env
export const getAllEquipmentService = async () => {
    try {
        const res = await fetch(`${localhost}/api/equipment`, {
          method: 'GET',
          cache: "no-cache",
          headers: {
            'Content-Type': 'application/json',
          },
        });
    
        if (!res.ok) {
            return res.json()
        }
    
        return res.json()
      } catch (err) {
        console.log("cant get equipemt details", err);
      }

}

