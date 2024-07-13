"use client";

import EmployeeView from "@/components/EmployeeView/EmployeeView";
import ManagerView from "@/components/ManagerView/ManagerView";
import { UserType } from "@/lib/DB/Models/Employee";
import { RootState } from "@/lib/store";
import { useRouter } from "next/navigation";
import { Suspense, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import secureLocalStorage from "react-secure-storage";

function Page() {
	const [isManager, setIsManager] = useState<boolean>(false)
	const router = useRouter();
	const user = useSelector((state: RootState) => state.employee.employee);

	useEffect(() => {
        const localUser = secureLocalStorage.getItem("USER") as UserType | null;

        if (!localUser) {
            router.replace("/");
            return;
        }

        if (typeof localUser.isManager === 'boolean') {
            setIsManager(localUser.isManager);
        } else {
            router.replace("/");
        }
    }, [router]);


	if (isManager) {
		return (
		<Suspense fallback={<span>Loading...</span>}>
			<ManagerView user={user}/>
		</Suspense>
	)
	} 

	if(!isManager){
		return (<EmployeeView user={user}/>);
	}
	
}

export default Page;