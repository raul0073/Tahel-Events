import React, { useState } from 'react'
import labels from "./../../../Labels/ManagerView.json";
import AddEquipmentDrawer from "./Components/Equipment/AddEquipmentDrawer";
import AddEventDrawer from "./Components/Events/AddEventDrawer";
import { PlusCircledIcon } from '@radix-ui/react-icons';

function AddNewButton() {
    const [showBtns, setShowBtns] = useState<boolean>(false)
  return (
    <div className="fixed bottom-[7vh] right-5 flex flex-col items-end z-10">
            <div 
                className="rounded-full bg-primary h-10 w-10 cursor-pointer flex justify-center items-center"
                onClick={() => setShowBtns(!showBtns)}
            >
                <PlusCircledIcon color='white' className="w-full h-full"/>
            </div>
        </div>
  )
}

export default AddNewButton