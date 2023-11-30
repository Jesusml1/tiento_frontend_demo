import { LANDING_ANIMATION_DURATION } from "@/utils/contansts";
import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";

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

function PhaseLabel({
  setIsHovered,
}: {
  setIsHovered: (isHovered: boolean) => void;
}) {
  return (
    <PhaseContainer
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      PHASE 01
    </PhaseContainer>
  );
}

export default PhaseLabel;
