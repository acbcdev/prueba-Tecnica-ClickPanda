import Link from "next/link";
import Image from "next/image";
import {
  Navbar as NavBarHero,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@heroui/navbar";

import { Github } from "@/svg/github";
import { ThemeSwitch } from "@/components/theme-switch";
export const Navbar = () => {
  return (
    <NavBarHero>
      <NavbarBrand>
        <Link className="flex items-center gap-2" href={"/"}>
          <Image alt="Logo" height={40} src="/favicon.svg" width={40} />
          <h1 className="text-2xl font-bold">Countries Dashboard</h1>
        </Link>
      </NavbarBrand>
      <NavbarContent justify="end">
        <NavbarItem>
          <Link
            className="inline-flex items-center"
            href={"https://github.com/acbcdev/prueba-Tecnica-ClickPanda"}
            target="_blank"
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
