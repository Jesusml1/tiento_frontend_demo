import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";

const screenOverlayColor = "rgba(33, 150, 243, 0.15)";

const ScreenOverlayContainer = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  @media (max-width: 768px) {
    display: none;
  }
`;

const panOverlay = keyframes`
  from {background-position: 0% 0%;}
  to {background-position: 0% -100%;}
`;

const ScreenPanning = styled.div`
  background: linear-gradient(
    ${screenOverlayColor},
    ${screenOverlayColor} 3px,
    transparent 3px,
    transparent 9px
  );
  background-size: 100% 9px;
  height: 100%;
  width: 100%;
  animation: ${panOverlay} 22s infinite linear;
  position: absolute;
  z-index: 2;
  left: 0px;
  top: 0px;
`;

function ScreenOverlay() {
  return (
    <ScreenOverlayContainer>
      <ScreenPanning />
    </ScreenOverlayContainer>
  );
}

export default ScreenOverlay;
