'use client'
import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { addEquipmentSchema } from '../../../../../ZodSchema/addEquipmentSchema'
import { addEquipmentService } from "../../../../../Services/AddEquipment"
import { toast } from "@/components/ui/use-toast"
import { useDispatch } from "react-redux"
import { addEquipmentToStore } from "@/lib/features/equipmentSlice"

function AddEquipmentForm() {
  const dispatch = useDispatch()
    const form = useForm<z.infer<typeof addEquipmentSchema>>({
        resolver: zodResolver(addEquipmentSchema),
      })
      async function onSubmit(values: z.infer<typeof addEquipmentSchema>) {
        try {
          const res = await addEquipmentService(values)  
          if(res.error){
            toast({
              title: `${res.error}`,
              variant: 'destructive'
            })
          }
          else{
            dispatch(addEquipmentToStore(res))
            toast({
              title: `${res.label}, הוסף בהצלחה`
            })
          }
            form.reset()
          
        } catch (error) {
          console.log(error)
        }
      }
  return (
    <Form {...form} >
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 p-4 overflow-auto">
      <FormField
          control={form.control}
          name="label"
          render={({ field }) => (
            <FormItem>
              <FormLabel>שם מתקן</FormLabel>
              <FormControl>
                <Input type="text" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />  
        <Button type="submit" className="w-full">הוסף</Button>
      </form>
    </Form>
  )
}

export default AddEquipmentForm
