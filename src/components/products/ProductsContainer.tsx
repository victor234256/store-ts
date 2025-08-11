import { fetchAllProducts } from "@/db/actions";
import ProductGrid from "./ProductGrid";
import ProductsList from "./ProductsList";
import { Button } from "../ui/button";
import Link from "next/link";
import { LuLayoutGrid, LuList } from "react-icons/lu";
import { Separator } from "../ui/separator";

async function ProductsContainer({
	layout,
	search,
}: {
	layout: string;
	search: string;
}) {
	const products = await fetchAllProducts({ search });
	const totalProduct = products.length;
	const searchTerm = search ? `&search=${search}` : "";
	return (
		<>
			{/* header */}
			<section className="flex items-center justify-between">
				<h4 className="text-xl">
					{totalProduct} Product{totalProduct > 1 && "s"}
				</h4>
				<div className="flex gap-x-4">
					<Button
						asChild
						variant={
							layout === "grid" ? "default" : "ghost"
						}
					>
						<Link
							href={`/products?layout=grid${searchTerm}`}
						>
							<LuLayoutGrid />
						</Link>
					</Button>
					{/* list button */}
					<Button
						asChild
						variant={
							layout === "list" ? "default" : "ghost"
						}
					>
						<Link
							href={`/products?layout=list${searchTerm}`}
						>
							<LuList />
						</Link>
					</Button>
				</div>
			</section>
			<Separator className="mt-4" />
			{totalProduct === 0 ? (
				<h5 className="text-2xl.mt-16">
					Sorry, no products matched your search...
				</h5>
			) : layout === "grid" ? (
				<ProductGrid products={products} />
			) : (
				<ProductsList products={products} />
			)}
		</>
	);
}
export default ProductsContainer;
