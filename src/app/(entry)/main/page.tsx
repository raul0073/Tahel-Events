"use client";
import EmployeeView from "@/components/EmployeeView/EmployeeView";
import ManagerView from "@/components/ManagerView/ManagerView";
import ProtectedRoute from "@/components/root/Utils/ProtectedRoute";
import { UserType } from "@/lib/DB/Models/Employee";
import { RootState } from "@/lib/store";
import { usePathname, useRouter } from "next/navigation";
import { Suspense, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import secureLocalStorage from "react-secure-storage";

function Page() {
	const [isManager, setIsManager] = useState<boolean>(false);
	const [thisUser, setThisUser] = useState<UserType>();
	const router = useRouter();
	const user = useSelector((state: RootState) => state.employee.employee) || thisUser;
	useEffect(() => {
		const localUser = secureLocalStorage.getItem("USER") as UserType | null;

		if (!localUser) {
			router.replace("/");
			return;
		}
		setThisUser(localUser)
		if (typeof localUser.isManager === "boolean") {
			setIsManager(localUser.isManager);
		} else {
			router.replace("/");
		}
	}, [router]);

	if (isManager) {
		return (
			<Suspense fallback={<span>Loading...</span>}>
				<ManagerView user={user} />
			</Suspense>
		);
	}

	if (!isManager) {
		return (
			<Suspense fallback={<span>Loading...</span>}>
				<EmployeeView user={user} />
			</Suspense>
		);
	}
}

export default Page;
