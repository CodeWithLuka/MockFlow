interface HomeLayoutProps {
	children: React.ReactNode;
}

const HomeLayout = ({ children }: HomeLayoutProps) => {
	return (
		<div>
			<div>{children}</div>
		</div>
	);
};

export default HomeLayout;
