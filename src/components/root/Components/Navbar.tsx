"use client";
import { ArrowRightIcon, ExitIcon } from "@radix-ui/react-icons";
import { usePathname, useRouter } from "next/navigation";
import secureLocalStorage from "react-secure-storage";
import LogoImage from "./LogoImage";

function Navbar() {
	const path = usePathname();
	const router = useRouter();
	const logout = () => {
		secureLocalStorage.removeItem("USER");
		router.replace("/");
	};
	return (
		<div className="w-full h-[7vh] bg-primary">
			<div className="p-2 flex justify-between w-full items-center">
				{path === "/main" ? (
					<ExitIcon
						color="red"
						onClick={() => logout()}
						className="w-10 h-10 cursor-pointer hover:scale-105"
					/>
				) : (
					<ArrowRightIcon
						color="white"
						onClick={() => router.back()}
						className="w-10 h-10 cursor-pointer hover:scale-105 hover:text-white"
					/>
				)}

				<LogoImage cssClass="rounded-full place-center" />
			</div>
		</div>
	);
}
export default Navbar;
