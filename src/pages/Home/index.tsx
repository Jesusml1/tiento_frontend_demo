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
import MainContainer from "@/components/MainContainer";

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
        <MobileMenuOverlay setShowMobileMenu={setShowMobileMenu} />
      ) : (
        <MainContainer>
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
        </MainContainer>
      )}

      <Pointer isHovered={isHovered} />
    </div>
  );
}

export default Home;
