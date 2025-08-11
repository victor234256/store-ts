// import { auth } from "@clerk/nextjs/server";

// export default async function FavoritesPage() {
// 	const { userId } = await auth();

// 	if (!userId) {
// 		// You can throw a 401 or use redirect here
// 		return <div>You must be signed in.</div>;
// 	}

// 	return <div>Favorites for user {userId}</div>;
// }
function page() {
	return <div>page</div>;
}
export default page;
