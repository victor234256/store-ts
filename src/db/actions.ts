import db from "@/db/db";
import { redirect } from "next/navigation";
export const fetchFeaturedProducts = async () => {
	const products = await db.product.findMany({
		where: {
			featured: true,
		},
	});
	return products;
};

export const fetchAllProducts = ({
	search = "",
}: {
	search: string;
}) => {
	return db.product.findMany({
		where: {
			OR: [
				{ name: { contains: search, mode: "insensitive" } },
				{
					company: {
						contains: search,
						mode: "insensitive",
					},
				},
			],
		},
		orderBy: {
			createdAt: "desc",
		},
	});
};

export async function fetchSingleProduct(
	productId: string,
) {
	const product = await db.product.findUnique({
		where: {
			id: productId,
		},
	});
	if (!product) {
		redirect("/products");
	}
	return product;
}
