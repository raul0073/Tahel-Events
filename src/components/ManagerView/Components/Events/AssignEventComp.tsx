"use client";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { UserType } from "@/lib/DB/Models/Employee";
import { EventType } from "@/lib/DB/Models/Event";
import { RootState } from "@/lib/store";
import { Spinner } from "@radix-ui/themes";
import { useState } from "react";
import { useSelector } from "react-redux";

function AssignEventComp({
	event,
	emp,
	handleClick,
	loading,
}: {
	loading: boolean;
	event: EventType;
	emp: UserType;
	handleClick: (id?: string) => Promise<void>;
}) {
	const [empID, setEmpID] = useState<string>("");
	const allEmployees = useSelector(
		(state: RootState) => state.employee.employeeList
	);
	return (
		<>
			{emp.isManager ? (
				<div className="w-full flex flex-col justify-start items-start text-right space-y-2 p-2">
					<Label className="text-appLightPurple">שבץ עובד לאירוע</Label> <br />
					<Select dir="rtl" onValueChange={(value) => setEmpID(value)}>
						<SelectTrigger>
							<SelectValue placeholder="בחר עובד &#8595;" />
						</SelectTrigger>
						<SelectContent className="text-right">
							{allEmployees.map((emp: UserType) => {
								return (
									<SelectItem value={emp._id} key={emp._id}>
										{emp.first_name} {emp.last_name}
									</SelectItem>
								);
							})}
						</SelectContent>
						{empID && (
              <Button
							className="w-full"
							type="submit"
							onClick={() => handleClick(empID)}
							disabled={loading ? true : false}>
							<Spinner
								loading={loading ? true : false}
								size="2"
								className="mx-1"></Spinner>{" "}
							{`שבץ לאירוע`}
						</Button>
            )}
					</Select>
				</div>
			) : (
				<Button
					className="w-full"
					type="submit"
					onClick={() => handleClick()}
					disabled={loading ? true : false}>
					<Spinner
						loading={loading ? true : false}
						size="2"
						className="mx-1"></Spinner>{" "}
					{`השתבץ לאירוע`}
				</Button>
			)}
		</>
	);
}

export default AssignEventComp;
