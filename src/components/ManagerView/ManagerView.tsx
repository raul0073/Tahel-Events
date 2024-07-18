import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { UserType } from "@/lib/DB/Models/Employee";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Separator } from "../ui/separator";

import { RootState } from "@/lib/store";
import EventsCards from "../EventsCards";
import EventsTable from "../root/Events/EventsTable";
import MonthSlider from "../root/MonthSlider";
import {
	getEmployeesData,
	getEqData,
	getEventsData,
} from "../root/Utils/functions";
import AddEventDrawer from "./Components/Events/AddEventDrawer";

function ManagerView({ user }: { user: UserType }) {
	const [selectedMonth, setSelectedMonth] = useState<number>(
		new Date().getMonth() + 1
	);
	const dispatch = useDispatch();
	const equipmentInStore = useSelector(
		(state: RootState) => state.equipment.equipment
	);

	const eventsInStore = useSelector((state: RootState) => state.events);
	const hasEvents = Object.keys(eventsInStore).length > 0;

	const employeesInStore = useSelector(
		(state: RootState) => state.employee.employeeList
	);

	useEffect(() => {
		if (!equipmentInStore.length) {
			getEqData(dispatch);
		}

		if (!hasEvents) {
			getEventsData(dispatch);
		}
		if (!employeesInStore.length) {
			getEmployeesData(dispatch);
		}
	}, [equipmentInStore.length, employeesInStore.length, hasEvents, dispatch]);

	return (
		<div className="flex flex-col space-y-4">
			<header>
				<h2 className="font-semibold text-2xl mb-4 text-[#C3ACD0] text-center">
					{`כל האירועים`}
				</h2>
				<MonthSlider
					setSelectedMonth={setSelectedMonth}
					selectedMonth={selectedMonth}
				/>
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
					<EventsTable selectedMonth={selectedMonth} />
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
