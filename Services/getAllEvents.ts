
'use server'
const {localhost} = process.env

export const getAllEventsService = async () => {
    try {
        const res = await fetch(`${localhost}/api/events`, {
          method: 'GET',
          cache: 'no-store',
          headers: {
            'Content-Type': 'application/json',
          },
        });
    
        if (!res.ok) {
            return res.json()
        }
    
        return res.json()
      } catch (err) {
        console.log("cant get events details", err);
      }

}

