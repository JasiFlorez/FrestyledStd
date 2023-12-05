import styled from "styled-components";

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  padding: 0 20px;
`;

export const Logo = styled.div`
  font-size: 24px;
  font-weight: bold;
  color: white;
`;

export const Menu = styled.ul`
  display: flex;
  list-style: none;
`;

export const MenuItem = styled.li`
  margin: 0 15px;
  color: white;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

export const Heade = styled.div`
  height: 10%; /* Ajusta la altura del header */
  width: 100%;
  background-color: #40027b;
`;
