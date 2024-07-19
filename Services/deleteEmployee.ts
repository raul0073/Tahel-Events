'use server'
const {localhost} = process.env
import {revalidatePath} from 'next/cache';

export const deleteEmployeeService = async (id: string) => {
    try {
        const res = await fetch(`${localhost}/api/employee/${id}`, {
          method: 'DELETE',
        });
    
        if (!res.ok) {
            return res.json()
        }
        revalidatePath(`${localhost}/main`,)
        return res.json()
      } catch (err) {
        console.log("cant delete equipment", err);
      }

}

