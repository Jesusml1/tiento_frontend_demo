import { LANDING_ANIMATION_DURATION } from "@/utils/contansts";
import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";
import { ReactComponent as TientoLogo } from "@/assets/tiento-logo.svg";

/*
const PhaseContainer = styled.div`
  position: absolute;
  top: 0;
  left: 100px;
  padding: 20px;
  border-top: 1px solid white;
  animation: ${keyframes`
    0%{opacity: 0;}
    80%{opacity: 0;}
    100%{opacity: 1;}
  `} ${LANDING_ANIMATION_DURATION} ease-in-out;
  &:hover {
    border-color: rgb(156, 247, 250);
    color: rgb(156, 247, 250);
  }
  @media (max-width: 768px) {
    left: 50%;
  }
`;
*/

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  margin: 0 50px;

  column-gap: 1rem;
  animation: ${keyframes`
    0%{opacity: 0;}
    80%{opacity: 0;}
    100%{opacity: 1;}
  `} ${LANDING_ANIMATION_DURATION} ease-in-out;

  @media (max-width: 768px) {
    left: 100;
    margin: 0;
  }
`;

const Phase = styled.div`
  padding: 20px;
  border-top: 1px solid white;

  &:hover {
    border-color: rgb(156, 247, 250);
    color: rgb(156, 247, 250);
  }
`;

const ShowMobileMenuBtn = styled.div`
  padding: 20px;
  border-top: 1px solid white;

  &:hover {
    border-color: rgb(156, 247, 250);
    color: rgb(156, 247, 250);
  }
  @media (min-width: 768px) {
    display: none;
  }
`;

function PhaseLabel({
  setIsHovered,
  setShowMobileMenu,
}: {
  setIsHovered: (isHovered: boolean) => void;
  setShowMobileMenu: (showMobileMenu: boolean) => void;
}) {
  return (
    <Container>
      <div style={{ display: "flex", columnGap: "20px" }}>
        <Phase
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <TientoLogo width={30} height={30} />
        </Phase>
        <Phase
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          PHASE 01
        </Phase>
      </div>
      <ShowMobileMenuBtn
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={() => setShowMobileMenu(true)}
      >
        MENU
      </ShowMobileMenuBtn>
    </Container>
  );
}

export default PhaseLabel;
