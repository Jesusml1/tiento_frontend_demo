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

const SignUpButton = styled.a`
  padding: 20px;
  background: none;
  border: 2px solid white;
  cursor: pointer;
  min-width: 150px;
  text-decoration: none;
  color: white;
  &:hover {
    background-color: rgba(156, 247, 250, 0.1);
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
        CONNECT WITH DISCORD
      </SignUpButton>
    </HeroContainer>
  );
}

export default TientoHero;
