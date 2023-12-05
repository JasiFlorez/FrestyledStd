import styled from "styled-components";

export const SidebarWrapper = styled.div`
  width: 15%;
  height: 25%;
  background-color: #f0f0f0;
`;

export const ModuleTitle = styled.div`
  cursor: pointer;
  margin-bottom: 10px;
  font-weight: bold;
`;

export const ModuleContent = styled.div`
  display: ${({ isOpen }) => (isOpen ? "block" : "none")};
  margin-left: 15px;
`;
