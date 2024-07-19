"use client";
import {
  Form, FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "@/components/ui/form";
import { toast } from "@/components/ui/use-toast";
import { zodResolver } from "@hookform/resolvers/zod";
import { Spinner } from "@radix-ui/themes";
import { Fragment, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { forgotPassScehma } from "../../../../ZodSchema/loginSchema";
import { Button } from "../../ui/button";
import { CardContent } from "../../ui/card";
import { Input } from "../../ui/input";
function ForgotPasswordComp() {
  const form = useForm<z.infer<typeof forgotPassScehma>>({
		resolver: zodResolver(forgotPassScehma),
		defaultValues: {
			email: "",
		},
	});
  const [loading, setLoading] = useState<boolean>(false);

	async function onSubmit(values: z.infer<typeof forgotPassScehma>) {
		setLoading(true);
    try {
      toast({
        title: `הפעולה הסתיימה בהצלחה`,
      })
    } catch (error) {
      
    }finally{
      setLoading(false)
      return form.reset();
    }
	}


	return (
		<Fragment>
			<CardContent className="space-y-8">
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
              <FormDescription>הסיסמה תשלח במידה והכתובת קיימת במערכת</FormDescription>
						</FormItem>
					)}
				/>
        {
						<Button
							className="w-full"
							type="submit"
							disabled={loading ? true : false}>
							<Spinner
								loading={loading ? true : false}
								size="2"
								className="mx-1"></Spinner>{" "}
              שלח
						</Button>
					}
          
      </form>
      </Form>
			</CardContent>
		</Fragment>
	);
}

export default ForgotPasswordComp;
