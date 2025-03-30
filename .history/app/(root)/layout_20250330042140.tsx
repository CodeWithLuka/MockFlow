import Navbar from "@/components/custom/navbar";

interface HomeLayoutProps {
	children: React.ReactNode;
}

const HomeLayout = ({ children }: HomeLayoutProps) => {
	return (
		<div className="root-layout">
			<Navbar />
			{children}
		</div>
	);
};

export default HomeLayout;
