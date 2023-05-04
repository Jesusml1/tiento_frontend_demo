import { css, keyframes } from "@emotion/react";
import styled from "@emotion/styled";

const sharedPointerDotsStyles = css`
  height: 5px;
  width: 5px;
  background-color: white;
  border-radius: 50%;
  position: absolute;
`;

const PointerDotTopLeft = styled.div`
  ${sharedPointerDotsStyles}
`;
const PointerDotTopRight = styled.div`
  ${sharedPointerDotsStyles}
`;
const PointerDotBottomRight = styled.div`
  ${sharedPointerDotsStyles}
`;
const PointerDotBottomLeft = styled.div`
  ${sharedPointerDotsStyles}
`;

// Init animations
const pointerDotTopLeftInit = keyframes`
  from { top: 5px; left: 5px; }
  to { top: 15px; left: 15px; }
`;
const pointerDotTopRightInit = keyframes`
  from { top: 5px; right: 5px; }
  to { top: 15px; right: 15px; }
`;
const pointerDotBottomRightInit = keyframes`
  from { bottom: 5px; right: 5px; }
  to { bottom: 15px; right: 15px; }
`;
const pointerDotBottomLeftInit = keyframes`
  from { bottom: 5px; left: 5px; }
  to { bottom: 15px; left: 15px; }
`;

// Hover animations
const pointerDotTopLeft = keyframes`
  from { top: 15px; left: 15px; }
  to { top: 0; left: 0; }
`;
const pointerDotTopRight = keyframes` 
  from { top: 15px; right: 15px; }
  to { top: 0; right: 0; }
`;
const pointerDotBottomRight = keyframes`
  from { bottom: 15px; right: 15px; }
  to { bottom: 0; right: 0; }
`;
const pointerDotBottomLeft = keyframes`
  from { bottom: 15px; left: 15px; }
  to { bottom: 0; left: 0; }
`;

function PointerDots({ isHovered }: { isHovered: boolean }) {
  return (
    <>
      <PointerDotTopLeft 
        css={
          isHovered ?
          css`
            animation: ${pointerDotTopLeft} 300ms ease;
            top: 0;
            left: 0;
          ` :
          css`
            top: 15px;
            left: 15px;
            animation: ${pointerDotTopLeftInit} 300ms ease;
          `
        }
       />
      <PointerDotTopRight
        css={
          isHovered ?
          css`
            animation: ${pointerDotTopRight} 300ms ease;
            top: 0;
            right: 0;
          `:
          css`
            top: 15px;
            right: 15px;
            animation: ${pointerDotTopRightInit} 300ms ease;
          `
        }
       />
      <PointerDotBottomRight
        css={
          isHovered ?
          css`
            animation: ${pointerDotBottomRight} 300ms ease;
            bottom: 0;
            right: 0;
          `:
          css`
            bottom: 15px;
            right: 15px;
            animation: ${pointerDotBottomRightInit} 300ms ease;
          `
        }
       />
      <PointerDotBottomLeft 
        css={
          isHovered ?
          css`
            animation: ${pointerDotBottomLeft} 300ms ease;
            bottom: 0;
            left: 0;
          `:
          css`
            bottom: 15px;
            left: 15px;
            animation: ${pointerDotBottomLeftInit} 300ms ease;
          `
        }
      />
    </>
  );
}

export default PointerDots;
