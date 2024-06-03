"use client";
import { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  NavbarMenuToggle,
} from "@nextui-org/react";

const MainMenu = () => {
  return (
    <Navbar>
      <NavbarContent>
        <NavbarBrand>
          <h3 className="font-bold text-blue-500">Adnan Khan</h3>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem>
          <Button
            as={Link}
            color="secondary"
            href="https://drive.google.com/file/d/1S3hWrxBHHFP5DBbLQb94BJ4ldGRZBBtk/view?usp=sharing"
            variant="flat"
          >
            Resume
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
};

export default MainMenu;
