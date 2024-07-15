import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { EquipmentType } from '@/lib/DB/Models/Equipment'
import React, { useEffect } from 'react'

function EditEquipmentComp({selectedItem}: {selectedItem: EquipmentType}) {

    useEffect(()=> {
    },[selectedItem])
  return (
    <div className="w-full flex justify-center items-center my-12 flex-col bg-gray-100 rounded-lg p-4">
        <Input type="text" defaultValue={selectedItem.label} key={selectedItem._id}/>
    <Button className="w-2/3 mt-2" variant={'default'}>ערוך</Button>
    <Button className="w-2/3 mt-2" variant={'destructive'}>מחק</Button>
</div>
  )
}

export default EditEquipmentComp
