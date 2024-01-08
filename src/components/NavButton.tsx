import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";
import { useState } from "react";

const Link = styled.a`
  background-color: none;
  padding: 20px;
  border: none;
  border-top: 1px solid white;
  background: none;
  color: white;
  text-decoration: none;
  position: relative;
  &:hover {
    color: rgb(156, 247, 250);
    border-top: 1px solid rgb(156, 247, 250);
    cursor: pointer;
  }
`;

const appear = keyframes`
    0%{
        opacity: 0;
        transform: translateY(-50%);
    }
    100%{
        opacity: 1;
        transform: translateY(0);
    }
`;

const LinkDescription = styled.div`
  position: absolute;
  background: rgba(255, 255, 255, 0.9);
  padding: 10px;
  color: #1a505b;
  top: 50px;
  right: 0;
  min-width: 250px;
  animation: ${appear} 500ms ease-in-out;
`;

function NavButton({
  name,
  description,
  href,
  setIsHovered,
  handleLogout,
}: {
  name: string;
  description: string;
  href: string;
  setIsHovered: (isHovered: boolean) => void;
  handleLogout?: () => void;
}) {
  const [hovered, setHovered] = useState(false);

  if (handleLogout) {
    return (
      <Link
        onClick={handleLogout}
        onMouseEnter={() => {
          setIsHovered(true);
          setHovered(true);
        }}
        onMouseLeave={() => {
          setIsHovered(false);
          setHovered(false);
        }}
        href={href}
      >
        {name}
        {hovered && <LinkDescription>{description}</LinkDescription>}
      </Link>
    );
  }

  return (
    <Link
      onMouseEnter={() => {
        setIsHovered(true);
        setHovered(true);
      }}
      onMouseLeave={() => {
        setIsHovered(false);
        setHovered(false);
      }}
      href={href}
    >
      {name}
      {hovered && <LinkDescription>{description}</LinkDescription>}
    </Link>
  );
}

export default NavButton;
