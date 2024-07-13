import { z } from "zod";

// Define the EquipmentType Zod schema
export const addEquipmentSchema = z.object({
  label: z.string({
    message: "למתקן חייב להיות שם"
  }),
});