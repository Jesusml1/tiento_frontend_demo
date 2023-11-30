import { css, keyframes } from "@emotion/react";
import styled from "@emotion/styled";
import { ReactNode } from "react";

const borderColor = "rgba(255, 255, 255, 0.105)";
const borderCornerSize = "20px";
const borderCornerColor = "rgba(255, 255, 255, 0.727)";

const DisplayContainer = styled.div`
  width: 97%;
  height: 95vh;
  border: 1px solid ${borderColor};
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-family: monospace;
  z-index: 10;
  animation: ${keyframes`
    0% { width: 100px; height: 100px; }
    50% { width: 97%; height: 100px; }
    100% { width: 97%; height: 95vh; }
  `} 1s ease-in-out;
`;

const DisplayBorderSharedStyles = css`
  position: absolute;
  width: ${borderCornerSize};
  height: ${borderCornerSize};
`;

const DisplayBorderTopLeft = styled.div`
  ${DisplayBorderSharedStyles}
  left: 0;
  top: 0;
  border-top: 2px solid ${borderCornerColor};
  border-left: 2px solid ${borderCornerColor};
`;

const DisplayBorderTopRight = styled.div`
  ${DisplayBorderSharedStyles}
  right: 0;
  top: 0;
  border-top: 2px solid ${borderCornerColor};
  border-right: 2px solid ${borderCornerColor};
`;

const DisplayBorderBottomRight = styled.div`
  ${DisplayBorderSharedStyles}
  right: 0;
  bottom: 0;
  border-bottom: 2px solid ${borderCornerColor};
  border-right: 2px solid ${borderCornerColor};
`;

const DisplayBorderBottomLeft = styled.div`
  ${DisplayBorderSharedStyles}
  left: 0;
  bottom: 0;
  border-bottom: 2px solid ${borderCornerColor};
  border-left: 2px solid ${borderCornerColor};
`;

function DisplayBorders({ children }: { children: ReactNode }) {
  return (
    <DisplayContainer>
      <DisplayBorderTopLeft />
      <DisplayBorderTopRight />
      <DisplayBorderBottomRight />
      <DisplayBorderBottomLeft />
      {children}
    </DisplayContainer>
  );
}

export default DisplayBorders;
