import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";
import { LANDING_ANIMATION_DURATION } from "@/utils/contansts";
import { useUserAuth } from "@/hooks/useUserAuth";

const NavContainer = styled.div`
  position: absolute;
  display: flex;
  top: 0;
  right: 100px;
  width: auto;
  column-gap: 10px;
  animation: ${keyframes`
    0%{opacity: 0;}
    80%{opacity: 0;}
    100%{opacity: 1;}
    `} ${LANDING_ANIMATION_DURATION} ease-in-out;
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

function HomeNav({
  setIsHovered,
}: {
  setIsHovered: (isHovered: boolean) => void;
}) {
  const { handleLogout, user } = useUserAuth();

  return (
    <NavContainer>
      <NavButton
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        href="/community"
      >
        COMMUNITY
      </NavButton>
      <NavButton
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        href="#"
      >
        PROYECT
      </NavButton>
      <NavButton
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        href="#"
      >
        DOCUMENT
      </NavButton>
      <NavButton
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        href="#"
      >
        EVENTS
      </NavButton>
      <NavButton
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        href="#"
      >
        MERCH
      </NavButton>
      <NavButton
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        href="#"
      >
        ABOUT
      </NavButton>
      {user && (
        <NavButton
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          href="#"
          onClick={handleLogout}
        >
          LOGOUT
        </NavButton>
      )}
    </NavContainer>
  );
}

export default HomeNav;
