import styled from "@emotion/styled";
import { useEffect, useRef, useState } from "react";

import RandomNumbersDisplay from "./components/RandomNumbersDisplay";
import Pointer from "./components/Pointer/Pointer";
import DisplayBorders from "./components/DisplayBorders";
import PhaseLabel from "./components/PhaseLabel";
import HomeNav from "./components/HomeNav";
import TientoInit from "./components/TientoInit";
import TientoHero from "./components/TientoHero";
import ScreenOverlay from "./components/ScreenOverlay";
import BackgroundVideoOverlay from "./components/BackgroundVideoOverlay";
import { css } from "@emotion/react";

const generalBackgroundColor = "rgb(20, 20, 20)";

const HomeContainer = styled.div`
  width: 100%;
  height: 100vh;
  background-color: ${generalBackgroundColor};
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
`;

function Home() {
  const container = useRef<HTMLDivElement>(null);
  const [showLanding, setShowLanding] = useState(false);

  useEffect(() => {
    document.body.classList.add('overflow-hidden');
    return () => {
      document.body.classList.remove('overflow-hidden');
    };
})

  function handleShowLanding() {
    setShowLanding(true)
  }

  return (
    <div>
      <HomeContainer ref={container}>
        <ScreenOverlay />

        <DisplayBorders>
          {showLanding === false && <TientoInit handleShowLanding={handleShowLanding} />}
          {showLanding && <PhaseLabel />}
          {showLanding && <HomeNav />}
          {showLanding && <TientoHero />}
        </DisplayBorders>

        {showLanding && <RandomNumbersDisplay />}
        {showLanding && <BackgroundVideoOverlay/>}
      </HomeContainer>

      <Pointer containerRef={container} />
    </div>
  );
}

export default Home;
