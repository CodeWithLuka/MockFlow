import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
	return (
		<nav>
			<Link href="/" className="flex items-center gap-2">
				<Image
					src="/logo.svg"
					alt="MockFlow Logo"
					height={32}
					width={38}
				/>
				<h2 className="text-primary-100">MockFlow</h2>
			</Link>
		</nav>
	);
};

export default Navbar;
