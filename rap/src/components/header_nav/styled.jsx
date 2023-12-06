import styled from "styled-components";
export const Heade = styled.div`
  height: 12%; /* Ajusta la altura del header */
  width: 100%;
  background-color: #000000aa;
  backdrop-filter: blur(5px);

`;

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  width: 98%;
`;

export const Logo = styled.div`
  font-size: 24px;
  font-weight: bold;
  color: white;
  margin-left: 15px;
`;

export const Menu = styled.ul`
  display: flex;
  list-style: none;
`;

export const MenuItem = styled.button`
  width: 150px;
  height: 45px;
  background-color: #7CCD64;
  margin: 5px;
  border-radius: 5px 5px 5px 5px;
  cursor: pointer;

  &:hover {
    background-color: #7CCD64;
    text-decoration: underline;
    font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  }
`;
