import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";

const NavContainer = styled.div`
  position: absolute;
  display: flex;
  top: 0;
  right: 100px;
  width: auto;
  column-gap: 10px;
  animation: ${keyframes`from{opacity: 0;}to{opacity: 1;}`} 2s ease-in-out;
  @media (max-width: 768px) {
    display: none;
  }
`;

const NavButton = styled.a`
  background-color: none;
  padding: 20px;
  border: none;
  border-top: 1px solid white;
  background: none;
  color: white;
  text-decoration: none;
  &:hover {
    color: rgb(156, 247, 250);
    border-top: 1px solid rgb(156, 247, 250);
    cursor: pointer;
  }
`;

function HomeNav() {
  return (
    <NavContainer>
      <NavButton href="#">DOCS</NavButton>
      <NavButton href="#">DISCORD</NavButton>
      <NavButton href="#">INSTAGRAM</NavButton>
      <NavButton href="#">TWITTER</NavButton>
    </NavContainer>
  );
}
export default HomeNav;