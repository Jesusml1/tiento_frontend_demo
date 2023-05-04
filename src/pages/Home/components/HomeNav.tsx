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

function HomeNav({ setIsHovered }: { setIsHovered: (isHovered: boolean) => void }) {
  return (
    <NavContainer>
      <NavButton
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        href="#"
      >
        DOCS
      </NavButton>
      <NavButton
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        href="https://discord.gg/t47WVQUd"
        target="_blank"
      >
        DISCORD
      </NavButton>
      <NavButton
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        href="https://instagram.com/tientonft"
        target="_blank"
      >
        INSTAGRAM
      </NavButton>
      <NavButton
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        href="https://twitter.com/nerdyraverr"
        target="_blank"
      >
        TWITTER
      </NavButton>
    </NavContainer>
  );
}

export default HomeNav;
