import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Spinner } from "@radix-ui/themes";
import { SetStateAction } from "react";
import { z } from "zod";
import labels from "../../../Labels/Entry.json";
import { loginSchema } from "../../../ZodSchema/loginSchema";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
function LoginForm({
	form,
	onSubmit,
	loadingState,
}: {
	form: any;
	onSubmit(values: z.infer<typeof loginSchema>): Promise<void>;
	loadingState: SetStateAction<boolean>;
}) {
	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 h-fit">
				<FormField
					control={form.control}
					name="email"
					render={({ field }) => (
						<FormItem>
							<FormLabel>אימייל</FormLabel>
							<FormControl>
								<Input type="email" {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="password"
					render={({ field }) => (
						<FormItem>
							<FormLabel>סיסמה</FormLabel>
							<FormControl>
								<Input type="password" {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<div className="w-full flex flex-col justify-center items-center space-y-8 pt-10 px-4">
					{
							<Button
								className="w-full"
								type="submit"
								// onClick={() => setLoading(true)}
								disabled={loadingState ? true : false}>
								<Spinner
									loading={loadingState ? true : false}
									size="2"
									className="mx-1"></Spinner>{" "}
								{!loadingState && labels.btnSubmit}
							</Button>
					}
				</div>
			</form>
		</Form>
	);
}

export default LoginForm;
