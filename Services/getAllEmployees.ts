
'use server'
const {localhost} = process.env


export const getAllEmployeesService = async () => {
    try {
        const res = await fetch(`${localhost}/api/employees`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });
    
        if (!res.ok) {
            return res.json()
        }
    
        return res.json()
      } catch (err) {
        console.log("cant get employees list", err);
      }

}