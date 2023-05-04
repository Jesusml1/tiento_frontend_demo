import { css, keyframes } from "@emotion/react";
import styled from "@emotion/styled";

const sharedPointerStyles = css`
  position: absolute;
  width: 15px;
  height: 15px;
`;

const PointerCornerTopLeft = styled.div`
  ${sharedPointerStyles}
  border-top: 1px solid white;
  border-left: 1px solid white;
`;
const PointerCornerTopRight = styled.div`
  ${sharedPointerStyles}
  border-top: 1px solid white;
  border-right: 1px solid white;
`;
const PointerCornerBottomRight = styled.div`
  ${sharedPointerStyles}
  border-bottom: 1px solid white;
  border-right: 1px solid white;
`;
const PointerCornerBottomLeft = styled.div`
  ${sharedPointerStyles}
  border-bottom: 1px solid white;
  border-left: 1px solid white;
`;

// Init animations
const pointerCornerTopLeftInit = keyframes`
    from { top: 10px; left: 10px; }
    to { top: 0; left: 0; }
`;
const pointerCornerTopRightInit = keyframes`
  from { top: 10px; right: 10px; }
  to { top: 0; right: 0; }
`;
const pointerCornerBottomLeftInit = keyframes`
  from { bottom: 10px; left: 10px; }
  to { bottom: 0; left: 0; }
`;
const pointerCornerBottomRightInit = keyframes`
  from { bottom: 10px; right: 10px; }
  to { bottom: 0; right: 0; }
`;

// Hover animations
const pointerCornerTopLeft = keyframes`
  from { top: 0; left: 0; }
  to { top: 10px; left: 10px; }
`;
const pointerCornerTopRight = keyframes`
  from { top: 0; right: 0; }
  to { top: 10px; right: 10px; }
`;
const pointerCornerBottomRight = keyframes`
  from { bottom: 0; right: 0; }
  to { bottom: 10px; right: 10px; }
`;
const pointerCornerBottomLeft = keyframes`
  from { bottom: 0; left: 0; }
  to { bottom: 10px; left: 10px; }
`;

function PointerCorners({ isHovered }: { isHovered: boolean }) {
  return (
    <>
      <PointerCornerTopLeft
        css={
          isHovered ?
          css`
            top: 10px;
            left: 10px;
            animation: ${pointerCornerTopLeft} 300ms ease;
          `:
          css`
            top: 0;
            left: 0;
            animation: ${pointerCornerTopLeftInit} 300ms ease;
          `
        }
      />
      <PointerCornerTopRight
        css={
          isHovered ?
          css`
            top: 10px;
            right: 10px;
            animation: ${pointerCornerTopRight} 300ms ease;
          `:
          css`
            top: 0;
            right: 0;
            animation: ${pointerCornerTopRightInit} 300ms ease;
          `
        }
      />
      <PointerCornerBottomRight
        css={
          isHovered ?
          css`
            bottom: 10px;
            right: 10px;
            animation: ${pointerCornerBottomRight} 300ms ease;
          `:
          css`
            bottom: 0;
            right: 0;
            animation: ${pointerCornerBottomRightInit} 300ms ease;
          `
        }
      />
      <PointerCornerBottomLeft
        css={
          isHovered ?
          css`
            bottom: 10px;
            left: 10px;
            animation: ${pointerCornerBottomLeft} 300ms ease;
          `:
          css`
            bottom: 0;
            left: 0;
            animation: ${pointerCornerBottomLeftInit} 300ms ease;
          `
        }
      />
    </>
  );
}

export default PointerCorners;
