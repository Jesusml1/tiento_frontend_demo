import styled from "@emotion/styled";
import { ReactComponent as TientoLogo } from "@/assets/tiento-logo.svg";
import { keyframes } from "@emotion/react";

const enter = keyframes`
  0%, 50% { opacity: 0 }
  100% { opacity: 1 }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  animation: ${enter} 4s ease-in-out;
`;

const LogoContainer = styled.div`
  transform: scale(0.85);
  @media (max-width: 768px) {
    transform: scale(0.75);
  }
`;

const Fill = styled.div`
  position: absolute;
  background: rgba(255, 255, 255, 0.2);
  clip-path: polygon(0% 0%, 100% 0%, 100% 50%, 75% 100%, 0% 100%);
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const Corner = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  height: 50%;
  width: 25%;
  background: rgba(255, 255, 255, 0.2);
  z-index: 20;
  clip-path: polygon(100% 20%, 100% 100%, 20% 100%);
`;

const StartButton = styled.button`
  position: relative;
  width: 200px;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  background: none;
  border: none;
  text-decoration: none;
  cursor: pointer;
  &:hover ${Fill}, &:hover ${Corner} {
    background: rgba(255, 255, 255, 0.3);
  }
`;

function TientoInit({
  handleShowLanding,
  setIsHovered,
}: {
  handleShowLanding: Function;
  setIsHovered: (isHovered: boolean) => void;
}) {
  return (
    <Container>
      <LogoContainer>
        <TientoLogo />
      </LogoContainer>
      <StartButton
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={() => handleShowLanding()}
      >
        <Fill />
        <Corner />
        START
      </StartButton>
    </Container>
  );
}

export default TientoInit;
