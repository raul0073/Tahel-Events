"use client";
import { RootState } from "@/lib/store";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import { FaUsersCog } from "react-icons/fa";
import { MdEventAvailable, MdManageAccounts, MdOutlineCastle } from "react-icons/md";

function FooterComp() {
	const path = usePathname();
	const router = useRouter();
	const user = useSelector((state: RootState) => state.employee.employee);
	const baseRoute = '/main';

	return (
		<section className="w-full bg-[#F7EFE5] px-2 flex justify-around items-center">
			{!user.isManager ? (
				<>
					<div
						className="group w-1/2 flex flex-col justify-center items-center cursor-pointer"
						onClick={() => router.push(`${baseRoute}/events`)}>
						<MdEventAvailable className="group w-8 h-8 text-gray-700 group-hover:text-primary" />
						<small>אירועים</small>
					</div>
					<div
						className="group w-1/2 flex flex-col justify-center items-center cursor-pointer"
						onClick={() => router.push(`${baseRoute}/account`)}>
						<MdManageAccounts className="group w-8 h-8 text-gray-700 group-hover:text-primary" />
						<small>חשבון</small>
					</div>
				</>
			) : (
				<>
					<div
						className="group w-1/2 flex flex-col justify-center items-center cursor-pointer"
						onClick={() => router.push(`${baseRoute}/equipment`)}>
						<MdOutlineCastle className="group w-8 h-8 text-gray-700 group-hover:text-primary" />
						<small>ציוד</small>
					</div>
					<div
						className="group w-1/2 flex flex-col justify-center items-center cursor-pointer"
						onClick={() => router.push(`${baseRoute}/employees`)}>
						<FaUsersCog className="group w-8 h-8 text-gray-700 group-hover:text-primary" />
						<small>עובדים</small>
					</div>
				</>
			)}
		</section>
	);
}

export default FooterComp;