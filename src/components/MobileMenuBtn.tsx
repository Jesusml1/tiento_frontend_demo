import { css, keyframes } from "@emotion/react";
import styled from "@emotion/styled";

const appear = keyframes`
    0%{opacity: 0;}
    80%{opacity: 0;}
    100%{opacity: 1;}
`;

const Container = styled.button`
  background: none;
  border: 0.5px solid white;
  padding: 30px 50px;
  min-width: 200px;
  position: relative;
  animation: ${appear} 1500ms ease-in;
`;

const cornerStyles = css`
  position: absolute;
  width: 15px;
  height: 15px;
`;

const TopLeftCorner = styled.div`
  ${cornerStyles}
  top: 0;
  left: 0;
  border-top: 1px solid white;
  border-left: 1px solid white;
`;

const TopRightCorner = styled.div`
  ${cornerStyles}
  top: 0;
  right: 0;
  border-top: 2px solid white;
  border-right: 2px solid white;
`;

const BottomLeftCorner = styled.div`
  ${cornerStyles}
  bottom: 0;
  left: 0;
  border-bottom: 2px solid white;
  border-left: 2px solid white;
`;

const BottomRightCorner = styled.div`
  ${cornerStyles}
  bottom: 0;
  right: 0;
  border-bottom: 2px solid white;
  border-right: 2px solid white;
`;

function MobileMenuBtn({ children }: { children: React.ReactNode }) {
  return (
    <Container>
      <TopLeftCorner />
      <TopRightCorner />
      <BottomLeftCorner />
      <BottomRightCorner />
      {children}
    </Container>
  );
}
export default MobileMenuBtn;
