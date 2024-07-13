import { z } from "zod";
import { addEquipmentSchema } from "./addEquipmentSchema";


const addEventSchema = z.object({
    date: z.coerce.date({
        required_error: "תאריך הוא שדה חובה",
        invalid_type_error: "תאריך לא תקין"
      }).transform((val) => new Date(val)),
    start: z.coerce.number({
      required_error: "שעת התחלה היא שדה חובה",
      invalid_type_error: "שעת התחלה צריכה להיות מספר"
    }).min(0, "שעת התחלה לא יכולה להיות שלילית").max(23, "שעת התחלה צריכה להיות בין 0 ל-23"),
    end: z.coerce.number({
      required_error: "שעת סיום היא שדה חובה",
      invalid_type_error: "שעת סיום צריכה להיות מספר"
    }).min(0, "שעת סיום לא יכולה להיות שלילית").max(23, "שעת סיום צריכה להיות בין 0 ל-23"),
    location: z.string({
      required_error: "מיקום הוא שדה חובה",
      invalid_type_error: "מיקום צריך להיות טקסט"
    }).min(1, "מיקום לא יכול להיות ריק"),
    equipment: z.array(z.string({
      message: "יש לכלול לפחות פריט ציוד אחד"
    })),
    isAssigned: z.boolean().default(false),
    employee: z.string().default('')
  })

  export { addEventSchema };

