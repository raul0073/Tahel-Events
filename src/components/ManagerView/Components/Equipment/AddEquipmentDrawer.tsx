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
import AddEquipmentForm from './AddEquipmentForm'


function AddEquipmentDrawer() {
  return (
    <Drawer>
  <DrawerTrigger className='fixed bottom-[8vh] right-5 z-10 bg-primary h-[3rem] w-[3rem] rounded-full hover:scale-105'>
    <PlusCircledIcon color='white' className="w-full h-full rounded-full"/>
  </DrawerTrigger>
  <DrawerContent>
    <DrawerHeader>
      <DrawerTitle className='text-appLightPurple'>{'הוסף ציוד חדש'}</DrawerTitle>
      <DrawerDescription>{`עדיפות לעד 2 מילים`}</DrawerDescription>
    </DrawerHeader>
    <AddEquipmentForm />
    <DrawerFooter>
      <DrawerClose>
        <Button variant="outline">סגור</Button>
      </DrawerClose>
    </DrawerFooter>
  </DrawerContent>
</Drawer>
  )
}

export default AddEquipmentDrawer
