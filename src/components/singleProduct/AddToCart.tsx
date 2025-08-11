import { Button } from "../ui/button";

function AddToCart({ productId }: { productId: string }) {
	return <Button className="mt-5" variant='default'>Add to Cart</Button>;
}
export default AddToCart;
