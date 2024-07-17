"use client";
import { useState } from "react";
import labels from "../../../../Labels/Entry.json";
import { zodResolver } from "@hookform/resolvers/zod";
import  secureLocalStorage  from  "react-secure-storage";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { z } from "zod";
import { loginUser } from "../../../../Services/login";
import { loginSchema } from "../../../../ZodSchema/loginSchema";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "../../ui/card";
import { useToast } from "../../ui/use-toast";

import { addEmployeeToStore } from "@/lib/features/employeeSlice";
import { Button } from "../../ui/button";
import LogoImage from '../Components/LogoImage'
import ForgotPasswordComp from "./ForgotPasswordComp";
import LoginForm from "./LoginForm";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { MdOutlineLogin, MdOutlineLockOpen } from "react-icons/md";
function Entry() {
	// states
	const [loading, setLoading] = useState<boolean>(false);
	const [forgotPass, setForgotPass] = useState<boolean>(false);
	//
	const { toast } = useToast();
	const router = useRouter();
	const dispatch = useDispatch();

	// form
	const form = useForm<z.infer<typeof loginSchema>>({
		resolver: zodResolver(loginSchema),
		defaultValues: {
			email: "",
			password: "",
		},
	});

	// form submit
	async function onSubmit(values: z.infer<typeof loginSchema>) {
		setLoading(true);
		// login service
		const res = await loginUser(values);
		if (res.error) {
			toast({
				title: `${res.error}`,
				variant: "destructive",
			});
			setLoading(false);
			return form.reset();
		}
		toast({
			title: `${res.msg}`,
		});

		router.push("main");
		dispatch(addEmployeeToStore(res.user))
		secureLocalStorage.setItem("USER", res.user)
		setLoading(false);
	}
	return (
		<section className="entry w-full flex flex-col items-center justify-center lg:w-2/3">
			<Card className="w-full md:w-1/2">
				<CardHeader className="text-center ">
					<div className="w-full justify-center items-center flex py-2">
						{!forgotPass && (
							<MdOutlineLogin className="w-20 h-20 text-appBege text-center  place-center"/>
						)}
							{forgotPass && (
							<MdOutlineLockOpen  className="w-20 h-20 text-appBege text-center  place-center"/>
						)}
					</div>
					<CardTitle className="text-4xl font-extrabold  text-appLightPurple">
					{forgotPass && labels.passRetrieve}
						{!forgotPass && labels.header}
					</CardTitle>
					<CardDescription>
						{new Date().toLocaleDateString("il")}
					</CardDescription>
				</CardHeader>
				{forgotPass && <ForgotPasswordComp />}
				{!forgotPass && (
					<CardContent className="space-y-2">
						<LoginForm form={form} onSubmit={onSubmit} loadingState={loading} />
					</CardContent>
				)}
				<CardFooter className="flex flex-col space-y-4">
					<CardDescription>
						<Button variant={'link'} className=" text-appLightPurple" onClick={() => setForgotPass(!forgotPass)}>
							{!forgotPass ? (
								<span>שכחתי סיסמה</span>
							) : (<span>חזרה </span>)}
						</Button>
					</CardDescription>
					
				</CardFooter>
			</Card>
			<h3></h3>
		</section>
	);
}

export default Entry;
