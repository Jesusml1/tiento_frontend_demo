import { ReactComponent as TientoLogo } from "@/assets/tiento-logo.svg";
import styled from "@emotion/styled";
import { useState } from "react";
import PageTitle from "../../components/PageTitle";
import { HomeContainer } from "../Home";
import DisplayBorders from "../Home/components/DisplayBorders";
import HomeNav from "../Home/components/HomeNav";
import PhaseLabel from "../Home/components/PhaseLabel";
import Pointer from "../Home/components/Pointer/Pointer";
import ScreenOverlay from "../Home/components/ScreenOverlay";
import BackgroundImageOverlay from "./BackgroundImageOverlay";
import DiscordMessages from "./DiscordMessages";
import InstagramMessages from "./InstagramPosts";
import XPosts from "./TwitterPosts";
import { keyframes } from "@emotion/react";

export const PageContent = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  animation: ${keyframes`
    0% { opacity: 0 }
    50% {opacity: 0 }
    100% { opacity: 1 }
  `} 2s ease-in-out;
`;

const CardsContainer = styled.div`
  display: flex;
  column-gap: 20px;
  max-height: 50vh;
  @media (max-width: 1024px) {
    flex-direction: column;
    row-gap: 20px;
    overflow-y: scroll;
  }
`;

function Community() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div>
      <HomeContainer>
        <ScreenOverlay />

        <DisplayBorders>
          <PhaseLabel setIsHovered={setIsHovered} />
          <HomeNav setIsHovered={setIsHovered} />
          <PageContent>
            <TientoLogo width={150} height={150} />
            <PageTitle>COMMUNITY</PageTitle>
            <CardsContainer>
              <DiscordMessages />
              <InstagramMessages />
              <XPosts />
            </CardsContainer>
          </PageContent>
        </DisplayBorders>

        {/* <RandomNumbersDisplay /> */}
        <BackgroundImageOverlay />
      </HomeContainer>

      <Pointer isHovered={isHovered} />
    </div>
  );
}

export default Community;
