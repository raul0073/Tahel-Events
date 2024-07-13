import { UserLoginType } from "@/lib/DB/Models/Employee";


export const loginUser = async (user: UserLoginType) => {
    try {
        const res = await fetch(`api/login`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(user),
        });
    
        if (!res.ok) {
            return res.json()
        }
    
        return res.json()
      } catch (err) {
        console.log("cant login user", err);
      }

}

