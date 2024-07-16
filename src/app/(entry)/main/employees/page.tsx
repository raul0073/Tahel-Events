'use client'
import { Separator } from "@/components/ui/separator";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAllEmployeesService } from "../../../../../Services/getAllEmployees";

function Page() {
    const dispatch = useDispatch()
    const getPageData = async () => {
       try {
        const res = await getAllEmployeesService()
        console.log(res)
       } catch (error) {
            console.log(error)
       } 
    }
    useEffect(()=> {
        getPageData()
    },[])


	return (
		<section className="account">
			<div className="flex flex-col space-y-4 items-center text-center">
				<header>
					<h2 className="font-semibold text-2xl mb-4 text-[#C3ACD0]">
						{` ניהול עובדים `}
					</h2>
				</header>
				<Separator />
			</div>
		</section>
	);
}

export default Page;
