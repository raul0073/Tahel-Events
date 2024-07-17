"use client";
import { useState } from "react";

import AddEquipmentDrawer from "@/components/ManagerView/Components/Equipment/AddEquipmentDrawer";
import {
	Command,
	CommandEmpty,
	CommandGroup,
	CommandInput,
	CommandItem,
	CommandList,
	CommandSeparator,
} from "@/components/ui/command";
import { EquipmentType } from "@/lib/DB/Models/Equipment";
import { RootState } from "@/lib/store";
import { useSelector } from "react-redux";
import EditEquipmentComp from "./components/EditEquipmentComp";
import { Separator } from "@/components/ui/separator";
function Page() {
	const equipment = useSelector(
		(state: RootState) => state.equipment.equipment
	);
	const [selectedItem, setSelectedItem] = useState<EquipmentType | null>(null);
	return (
		<>
			<header>
			<h2 className="font-semibold text-2xl mb-4 text-appLightPurple text-center">
     			 {`כל הציוד`}
			</h2>
			</header>
			<Separator />
			<div className="p-2">
			<Command className="rounded-lg border shadow-md mt-1">
				<CommandInput placeholder="חפש ציוד לפי שם..." />
				<CommandList>
					<CommandEmpty> לא נמצא...</CommandEmpty>
					<CommandGroup heading="">
						{equipment?.map((eq: EquipmentType) => {
							return (
								<CommandItem
									key={eq._id}
									onSelect={() => setSelectedItem({ ...eq })}>
									<span>{eq.label}</span>
								</CommandItem>
							);
						})}
					</CommandGroup>
					<CommandSeparator />
				</CommandList>
			</Command>
			</div>
			{selectedItem && <EditEquipmentComp selectedItem={selectedItem} />}
			<AddEquipmentDrawer />
		</>
	);
}

export default Page;
