import { fetchFeaturedProducts } from "@/db/actions";
import EmptyList from "../globals/EmptyList";
import SectionTitle from "../globals/SectionTitle";
import ProductGrid from "../products/ProductGrid";

async function FeaturedProducts() {
	const products = await fetchFeaturedProducts();
	if (products.length === 0) return <EmptyList />;
	return (
		<section className="pt-24">
			<SectionTitle text="Featured Products" />
			<ProductGrid products={products} />
		</section>
	);
}
export default FeaturedProducts;
