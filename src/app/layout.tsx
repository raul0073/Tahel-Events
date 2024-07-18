import { Toaster } from "@/components/ui/toaster";
import { Theme } from "@radix-ui/themes";
import "@radix-ui/themes/styles.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import 'react-clock/dist/Clock.css';
import 'react-time-picker/dist/TimePicker.css';
import StoreProvider from "./StoreProvider";
import "./globals.css";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Tahel-Events | Events Schedule",
	description: "Generated by rm",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	// connectMongoDB()
	return (
		<html lang="en" dir="rtl">
			<StoreProvider>
				<body className={inter.className}>
					<Toaster />
					<Theme>{children}</Theme>
				</body>
			</StoreProvider>
		</html>
	);
}
