"use client";
import { EquipmentType } from "@/lib/DB/Models/Equipment";
import { RootState } from "@/lib/store";
import { useSelector } from "react-redux";

const SelectEquipment = ({
	onChange,
}: {
	onChange: (selectedOptions: string) => void;
}) => {
	const equipmentStore = useSelector(
		(state: RootState) => state.equipment.equipment
	);
	return (
		<div className=" max-h-[200px] overflow-y-scroll">
			{equipmentStore.map((item: EquipmentType, index: number) => {
				return (
					<p
						key={index}
						onClick={() => onChange(item.label)}
						className="cursor-pointer hover:text-gray-300">
						{item.label}
					</p>
				);
			})}
		</div>
	);
};

export default SelectEquipment;
