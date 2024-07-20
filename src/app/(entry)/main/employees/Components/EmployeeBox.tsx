'use client'
import {
    formatDateDifference,
    prettyHour,
} from "@/components/root/Utils/UI-functions";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
	CardDescription
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { UserType } from "@/lib/DB/Models/Employee";
import { useState } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import { deleteEmployeeService } from "../../../../../../Services/deleteEmployee";
import { toast } from "@/components/ui/use-toast";
import { useDispatch } from "react-redux";
import { removeEmployeeStore } from "@/lib/features/employeeSlice";
function EmployeeBox({ emp }: { emp: UserType }) {
    const [editEmp, setEditEmp] = useState<UserType>(emp)
    const [loading, setLoading] = useState<boolean>(false)
    const dispatch = useDispatch()
    const handleDelete = async () => {
        try {
            const res = await deleteEmployeeService(emp._id)
            if (res.error) {
                toast({
                    title: res.error,
                    variant: "destructive",
                });
            } else {
                dispatch(removeEmployeeStore(emp._id))
                console.log(res)
                toast({
                    title: `  עובד נמצחק בהצלחה`,
                });
            }
        } catch (error) {
            
        }finally {
            setLoading(false);
            
        }
    }
	return (
		<Card key={emp._id}>
			<CardHeader>
				<CardTitle>
					{emp.first_name} {emp.last_name}
				</CardTitle>
				
			</CardHeader>

			<CardContent className="text-sm space-y-4">
			<div>
				<Label>{`אימייל`}</Label>
			<Input
					onChange={(e) => setEditEmp({ ...emp, email: e.target.value })}
					defaultValue={emp.email}
                    className="md:w-1/2"
				/>
			</div>
			<div>
				<Label>{`טלפון`}</Label>
				<Input
					onChange={(e) => setEditEmp({ ...emp, phone_number: e.target.value })}
					defaultValue={emp.phone_number}
                    className="md:w-1/2"
				/>
			</div>
			</CardContent>
			<CardFooter>
			<CardDescription className="w-full">
			<Label className="pt-8">{`נראה לאחרונה`}</Label> <br />
					{emp.lastSeen && 
					(
						<>
						{formatDateDifference(emp.lastSeen)}
						<span>{" | "}</span>
						<small>{emp.lastSeen ? prettyHour(emp.lastSeen) : null}</small>
						</>
					)
					}
			</CardDescription>
				<div className="actions w-full flex justify-end gap-4 items-center">
					{editEmp !== emp && (<Button variant={"secondary"}>
						<FaEdit className="mx-1" />
						{"ערוך"}
					</Button>)}
					<Button variant={"destructive"}
                    onClick={()=> handleDelete()}
                    >
						<FaTrash className="mx-1" />
						{"מחק"}
					</Button>
				</div>
			</CardFooter>
		</Card>
	);
}

export default EmployeeBox;
