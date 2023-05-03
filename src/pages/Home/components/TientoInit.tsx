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

const StartButton = styled.button`
  padding: 20px;
  background: none;
  border: 2px solid white;
  cursor: pointer;
  min-width: 150px;
  &:hover {
    background-color: rgba(156, 247, 250, 0.1);
  }
`;

function TientoInit({ handleShowLanding }: { handleShowLanding: Function }) {
  return (
    <Container>
      <LogoContainer>
        <TientoLogo />
      </LogoContainer>
      <StartButton onClick={() => handleShowLanding()}>START</StartButton>
    </Container>
  );
}

export default TientoInit;
