import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { UserType } from "@/lib/DB/Models/Employee";
import { useEffect, useState } from "react";
import { useDispatch } from 'react-redux';
import { Separator } from "../ui/separator";
import labels from "./../../../Labels/ManagerView.json";
import AddEquipmentDrawer from "./Components/Equipment/AddEquipmentDrawer";
import AddEventDrawer from "./Components/Events/AddEventDrawer";
import EventsTable from "./Components/Events/EventsTable";
import MonthSlider from "./Components/MonthSlider";
import { getEqData, getEventsData } from "./Utils/functions";

function ManagerView({ user }: { user: UserType }) {

	const [selectedMonth, setSelectedMonth] = useState<number>(new Date().getMonth() +1)
	const dispatch = useDispatch()

	useEffect(() => {
		getEqData(dispatch)
		getEventsData(dispatch)
	}, [dispatch]);


	return (
		<div className="flex flex-col space-y-4">
			<header>
			<h2 className="font-semibold text-xl">
				{labels.header1}
				{user.first_name}, {labels.header2}
			</h2>
				<MonthSlider setSelectedMonth={setSelectedMonth} selectedMonth={selectedMonth}/>
			</header>
			<Separator />
			<AddEventDrawer text={labels.addEventBtn} />

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
			<AddEquipmentDrawer text={`הוסף פריט חדש`}/>
		</div>
	);
}

export default ManagerView;
