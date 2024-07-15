"use client";
import { Button } from "@/components/ui/button";
import { UserType } from "@/lib/DB/Models/Employee";
import { EventType } from "@/lib/DB/Models/Event";
import { CheckIcon } from "@radix-ui/react-icons";
import { Spinner } from "@radix-ui/themes";
import React, { useState } from "react";
import { unMarkEventEmployee } from "../../../../../Services/markEvent";
import { toast } from "@/components/ui/use-toast";
import { useDispatch } from "react-redux";
import { updateEventStore } from "@/lib/features/eventsSlice";

function AssignedEventComp({
	event,
	emp,
}: {
	event: EventType;
	emp: UserType;
}) {
	const empName = `${emp.first_name} ${emp.last_name}`;
	const [loading, setLoading] = useState<boolean>(false);
  const dispatch = useDispatch()
	const handleClick = async () => {
		try {
			setLoading(true);
			const res = await unMarkEventEmployee(event, emp._id);
			console.log(res);
			if (res.error) {
				toast({
					title: res.error,
					variant: "destructive",
				});
			} else {
        dispatch(updateEventStore(res));
				toast({
					title: `הוסרת מאירוע בהצלחה`,
				});
			}
		} catch (err) {
			console.log(err);
		} finally {
			setLoading(false);
		}
	};
	return (
		<>
			<div className="w-full">
				<div className="w-full flex items-center">
					<CheckIcon color={"green"} height={30} width={30} /> עובד:{" "}
					{event.employee}
					<div className="w-full flex justify-end items-center">
						{event.employee?.trim() === empName.trim() ? (
							<Button
								className="w-full"
								type="submit"
								variant={"destructive"}
								onClick={() => handleClick()}
								disabled={loading ? true : false}>
								<Spinner
									loading={loading ? true : false}
									size="2"
									className="mx-1"></Spinner>{" "}
								{`הסר שיבוץ `}
							</Button>
						) : null}
					</div>
				</div>
			</div>
		</>
	);
}

export default AssignedEventComp;
