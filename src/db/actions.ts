import db from "@/db/db";
export const fetchFeaturedProducts = async () => {
	const products = await db.product.findMany({
		where: {
			featured: true,
		},
	});
	return products;
};

export const fetchedAllProducts = () => {
	return db.product.findMany({
		orderBy: {
			createdAt: "desc",
		},
	});
};
