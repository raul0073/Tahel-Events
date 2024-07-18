"use client";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";
import { RootState } from "@/lib/store";
import { useSelector } from "react-redux";

type AccountDetailsType = {
	label: string;
	data: string;
};
function Page() {
	const emp = useSelector((state: RootState) => state.employee.employee);

	const designatedDetails = [
		{ label: "שם פרטי", data: emp.first_name },
		{ label: `שם משפחה`, data: emp.last_name },
		{ label: `כתובת מייל `, data: emp.email },
		{ label: `טלפון `, data: emp.phone_number },
	];

	return (
		<section className="account">
			<div className="flex flex-col space-y-4 items-center text-center">
				<header>
					<h2 className="font-semibold text-2xl mb-4 text-appLightPurple">
						{`הגדרות חשבון `}
					</h2>
				</header>
				<Separator />
			</div>
			<div className="content p-2 ">
				<div className="accountDetails space-y-4">
					<header>
						<h3 className="text-lg mb-4 text-appLightPurple">
							{`פרטים אישיים  `}
						</h3>
					</header>
					{designatedDetails.map((item: AccountDetailsType, index: number) => {
						return (
							<div key={index}>
								<Label className="text-gray-400">{item.label}</Label>
								<p>{item.data}</p>
							</div>
						);
					})}
				</div>
				<Separator className="my-2" />
				<div className="accountSettings space-y-4">
					<header>
						<h3 className="text-lg mb-4 text-appLightPurple">
							{`העדפות אישיות   `}
						</h3>
					</header>
					<div className="w-full rounded-lg border border-grey p-4 flex justify-between items-center">
						<div className="text">
							<p>{` שלח לי התראות לנייד `}</p>
							<small className="text-xs">{`התראות נשלחות כשאירוע חדש עולה לאתר`}</small>
						</div>
						<Switch aria-readonly />
					</div>
				</div>
			</div>
		</section>
	);
}

export default Page;
