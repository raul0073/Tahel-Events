"use client";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import {
	Table,
	TableBody,
	TableCaption,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";
import { EventType } from "@/lib/DB/Models/Event";
import { RootState } from "@/lib/store";
import { Fragment, Suspense, useState } from "react";
import { useSelector } from "react-redux";
import EventInfoModal from "./EventInfoModal";
import EventsTableSkeleton from "./EventsTableSkeleton";

function EventsTable({
	selectedMonth,
	customEvents,
}: {
	selectedMonth: number;
	customEvents?: EventType[];
}) {
	const [showEvent, setShowEvent] = useState<boolean>(false);
	let events = useSelector((state: RootState) => state.events[selectedMonth]);
	let emp = useSelector((state: RootState) => state.employee.employee);

	if (!events) {
		return <h2 className="w-full text-center my-8">אין אירועים להציג</h2>;
	}
	customEvents ? (events = customEvents) : (events = events);

	const sortedEvents = [...events].sort(
		(a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
	);
	return (
		<Fragment>
			<Suspense fallback={<EventsTableSkeleton />}>
				<Table>
					<TableCaption>מסומנים האירועים בהם שובצת</TableCaption>
					<TableHeader>
						<TableRow>
							<TableHead className="text-right">תאריך</TableHead>
							<TableHead className="text-right">{`מיקום`}</TableHead>
							<TableHead className="text-right">{`שעות אירוע`}</TableHead>
							<TableHead className="text-center">{"עובד"}</TableHead>
						</TableRow>
					</TableHeader>
					<TableBody className="rounded-lg">
						{sortedEvents.map((event: EventType) => {
							return (
								<Fragment key={event._id}>
									<Dialog>
										<DialogTrigger asChild>
											<TableRow
												key={event._id}
												onClick={() => setShowEvent(!showEvent)}
												className={`rounded-xl hover:cursor-pointer  ${
													event.employee ===
													`${emp.first_name} ${emp.last_name}`
														? "assigned"
														: ""
												}`}>
												<TableCell className="text-right">
													{new Date(event.date).toLocaleDateString("il")}
												</TableCell>
												<TableCell className="text-right">
													{event.location}
												</TableCell>
												<TableCell className="text-right">
													{event.start}:00-{event.end}:00
												</TableCell>
												<TableCell className="text-center">
													{event.isAssigned ? event.employee : `לא משובץ`}
												</TableCell>
											</TableRow>
										</DialogTrigger>
										<EventInfoModal event={event} />
									</Dialog>
								</Fragment>
							);
						})}
					</TableBody>
				</Table>
			</Suspense>
		</Fragment>
	);
}

export default EventsTable;
