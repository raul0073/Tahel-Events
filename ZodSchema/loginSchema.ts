import { z } from "zod";


const loginSchema = z.object({
    password: z.string()
        .min(4, { message: "סיסמה חייבת להכיל לפחות 4 תווים" })
        .max(8, { message: "סיסמה יכולה להכיל לכל היותר 8 תווים" }),
    email: z.string()
        .min(4, { message: "כתובת האימייל אינה תקינה" })
        .email({ message: "כתובת האימייל אינה תקינה" }),
  })
const forgotPassScehma = z.object({
    email: z.string()
        .min(4, { message: "כתובת האימייל אינה תקינה" })
        .email({ message: "כתובת האימייל אינה תקינה" }),
  })

  export { loginSchema, forgotPassScehma };