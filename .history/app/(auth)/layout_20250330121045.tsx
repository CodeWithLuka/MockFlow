import { redirect } from "next/navigation";

import { isAuthenticated } from "@/lib/actions/auth.action";

interface AuthLayoutProps {
	children: React.ReactNode;
}

const AuthLayout = async ({ children }: AuthLayoutProps) => {
	const isUserAuthenticated = await isAuthenticated();
	if (isUserAuthenticated) redirect("/");

	return (
		<div className="auth-layout">
			<div>{children}</div>
		</div>
	);
};

export default AuthLayout;
