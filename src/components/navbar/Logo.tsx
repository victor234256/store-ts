import Link from "next/link";
import { Button } from "../ui/button";
import { Fa500Px } from "react-icons/fa";

function Logo() {
	return (
		<Button size="icon" asChild>
			<Link href="/">
				<Fa500Px className="w-8 h-8" />
			</Link>
		</Button>
	);
}
export default Logo;
