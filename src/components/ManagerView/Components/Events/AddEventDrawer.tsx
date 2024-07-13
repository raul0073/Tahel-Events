import React from 'react'
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
  } from "@/components/ui/drawer"
import { Button } from '@/components/ui/button'
import { PlusIcon } from '@radix-ui/react-icons'
import AddEventForm from './AddEventForm'
import labels from '../../../../../Labels/AddEvent.json'
function AddEventDrawer({text} : {text: string}) {
  return (
    <Drawer>
  <DrawerTrigger className='border rounded-lg bg-primary flex items-center justify-center p-4 text-white'>
     <PlusIcon className="mx-1"/>  {text}
  </DrawerTrigger>
  <DrawerContent>
    <DrawerHeader>
      <DrawerTitle>{labels.addEventHeader}</DrawerTitle>
      <DrawerDescription>{labels.addEventSubTitle}</DrawerDescription>
    </DrawerHeader>
    <AddEventForm />
    <DrawerFooter>
      <DrawerClose>
        <Button variant="outline">סגור</Button>
      </DrawerClose>
    </DrawerFooter>
  </DrawerContent>
</Drawer>
  )
}

export default AddEventDrawer
