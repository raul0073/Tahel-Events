import FooterComp from "@/components/root/Components/FooterComp";
import Navbar from "@/components/root/Components/Navbar";
import React, { ReactNode } from "react";

function Layout({ children }: { children: ReactNode }) {
	return (
		<section className="relative mx-auto min-h-screen w-full lg:w-2/3 lg:border-x-2">
			<nav className="w-full">
				<Navbar />
			</nav>
			<main className="mx-auto min-h-[80vh] w-[98%] pt-12">
				{children}
			</main>
			<footer className="w-full lg:w-2/3 fixed bottom-0">
				<FooterComp />
			</footer>
		</section>
	);
}

export default Layout;
