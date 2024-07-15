import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { UserType } from "@/lib/DB/Models/Employee";
import { useEffect, useState } from "react";
import { useDispatch } from 'react-redux';
import { Separator } from "../ui/separator";
import labels from "./../../../Labels/ManagerView.json";

import EventsCards from "../EventsCards";
import AddEventDrawer from "./Components/Events/AddEventDrawer";
import EventsTable from "../root/Events/EventsTable";
import MonthSlider from "../root/MonthSlider";
import { getEqData, getEventsData } from "../root/Utils/functions";

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
			<h2 className="font-semibold text-2xl mb-4 text-[#C3ACD0] text-center">
     			 {`כל האירועים`}
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
				<TabsContent value="cards">
					<EventsCards selectedMonth={selectedMonth} user={user} />
				</TabsContent>
			</Tabs>
			<Separator />
				<AddEventDrawer />
		</div>
	);
}

export default ManagerView;
