import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import Container from "@/components/globals/Container";
import Providers from "./provider";
import Navbar from "@/components/navbar/Navbar";

export const metadata: Metadata = {
	title: "Store",
	description: "Next and Ts React Store",
};

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body className={inter.className}>
				<Providers>
					<Navbar />
					<Container className="py-20">
						{children}
					</Container>
				</Providers>
			</body>
		</html>
	);
}
