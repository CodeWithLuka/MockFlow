import type { Metadata } from "next";
import { Mona_Sans } from "next/font/google";

import { Toaster } from "@/components/ui/sonner";

import "./globals.css";

const monaSansFont = Mona_Sans({
	variable: "--font-mona-sans",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "MockFlow",
	description:
		"AI-driven mock interviews for developers. Climb to interview success with MockFlow.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" className="dark" suppressHydrationWarning>
			<body className={`${monaSansFont.className} antialiased pattern`}>
				<Toaster />
				{children}
			</body>
		</html>
	);
}
