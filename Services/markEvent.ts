'use server'
const {localhost} = process.env

export const markEventEmployee = async (data: unknown, id: string) => {
    try {
        const res = await fetch(`${localhost}/api/employee/${id}`, {
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
export const unMarkEventEmployee = async (data: unknown, id: string) => {
    try {
        const res = await fetch(`${localhost}/api/employee/${id}`, {
          method: 'PUT',
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
        console.log("cant un sub employee", err);
      }

}
