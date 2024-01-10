import styled from "@emotion/styled";
import { useEffect, useState } from "react";

import RandomNumbersDisplay from "./components/RandomNumbersDisplay";
import Pointer from "./components/Pointer/Pointer";
import DisplayBorders from "./components/DisplayBorders";
import PhaseLabel from "./components/PhaseLabel";
import HomeNav from "./components/HomeNav";
import TientoInit from "./components/TientoInit";
import TientoHero from "./components/TientoHero";
import ScreenOverlay from "./components/ScreenOverlay";
import BackgroundVideoOverlay from "./components/BackgroundVideoOverlay";
import MobileMenuOverlay from "@/components/MobileMenuOverlay";

const generalBackgroundColor = "rgb(20, 20, 20)";

export const HomeContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${generalBackgroundColor};
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
  cursor: crosshair;
`;

function Home() {
  const [showLanding, setShowLanding] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  useEffect(() => {
    document.body.classList.add("overflow-hidden");
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, []);

  useEffect(() => {
    if (showLanding === true) {
      setIsHovered(false);
    }
  }, [showLanding]);

  function handleShowLanding() {
    setShowLanding(true);
  }

  return (
    <div>
      {showMobileMenu ? (
        <MobileMenuOverlay
          setShowMobileMenu={setShowMobileMenu}
         />
      ) : (
        <HomeContainer>
          <ScreenOverlay />

          <DisplayBorders>
            {showLanding === false && (
              <TientoInit
                handleShowLanding={handleShowLanding}
                setIsHovered={setIsHovered}
              />
            )}
            {showLanding && (
              <PhaseLabel
                setIsHovered={setIsHovered}
                setShowMobileMenu={setShowMobileMenu}
              />
            )}
            {showLanding && <HomeNav setIsHovered={setIsHovered} />}
            {showLanding && <TientoHero setIsHovered={setIsHovered} />}
          </DisplayBorders>

          {showLanding && <RandomNumbersDisplay />}
          {showLanding && <BackgroundVideoOverlay />}
        </HomeContainer>
      )}

      <Pointer isHovered={isHovered} />
    </div>
  );
}

export default Home;
