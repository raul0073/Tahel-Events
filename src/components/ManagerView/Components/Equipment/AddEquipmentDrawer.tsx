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
import AddEquipmentForm from './AddEquipmentForm'


function AddEquipmentDrawer({text} : {text: string}) {
  return (
    <Drawer>
  <DrawerTrigger className='border rounded-lg bg-gray-500 flex items-center justify-center p-4 text-white'>
     <PlusIcon className='mx-1'/>  {text} 
  </DrawerTrigger>
  <DrawerContent>
    <DrawerHeader>
      <DrawerTitle>{text}</DrawerTitle>
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
