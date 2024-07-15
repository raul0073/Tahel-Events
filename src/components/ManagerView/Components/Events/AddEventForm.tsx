"use client"
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
import { toast } from "@/components/ui/use-toast"
import { addEventStore } from "@/lib/features/eventsSlice"
import { zodResolver } from "@hookform/resolvers/zod"
import { EraserIcon } from "@radix-ui/react-icons"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { useDispatch } from "react-redux"
import { z } from "zod"
import { addEventService } from "../../../../../Services/addEventService"
import { addEventSchema } from '../../../../../ZodSchema/addEventSchema'
import SelectEquipment from "../Equipment/SelectEquipment"
import AddressSearch from "../AddressSearch/AddressSearch"

function AddEventForm() {
  const [selected, setSelected] = useState<string[]>([]);

  const dispatch = useDispatch()
    const form = useForm<z.infer<typeof addEventSchema>>({
        resolver: zodResolver(addEventSchema),
        defaultValues: {
          equipment: selected as [string, ...string[]]
        }
      })

      async function onSubmit(values: z.infer<typeof addEventSchema>) {
        const eventData = { ...values, equipment: selected };
        try {
          const res = await addEventService(eventData)  
          console.log(res)
          if(res.error){
            toast({
              title: `${res.error}`,
              variant: 'destructive'
            })
          }
          else{
            dispatch(addEventStore(res))
            toast({
              title: `אירוע הוסף בהצלחה`
            })
            return form.reset()
          }
          
          
        } catch (error) {
          console.log(error)
        }
      }

      const onEquipmentChange = (selectedOption: string) => {
        console.log(selectedOption);
        setSelected((prevSelected) => {
          if (prevSelected.includes(selectedOption)) {
            return prevSelected.filter(option => option !== selectedOption);
          } else {
            return [...prevSelected, selectedOption];
          }
        });
      };

  return (
    <Form {...form} >
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 p-4 overflow-auto">
      <FormField
          control={form.control}
          name="date"
          render={({ field }) => (
            <FormItem>
              <FormLabel>תאריך</FormLabel>
              <FormControl>
                <Input type="date" onChange={(e) => field.onChange(e.target.value)}  />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <ul className="w-full flex text-xs text-gray-400">
        {selected.map((item: string, index: number) => {
        return <li key={index} className="mx-1 cursor-pointer flex" onClick={()=>onEquipmentChange(item)}>{item} <EraserIcon /> </li> 
      })}
      </ul>
         <FormField
          control={form.control}
          name="equipment"
          render={({ field }) => (
            <FormItem>
              <FormLabel>ציוד </FormLabel>
              <FormControl>
                <SelectEquipment onChange={onEquipmentChange}/>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      <FormField
          control={form.control}
          name="start"
          render={({ field }) => (
            <FormItem>
              <FormLabel>התחלת אירוע</FormLabel>
              <FormControl>
                <Input type="number" placeholder="14" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      <FormField
          control={form.control}
          name="end"
          render={({ field }) => (
            <FormItem>
              <FormLabel>סיום אירוע</FormLabel>
              <FormControl>
                <Input type="number" placeholder="16" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      <FormField
          control={form.control}
          name="location"
          render={({ field }) => (
            <FormItem>
              <FormLabel>מיקום </FormLabel>
              <FormControl>
                <Input type="text" placeholder="נתניה" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {/* <AddressSearch /> */}
     
        <Button type="submit" className="w-full">הוסף</Button>
      </form>
    </Form>
  )
}

export default AddEventForm



