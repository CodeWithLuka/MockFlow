import { redirect } from "next/navigation";

import Navbar from "@/components/custom/navbar";

import { isAuthenticated } from "@/lib/actions/auth.action";

interface HomeLayoutProps {
	children: React.ReactNode;
}

const HomeLayout = async ({ children }: HomeLayoutProps) => {
	const isUserAuthenticated = await isAuthenticated();
	if (!isUserAuthenticated) redirect("/sign-in");

	return (
		<div className="root-layout">
			<Navbar />
			{children}
		</div>
	);
};

export default HomeLayout;
