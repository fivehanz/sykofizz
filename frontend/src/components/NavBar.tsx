import { useState } from "react";
import {
  Navbar,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from "@nextui-org/react";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  type Color =
    | "foreground"
    | "primary"
    | "danger"
    | "secondary"
    | "success"
    | "warning"
    | undefined;
  type Size = "lg" | "sm" | "md" | undefined;

  type MenuItem = {
    label: string;
    color: Color;
    size: Size;
  };

  const menuItems: MenuItem[] = [
    { label: "Profile", color: "foreground", size: "lg" },
    { label: "Dashboard", color: "foreground", size: "lg" },
    { label: "Activity", color: "primary", size: "lg" },
    { label: "Analytics", color: "foreground", size: "lg" },
    { label: "System", color: "foreground", size: "lg" },
    { label: "Deployments", color: "foreground", size: "lg" },
    { label: "My Settings", color: "foreground", size: "lg" },
    { label: "Team Settings", color: "foreground", size: "lg" },
    { label: "Help & Feedback", color: "foreground", size: "lg" },
    { label: "Log Out", color: "danger", size: "lg" },
  ];

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        <NavbarBrand>
          <a href="/#" className="font-extrabold text-xl">
            sykofizz
          </a>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item.label}-${index}`}>
            <Link
              color={item.color}
              className="w-full"
              href="#"
              size={item.size}
            >
              {item.label}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
};

export default NavBar;
