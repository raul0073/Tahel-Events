import FooterComp from "@/components/root/FooterComp";
import Navbar from "@/components/root/Navbar";
import React, { ReactNode } from "react";

function Layout({ children }: { children: ReactNode }) {
	return (
		<section className="relative mx-auto min-h-screen w-full md:w-2/3">
			<nav className="w-full">
				<Navbar />
			</nav>
			<main className="mx-auto min-h-[80vh] w-[98%] md:w-2/3 pt-12">
				{children}
			</main>
			<footer className="w-full md:w-2/3 fixed bottom-0">
				<FooterComp />
			</footer>
		</section>
	);
}

export default Layout;
