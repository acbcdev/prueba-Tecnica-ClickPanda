import { ThemeSwitch } from "@/components/theme-switch";
import Link from "next/link";
import Image from "next/image";
import { Github } from "@/svg/github";
import {
	Navbar as NavBarHero,
	NavbarBrand,
	NavbarContent,
	NavbarItem,
} from "@heroui/navbar";
export const Navbar = () => {
	return (
		<NavBarHero>
			<NavbarBrand>
				<Link href={"/"} className="flex items-center gap-2">
					<Image src="/favicon.svg" alt="Logo" width={40} height={40} />
					<h1 className="text-2xl font-bold">Countries Dashboard</h1>
				</Link>
			</NavbarBrand>
			<NavbarContent justify="end">
				<NavbarItem>
					<Link
						href={"https://github.com/acbcdev/prueba-Tecnica-ClickPanda"}
						target="_blank"
						className="inline-flex items-center"
					>
						<Github className="w-6 h-6 fill-[#1f2328] dark:fill-white" />
					</Link>
				</NavbarItem>
				<NavbarItem>
					<ThemeSwitch />
				</NavbarItem>
			</NavbarContent>
		</NavBarHero>
	);
};
