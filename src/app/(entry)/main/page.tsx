"use client";
import EmployeeView from "@/components/EmployeeView/EmployeeView";
import ManagerView from "@/components/ManagerView/ManagerView";
import { UserType } from "@/lib/DB/Models/Employee";
import { addEmployeeToListStore } from "@/lib/features/employeeSlice";
import { RootState } from "@/lib/store";
import { useRouter } from "next/navigation";
import { Suspense, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import secureLocalStorage from "react-secure-storage";

function Page() {
	const dispatch = useDispatch();
	const router = useRouter();

	const [thisUser, setThisUser] = useState<UserType>();
	useEffect(() => {
		const localUser = secureLocalStorage.getItem("USER") as UserType | null;
		if (!localUser) {
			router.replace("/");
			return;
		}
		setThisUser(localUser);
	}, [router]);

	const user = useSelector((state: RootState) => state.employee.employee);

	if (!user && thisUser) {
		dispatch(addEmployeeToListStore(thisUser));
	}

	if (thisUser?.isManager) {
		return (
			<Suspense fallback={<span>Loading...</span>}>
				<ManagerView user={user} />
			</Suspense>
		);
	}

	if (!thisUser?.isManager) {
		return (
			<Suspense fallback={<span>Loading...</span>}>
				<EmployeeView user={user} />
			</Suspense>
		);
	}
}

export default Page;
