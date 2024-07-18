import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { UserType } from "@/lib/DB/Models/Employee";
import { RootState } from "@/lib/store";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import EventsCards from "../EventsCards";
import EventsTable from "../root/Events/EventsTable";
import MonthSlider from "../root/MonthSlider";
import { getEventsData } from "../root/Utils/functions";
import { Separator } from "../ui/separator";

function EmployeeView({ user }: { user: UserType }) {
	const [selectedMonth, setSelectedMonth] = useState<number>(
		new Date().getMonth() + 1
	);
	const dispatch = useDispatch();

	const eventsInStore = useSelector((state: RootState) => state.events);
	const hasEvents = Object.keys(eventsInStore).length > 0;

	useEffect(() => {
		if (!hasEvents) {
			getEventsData(dispatch);
		}
	}, [hasEvents, dispatch]);

	return (
		<section className="empolyee">
			<div className="w-full flex flex-col space-y-4 items-center text-center">
				<header>
					<h2 className="font-semibold text-2xl mb-4 text-appLightPurple">
						{`כל האירועים`}
					</h2>
					<MonthSlider
						setSelectedMonth={setSelectedMonth}
						selectedMonth={selectedMonth}
					/>
				</header>
				<Separator />
				<Tabs defaultValue="table" dir="rtl" className="w-[98%]">
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
			</div>
		</section>
	);
}

export default EmployeeView;
