import React from "react";
import { Link } from "react-router-dom";
import { Heade, Logo, Menu, MenuItem, Nav } from "./styled";

export default function Header() {
  return (
    <Heade>
      <Nav>
        <Logo>En progreso...</Logo>
        <Menu>
          <Link to="/Login">
            {" "}
            <MenuItem>Inicio </MenuItem>
          </Link>

          <Link to="/register">
            {" "}
            <MenuItem>Registrate</MenuItem>
          </Link>
        </Menu>
      </Nav>
    </Heade>
  );
}
