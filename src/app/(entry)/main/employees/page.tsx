"use client";

import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";
import { UserType } from "@/lib/DB/Models/Employee";
import { RootState } from "@/lib/store";
import { useSelector } from "react-redux";
import EmployeeBox from "./Components/EmployeeBox";

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
							<EmployeeBox emp={emp} key={emp._id} />
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
