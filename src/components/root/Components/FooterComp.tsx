"use client";
import { Skeleton } from "@/components/ui/skeleton";
import { RootState } from "@/lib/store";
import { usePathname, useRouter } from "next/navigation";
import { Suspense } from "react";
import { FaUsersCog } from "react-icons/fa";
import {
	MdEventAvailable,
	MdHome,
	MdManageAccounts,
	MdOutlineCastle,
} from "react-icons/md";
import { useSelector } from "react-redux";

function FooterComp() {
	const path = usePathname();
	const router = useRouter();
	const user = useSelector((state: RootState) => state.employee.employee);
	const baseRoute = "/main";

	return (
		<section className="w-full bg-[#F7EFE5] px-2 flex justify-around items-center">
			<Suspense fallback={<Skeleton className="w-full h-4 rounded-lg" />}>
				{user &&
					(!user.isManager ? (
						<>
							<div
								className="group w-1/3 flex flex-col justify-center items-center cursor-pointer p-2"
								onClick={() => router.push(`${baseRoute}/events`)}>
								<MdEventAvailable className="group w-8 h-8 text-gray-700 group-hover:text-primary" />
								<small>אירועים</small>
							</div>
							<div
								className="group w-1/3 flex flex-col justify-center items-center cursor-pointer p-2 border-x-2"
								onClick={() => router.push(`${baseRoute}`)}>
								<MdHome className="group w-8 h-8 text-gray-700 group-hover:text-primary" />
								<small>בית</small>
							</div>
							<div
								className="group w-1/3 flex flex-col justify-center items-center cursor-pointer p-2"
								onClick={() => router.push(`${baseRoute}/account`)}>
								<MdManageAccounts className="group w-8 h-8 text-gray-700 group-hover:text-primary" />
								<small>חשבון</small>
							</div>
						</>
					) : (
						<>
							<div
								className="group w-1/3 flex flex-col justify-center items-center cursor-pointer p-2 "
								onClick={() => router.push(`${baseRoute}/equipment`)}>
								<MdOutlineCastle className="group w-8 h-8 text-gray-700 group-hover:text-primary" />
								<small>ציוד</small>
							</div>
							<div
								className="group w-1/3 flex flex-col justify-center items-center cursor-pointer p-2 border-x-2"
								onClick={() => router.push(`${baseRoute}`)}>
								<MdHome className="group w-8 h-8 text-gray-700 group-hover:text-primary" />
								<small>בית</small>
							</div>
							<div
								className="group w-1/3 flex flex-col justify-center items-center cursor-pointer p-2"
								onClick={() => router.push(`${baseRoute}/employees`)}>
								<FaUsersCog className="group w-8 h-8 text-gray-700 group-hover:text-primary" />
								<small>עובדים</small>
							</div>
						</>
					))}
			</Suspense>
		</section>
	);
}

export default FooterComp;
