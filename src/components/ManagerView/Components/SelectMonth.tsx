import React from "react";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";

function SelectMonth() {
	return (
		<Select dir="rtl">
			<SelectTrigger className="w-[180px]">
				<SelectValue placeholder="בחר חודש" />
			</SelectTrigger>
			<SelectContent>
				<SelectItem value="light">Light</SelectItem>
				<SelectItem value="dark">Dark</SelectItem>
				<SelectItem value="system">System</SelectItem>
			</SelectContent>
		</Select>
	);
}

export default SelectMonth;
