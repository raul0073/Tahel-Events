"use client";
import AssignEventComp from "@/components/ManagerView/Components/Events/AssignEventComp";
import {
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { toast } from "@/components/ui/use-toast";
import { EventType } from "@/lib/DB/Models/Event";
import { updateEventStore } from "@/lib/features/eventsSlice";
import { RootState } from "@/lib/store";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { markEventEmployee } from "../../../../Services/markEvent";
import AssignedEventComp from "../../ManagerView/Components/Events/AssignedEventComp";
import { prettyTime } from "../Utils/UI-functions";

function EventInfoModal({ event }: { event: EventType }) {
	const dispatch = useDispatch();
	// flag modal view
	const [loading, setLoading] = useState<boolean>(false);
	// get user
	const emp = useSelector((state: RootState) => state.employee.employee);
	// handle mark event
	const handleClick = async (empId?: string) => {
		try {
		  const id: string = empId ? empId : emp._id;
	  
		  setLoading(true);
		   const res = await markEventEmployee(event, id);
		if (res.error) {
			toast({
			  title: res.error,
			  variant: "destructive",
			});
		  } else {
			dispatch(updateEventStore(res));
			toast({
			  title: `נרשמת לאירוע בהצלחה`,
			});
		  }
		} catch (err) {
		  console.error(err); 
		} finally {
		  setLoading(false);
		}
	  };
	return (
		<DialogContent className="">
			<DialogHeader>
				<DialogTitle className="text-center text-2xl font-semibold">
					פרטי אירוע
				</DialogTitle>
				<DialogDescription className="text-center">
					{new Date(event.date).toLocaleDateString("il")}
				</DialogDescription>
			</DialogHeader>
			<Label>שעות האירוע:</Label>
			<p className="font-semibold">{prettyTime(event.start)}-{prettyTime(event.end)}</p>
			<Separator />
			<Label>מיקום:</Label>
			<p className="font-semibold">{event.location} </p>
			<Separator />
			<Label>מתנפחים:</Label>
			{event.equipment.map((item: string, index: number) => {
				return (
					<p key={index} className="font-semibold text-xs">
						{item}
					</p>
				);
			})}
			<Separator />
			<DialogFooter className="py-4 w-full flex justify-center items-center">
				{!event.isAssigned ? (
				
					<AssignEventComp emp={emp} event={event} handleClick={handleClick} loading={loading} />
	
				) : (
					<>
						<AssignedEventComp emp={emp} event={event} />
					</>
				)}
			</DialogFooter>
		</DialogContent>
	);
}

export default EventInfoModal;
