interface HomeLayoutProps {
	children: React.ReactNode;
}

const HomeLayout = ({ children }: HomeLayoutProps) => {
	return (
		<div className="root-layout">
			<div>{children}</div>
		</div>
	);
};

export default HomeLayout;
