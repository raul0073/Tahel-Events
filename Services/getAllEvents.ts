

export const getAllEventsService = async () => {
    try {
        const res = await fetch(`api/events`, {
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
        console.log("cant get events details", err);
      }

}

