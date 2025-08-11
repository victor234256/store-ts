import { currentUser } from "@clerk/nextjs/server";
import Image from "next/image";
import { LuUser } from "react-icons/lu";

async function UserIcon() {
	const user = await currentUser();
	const profileImage = user?.imageUrl;
	if (profileImage) {
		return (
			<Image
				src={profileImage}
				alt="profile"
				width={23}
				height={23}
				className="rounded-full object-cover"
			/>
		);
	}
	return (
		<LuUser className="w-23 h-23 rounded-full text-white" />
	);
}
export default UserIcon;
