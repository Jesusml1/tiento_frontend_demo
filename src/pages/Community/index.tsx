import { ReactComponent as TientoLogo } from "@/assets/tiento-logo.svg";
import styled from "@emotion/styled";
import { useState } from "react";
import PageTitle from "../../components/PageTitle";
import DisplayBorders from "../Home/components/DisplayBorders";
import HomeNav from "../Home/components/HomeNav";
import PhaseLabel from "../Home/components/PhaseLabel";
import Pointer from "../Home/components/Pointer/Pointer";
import ScreenOverlay from "../Home/components/ScreenOverlay";
import BackgroundImageOverlay from "../../components/BackgroundImageOverlay";
import DiscordMessages from "./components/DiscordMessages";
import InstagramMessages from "./components/InstagramPosts";
import TwitterPosts from "./components/TwitterPosts";
import PageContent from "@/components/PageContent";
import MobileMenuOverlay from "@/components/MobileMenuOverlay";
import MainContainer from "@/components/MainContainer";

const CardsContainer = styled.div`
  display: flex;
  column-gap: 20px;
  max-height: 70vh;
  @media (max-width: 1024px) {
    flex-direction: column;
    row-gap: 20px;
    overflow-y: scroll;
  }
`;

function Community() {
  const [isHovered, setIsHovered] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  return (
    <div>
      {showMobileMenu ? (
        <MobileMenuOverlay setShowMobileMenu={setShowMobileMenu} />
      ) : (
        <MainContainer>
          <ScreenOverlay />

          <DisplayBorders>
            <PhaseLabel
              setShowMobileMenu={setShowMobileMenu}
              setIsHovered={setIsHovered}
            />
            <HomeNav setIsHovered={setIsHovered} />
            <PageContent>
              <PageTitle>COMMUNITY</PageTitle>
              <CardsContainer>
                <DiscordMessages />
                <InstagramMessages />
                <TwitterPosts />
              </CardsContainer>
            </PageContent>
          </DisplayBorders>

          <BackgroundImageOverlay />
        </MainContainer>
      )}
      <Pointer isHovered={isHovered} />
    </div>
  );
}

export default Community;
