interface AuthLayoutProps {
	children: React.ReactNode;
}

const AuthLayout = ({ children }: AuthLayoutProps) => {
	return (
		<div className="auth-layout">
			<div>{children}</div>
		</div>
	);
};

export default AuthLayout;
