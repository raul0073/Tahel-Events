"use client";
import EventsTable from "@/components/root/Events/EventsTable";
import MonthSlider from "@/components/root/MonthSlider";
import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";
import { EventType } from "@/lib/DB/Models/Event";
import { RootState } from "@/lib/store";
import { redirect } from "next/navigation";
import { Suspense, useEffect, useState } from "react";
import { useSelector } from "react-redux";

function Page() {
	const [selectedMonth, setSelectedMonth] = useState<number>(
		new Date().getMonth() + 1
	);
	const emp = useSelector((state: RootState) => state.employee.employee);
	if (!emp) {
		redirect("/main");
	}
	const eventsList = useSelector((state: RootState) => state.events);
	const empEventsList =
		eventsList[selectedMonth]?.filter(
			(event: EventType) =>
				event.employee === `${emp.first_name} ${emp.last_name}`
		) || [];

	useEffect(() => {}, [selectedMonth]);

	return (
		<>
			<Suspense fallback={<Skeleton className="h-[300px] w-full rounded-md" />}>
				<div className="flex flex-col space-y-4 items-center text-center">
					<header>
						<h2 className="font-semibold text-2xl mb-4 text-appLightPurple">
							{` האירועים שלי`}
						</h2>
						<MonthSlider
							setSelectedMonth={setSelectedMonth}
							selectedMonth={selectedMonth}
						/>
						{empEventsList.length > 0 && (
							<p>{`סה"כ החודש:  ${empEventsList.length}`}</p>
						)}
					</header>
					<Separator />
					<div className="w-full my-2">
						{empEventsList.length > 0 ? (
							<EventsTable
								customEvents={empEventsList}
								selectedMonth={selectedMonth}
							/>
						) : (
							<h2 className="text-center">אין אירועים להציג</h2>
						)}
					</div>
				</div>
			</Suspense>
		</>
	);
}

export default Page;
