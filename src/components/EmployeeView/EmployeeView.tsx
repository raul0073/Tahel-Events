import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import EventsTable from '../ManagerView/Components/Events/EventsTable'
import { getEqData, getEventsData } from '../ManagerView/Utils/functions'
import { Separator } from "../ui/separator"
import labels from "./../../../Labels/ManagerView.json"
import MonthSlider from '../ManagerView/Components/MonthSlider'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { UserType } from '@/lib/DB/Models/Employee'


function EmployeeView({user} : {user: UserType}) {
	const [selectedMonth, setSelectedMonth] = useState<number>(new Date().getMonth() +1)
	const dispatch = useDispatch()

	useEffect(() => {
		getEqData(dispatch)
		getEventsData(dispatch)
	}, [dispatch]);
  return (
    <section className="empolyee">
     <div className="flex flex-col space-y-4">
			<header>
			<h2 className="font-semibold text-xl">
      {}
			</h2>
				<MonthSlider setSelectedMonth={setSelectedMonth} selectedMonth={selectedMonth}/>
			</header>
			<Separator />
			<Tabs defaultValue="table" dir="rtl">
				<TabsList className="w-full flex justify-center">
					<TabsTrigger value="table" className="w-full">
						טבלה
					</TabsTrigger>
					<TabsTrigger value="cards" className="w-full">
						כרטיסיות
					</TabsTrigger>
				</TabsList>
				<TabsContent value="table">
					<EventsTable selectedMonth={selectedMonth}/>
				</TabsContent>
				<TabsContent value="cards">Change your password here.</TabsContent>
			</Tabs>
			<Separator />
		</div>
    </section>
  )
}

export default EmployeeView
