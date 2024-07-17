"use client";
import { formatDateDifference } from "@/components/root/Utils/UI-functions";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";
import { UserType } from "@/lib/DB/Models/Employee";
import { RootState } from "@/lib/store";
import { TrashIcon } from "@radix-ui/react-icons";
import { FaEdit, FaTrash } from "react-icons/fa";
import { useSelector } from "react-redux";

function Page() {
	const allEmployees = useSelector(
		(state: RootState) => state.employee.employeeList
	);
	return (
		<section className="account">
			<div className="flex flex-col space-y-4 items-center text-center">
				<header>
					<h2 className="font-semibold text-2xl mb-4 text-appLightPurple">
						{` ניהול עובדים `}
					</h2>
				</header>
				<Separator />
			</div>
			<div className="content p-2 space-y-4">
				<div className="employees">
					<header>
						<h3 className="text-lg mb-4 text-appLightPurple">
							{`כל העובדים   `}
						</h3>
					</header>
				</div>
				{allEmployees.length > 0 ? (
					allEmployees.map((emp: UserType, index: number) => {
						return (
							<Card key={emp._id}>
								<CardHeader>
									<CardTitle>
										{emp.first_name} {emp.last_name}
									</CardTitle>
									<CardDescription>{emp.email}</CardDescription>
									<CardDescription>{emp.phone_number}</CardDescription>
								</CardHeader>
								<CardContent>
									<Label>{`נראה לאחרונה`}</Label>
									<p>
										{emp.lastSeen && formatDateDifference(emp.lastSeen)}
										{" | "}
										<small>
											{emp.lastSeen
												? new Date(emp.lastSeen)
														.toLocaleTimeString("il")
														.slice(0, 5)
												: null}
										</small>
									</p>
								</CardContent>
								<CardFooter>
									<div className="actions w-full flex justify-end gap-4 items-center">
										<Button variant={"secondary"}>
											<FaEdit className="mx-1" />
											{"ערוך"}
										</Button>
										<Button variant={"destructive"}>
											<FaTrash className="mx-1" />
											{"מחק"}
										</Button>
									</div>
								</CardFooter>
							</Card>
						);
					})
				) : (
					<Skeleton className="w-full h-40 rounded-md" />
				)}
			</div>
		</section>
	);
}

export default Page;
