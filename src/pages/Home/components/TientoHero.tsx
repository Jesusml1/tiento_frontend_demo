import styled from "@emotion/styled";
import { ReactComponent as TientoLogo } from "@/assets/tiento-logo.svg";
import { keyframes } from "@emotion/react";
import { API_ENDPOINTS, LANDING_ANIMATION_DURATION } from "@/utils/contansts";
import envVars from "@/config/env";

const discordApiRedirectUrl = envVars.apiUrl + API_ENDPOINTS.AUTH_DISCORD;

const HeroContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 10px;
  animation: ${keyframes`
    0%{opacity: 0;}
    80%{opacity: 0;}
    100%{opacity: 1;}
  `} ${LANDING_ANIMATION_DURATION} ease-in-out;
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
    background: rgba(255, 255, 255, 0.3);
  }
`;

function TientoHero({
  setIsHovered,
}: {
  setIsHovered: (isHovered: boolean) => void;
}) {
  return (
    <HeroContainer>
      <TientoLogo width={300} height={300} />
      {/* <Title>
        <OutlinedText>JOIN THE</OutlinedText>
        <div>TIENTO</div>
        <OutlinedText>EXPERIENCE</OutlinedText>
      </Title> */}
      <SignUpButton
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        href={discordApiRedirectUrl}
      >
        <Fill />
        <Corner />
        CONNECT WITH DISCORD
      </SignUpButton>
    </HeroContainer>
  );
}

export default TientoHero;
