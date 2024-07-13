"use client";
import { Button } from "@/components/ui/button";
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
import { addEventStore } from "@/lib/features/eventsSlice";
import { RootState } from "@/lib/store";
import { CheckIcon } from "@radix-ui/react-icons";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { markEventEmployee } from "../../../../../Services/markEvent";

function EventInfoModal({ event }: { event: EventType }) {
	const dispatch = useDispatch();
	// flag modal view
	const [clicked, setClicked] = useState<boolean>(false);
	// get user
	const emp = useSelector((state: RootState) => state.employee.employee);
	// handle mark event
	const handleClick = async () => {
		try {
			const res = await markEventEmployee(event, emp._id);
            console.log(res)
			if (res.error) {
				toast({
					title: res.error,
					variant: "destructive",
				});
			} else {
				dispatch(addEventStore(res));
				toast({
					title: `נרשמת לאירוע בהצלחה`,
				});
			}
		} catch (err) {
			console.log(err);
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
			<p className="font-semibold">{`${event.start}-${event.end}`}</p>
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
					<Button onClick={() => handleClick()}>השתבץ לאירוע</Button>
				): (<>
					<CheckIcon color={'green'} /> <h3>עובד: {event.employee}</h3>
				</>)}
			</DialogFooter>
		</DialogContent>
	);
}

export default EventInfoModal;
