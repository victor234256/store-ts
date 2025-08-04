import { LuAlignLeft } from "react-icons/lu";
import { Button } from "../ui/button";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { links } from "@/lib/navLinks";
import Link from "next/link";

function LinksDropdown() {
	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button
					variant="outline"
					className="flex gap-4  max-w-[100px]"
				>
					<LuAlignLeft className="w-6 h-6" />
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent
				className="w-48"
				align="start"
				sideOffset={10}
			>
				{links.map((navLink) => {
					return (
						<DropdownMenuItem key={navLink.href}>
							<Link
								href={navLink.href}
								className="capitalize w-full"
							>
								{navLink.label}
							</Link>
						</DropdownMenuItem>
					);
				})}
			</DropdownMenuContent>
		</DropdownMenu>
	);
}
export default LinksDropdown;
