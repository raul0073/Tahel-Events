

export const getAllEquipmentService = async () => {
    try {
        const res = await fetch(`api/equipment`, {
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
        console.log("cant get equipemt details", err);
      }

}

