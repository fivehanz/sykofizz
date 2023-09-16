import React, { useState } from "react";
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
    <Navbar isBordered onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <p className="font-bold text-inherit">ACME</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" href="#">
            Features
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href="#" aria-current="page">
            Customers
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Integrations
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link href="#">Login</Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="primary" href="#" variant="flat">
            Sign Up
          </Button>
        </NavbarItem>
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
