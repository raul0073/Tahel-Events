'use server'
const {localhost} = process.env
import { EventType } from './../src/lib/DB/Models/Event';
export const addEventService = async (data: EventType) => {
    try {
        const res = await fetch(`${localhost}/api/events`, {
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
        console.log("cant add event", err);
      }

}

