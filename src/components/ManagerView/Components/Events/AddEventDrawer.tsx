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
import { PlusCircledIcon } from '@radix-ui/react-icons'
import AddEventForm from './AddEventForm'
import labels from '../../../../../Labels/AddEvent.json'
function AddEventDrawer() {
  return (
    <Drawer>
  <DrawerTrigger className='fixed bottom-[10vh] right-5 z-10 bg-primary h-[3rem] w-[3rem] rounded-full hover:scale-105'>
    <PlusCircledIcon color='white' className="w-full h-full rounded-full"/>
  </DrawerTrigger>
  <DrawerContent>
    <DrawerHeader>
      <DrawerTitle className='text-appLightPurple'>{labels.addEventSubTitle}</DrawerTitle>
      <DrawerDescription>{labels.addEventHeader}</DrawerDescription>
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
