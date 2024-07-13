"use client";
import { ArrowLeftIcon, ArrowRightIcon } from "@radix-ui/react-icons";
import React, { Dispatch, SetStateAction, useState } from "react";

function MonthSlider({
	setSelectedMonth,
  selectedMonth
}: {
	setSelectedMonth: Dispatch<SetStateAction<number>>;
  selectedMonth: number
}) {
	const [currentDate, setCurrentDate] = useState<Date>(new Date());

	const goToPreviousMonth = () => {
		setCurrentDate(
			new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1)
		);
    setSelectedMonth(currentDate.getMonth() -1)
	};

	const goToNextMonth = () => {
		setCurrentDate(
			new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1)
		);
    setSelectedMonth(currentDate.getMonth() + 1)
	};

	const monthNames = [
		"ינואר",
		"פברואר",
		"מרץ",
		"אפריל",
		"מאי",
		"יוני",
		"יולי",
		"אוגוסט",
		"ספטמבר",
		"אוקטובר",
		"נובמבר",
		"דצמבר",
	];

	return (
		<section className="w-full flex justify-center items-center">
			<ArrowRightIcon
			className="mx-1 text-xl font-extrabold cursor-pointer w-10 h-8 text-gray-400 hover:text-gray-300"
				onClick={goToPreviousMonth}>
				
			</ArrowRightIcon>
			<p className="text-xl font-bold flex flex-col justify-center items-center">
				{selectedMonth}/{currentDate.getFullYear()} <br />
			</p>
			<ArrowLeftIcon
			className="mx-1 text-xl font-extrabold cursor-pointer w-10 h-8 text-gray-400 hover:text-gray-300"
				onClick={goToNextMonth}>
				
			</ArrowLeftIcon>
		</section>
	);
}

export default MonthSlider;
