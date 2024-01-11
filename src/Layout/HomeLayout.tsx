import { useState } from "react";
import PageContent from "@/components/PageContent";
import MobileMenuOverlay from "@/components/MobileMenuOverlay";
import MainContainer from "@/components/MainContainer";
import BackgroundImageOverlay from "@/components/BackgroundImageOverlay";
import Pointer from "@/pages/Home/components/Pointer/Pointer";
import ScreenOverlay from "@/components/ScreenOverlay";
import DisplayBorders from "@/components/DisplayBorders";
import PhaseLabel from "@/components/PhaseLabel";
import HomeNav from "@/components/HomeNav";

function HomeLayout({ children }: { children: React.ReactNode }) {
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
              {children}
            </PageContent>
          </DisplayBorders>

          <BackgroundImageOverlay />
        </MainContainer>
      )}
      <Pointer isHovered={isHovered} />
    </div>
  );
}

export default HomeLayout;
