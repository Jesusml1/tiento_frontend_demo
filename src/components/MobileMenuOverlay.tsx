import styled from "@emotion/styled";
// import DisplayBorders from "../pages/Home/components/DisplayBorders";
import MobileMenuBtn from "./MobileMenuBtn";
import MobileOverlayBorders from "./MobileOverlayBorders";
import { keyframes } from "@emotion/react";

const Container = styled.div`
  background-color: black;
  color: white;
  width: 100%;
  height: 100%;
  z-index: 200;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 2rem;
`;

const appear = keyframes`
    0%{opacity: 0;}
    80%{opacity: 0;}
    100%{opacity: 1;}
`;

const CloseMenuBtn = styled.button`
  position: absolute;
  top: 0;
  right: 50px;

  padding: 20px;
  border: none;
  border-top: 1px solid white;
  background: none;
  animation: ${appear} 1500ms ease-in;
`;

function MobileMenuOverlay({
  setShowMobileMenu,
}: {
  setShowMobileMenu: (showMobileMenu: boolean) => void;
}) {
  return (
    <Container>
      <MobileOverlayBorders>
        <CloseMenuBtn onClick={() => setShowMobileMenu(false)}>
          CLOSE
        </CloseMenuBtn>
        <MobileMenuBtn>COMMUNITY</MobileMenuBtn>
        <MobileMenuBtn>PROJECT</MobileMenuBtn>
        <MobileMenuBtn>DOCUMENT</MobileMenuBtn>
        <MobileMenuBtn>EVENTS</MobileMenuBtn>
        <MobileMenuBtn>MERCH</MobileMenuBtn>
        <MobileMenuBtn>ABOUT</MobileMenuBtn>
      </MobileOverlayBorders>
    </Container>
  );
}

export default MobileMenuOverlay;
