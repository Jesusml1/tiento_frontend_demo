import styled from "@emotion/styled";
import { ReactComponent as TientoLogo } from "@/assets/tiento-logo.svg";
import { keyframes } from "@emotion/react";

const apiUrl = import.meta.env.VITE_API_URL;

const HeroContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 10px;
  animation: ${keyframes`from{opacity: 0;}to{opacity: 1;}`} 2s ease-in-out;
`;

const Title = styled.div`
  text-align: center;
  font-size: 4rem;
  font-weight: bold;
  font-family: "IBM Plex Mono";
  @media (max-width: 768px) {
    font-size: 3rem;
  }
`;

const OutlinedText = styled.div`
  -webkit-text-stroke: 2px white;
  -webkit-text-fill-color: "transparent";
  text-fill-color: transparent;
`;

const Fill = styled.div`
  position: absolute;
  background: rgba(255, 255, 255, 0.1);
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
  background: rgba(255, 255, 255, 0.1);
  z-index: 20;
  clip-path: polygon(100% 20%, 100% 100%, 20% 100%);
`;

const SignUpButton = styled.a`
  position: relative;
  width: 250px;
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
    background: rgba(255, 255, 255, 0.2);
  }
`;

function TientoHero() {
  return (
    <HeroContainer>
      <TientoLogo width={150} height={150} />
      <Title>
        <OutlinedText>JOIN THE</OutlinedText>
        <div>TIENTO</div>
        <OutlinedText>EXPERIENCE</OutlinedText>
      </Title>
      <SignUpButton href={`${apiUrl}/api/auth/discord`}>
        <Fill />
        <Corner />
        CONNECT WITH DISCORD
      </SignUpButton>
    </HeroContainer>
  );
}

export default TientoHero;
