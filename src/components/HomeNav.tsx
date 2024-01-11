import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";
import { LANDING_ANIMATION_DURATION } from "@/utils/contansts";
import { useUserAuth } from "@/hooks/useUserAuth";
import NavBtn from "@/components/NavButton";
import pages from "@/data/navLinkPages";

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

function HomeNav({
  setIsHovered,
}: {
  setIsHovered: (isHovered: boolean) => void;
}) {
  const { handleLogout, user } = useUserAuth();

  return (
    <NavContainer>
      {pages.map((page) => (
        <NavBtn
          key={page.id}
          name={page.name}
          href={page.href}
          description={page.description}
          setIsHovered={setIsHovered}
        />
      ))}
      {user && (
        <NavBtn
          name="LOGOUT"
          href="/#"
          description="Logout"
          setIsHovered={setIsHovered}
          handleLogout={handleLogout}
        />
      )}
    </NavContainer>
  );
}

export default HomeNav;
