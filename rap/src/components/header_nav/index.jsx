import React from "react";
import { Heade, Logo, Menu, MenuItem, Nav } from "./styled";
export default function Header() {
  return (
    <Heade>
      <Nav>
        <Logo>YourLogo</Logo>
        <Menu>
          <MenuItem>Home</MenuItem>
          <MenuItem>About</MenuItem>
          <MenuItem>Contact</MenuItem>
        </Menu>
      </Nav>
    </Heade>
  );
}
