'use client'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { EquipmentType } from '@/lib/DB/Models/Equipment'
import React, { useEffect, useState } from 'react'
import { deleteEquipmentService } from '../../../../../../Services/deleteEquipment'
import { toast } from '@/components/ui/use-toast'
import { updateEquipmentNameService } from '../../../../../../Services/updateEquipment'

function EditEquipmentComp({selectedItem}: {selectedItem: EquipmentType}) {
  const [loading, setLoading] = useState<boolean>(false)
  const [newName, setNewName] = useState<string>()
  const deleteEquipment = async (id: string) => {
    setLoading(true)
    try {
      const res = await deleteEquipmentService(id)
      toast({
        title: res || res.error,
        variant: res.error? 'destructive' : 'default'
      })
    } catch (error) {
      console.log(error)
    } finally{
      setLoading(false)
    }
  }
  const updateEquipment = async (id: string, newName:string) => {
    setLoading(true)
    try {
      const res = await updateEquipmentNameService(id, newName)
      toast({
        title: res || res.error,
        variant: res.error? 'destructive' : 'default'
      })
    } catch (error) {
      console.log(error)
    } finally{
      setLoading(false)
    }
  }
    useEffect(()=> {
    },[selectedItem])
  return (
    <div className="w-full flex justify-center items-center my-12 flex-col bg-gray-100 rounded-lg p-4">
        <Input type="text" defaultValue={selectedItem.label} onChange={(e)=> setNewName(e.target.value)} key={selectedItem._id}/>
    <Button className="w-2/3 mt-2" variant={'default'} disabled={loading ? true : false } onClick={() => updateEquipment(selectedItem._id, newName as string)}>ערוך</Button>
    <Button className="w-2/3 mt-2" variant={'destructive'} disabled={loading ? true : false } onClick={() => deleteEquipment(selectedItem._id)}>מחק</Button>
</div>
  )
}

export default EditEquipmentComp
