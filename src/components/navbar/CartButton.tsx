import Link from "next/link";

import { LuShoppingCart } from "react-icons/lu";
import { Button } from "../ui/button";

async function CartButton() {
	const numOfItemsInCart = 5;
	return (
		<Button
			asChild
			variant="outline"
			size="icon"
			className="flex justify-center items-center relative"
		>
			<Link href="/cart">
				<LuShoppingCart />
				<span className="absolute -top-3 -right-3 flex items-center bg-primary justify-center w-6 h-6 rounded-full text-white">
					{numOfItemsInCart}
				</span>
			</Link>
		</Button>
	);
}
export default CartButton;
