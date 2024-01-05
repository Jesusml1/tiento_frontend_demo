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
  left: 100px;
  display: flex;
  column-gap: 1rem;
  animation: ${keyframes`
    0%{opacity: 0;}
    80%{opacity: 0;}
    100%{opacity: 1;}
  `} ${LANDING_ANIMATION_DURATION} ease-in-out;
`;

const Phase = styled.div`
  padding: 20px;
  border-top: 1px solid white;

  &:hover {
    border-color: rgb(156, 247, 250);
    color: rgb(156, 247, 250);
  }
`;

function PhaseLabel({
  setIsHovered,
}: {
  setIsHovered: (isHovered: boolean) => void;
}) {
  return (
    <Container>
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
    </Container>
  );
}

export default PhaseLabel;
