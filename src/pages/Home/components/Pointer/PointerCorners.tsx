import { css, keyframes } from "@emotion/react";
import styled from "@emotion/styled";

const sharedPointerStyles = css`
  position: absolute;
  width: 15px;
  height: 15px;
`;

const pointerCornerTopLeftInit = keyframes`
    from { top: 10px; left: 10px; }
    to { top: 0; left: 0; }
`;
const PointerCornerTopLeft = styled.div`
  ${sharedPointerStyles}
  top: 0;
  left: 0;
  border-top: 1px solid white;
  border-left: 1px solid white;
  animation: ${pointerCornerTopLeftInit} 300ms ease;
`;

const pointerCornerTopRightInit = keyframes`
  from { top: 10px; right: 10px; }
  to { top: 0; right: 0; }
`;
const PointerCornerTopRight = styled.div`
  ${sharedPointerStyles}
  top: 0;
  right: 0;
  border-top: 1px solid white;
  border-right: 1px solid white;
  animation: ${pointerCornerTopRightInit} 300ms ease;
`;

const pointerCornerBottomLeftInit = keyframes`
  from { bottom: 10px; left: 10px; }
  to { bottom: 0; left: 0; }
`;
const PointerCornerBottomRight = styled.div`
  ${sharedPointerStyles}
  bottom: 0;
  left: 0;
  border-bottom: 1px solid white;
  border-left: 1px solid white;
  animation: ${pointerCornerBottomLeftInit} 300ms ease;
`;

const pointerCornerBottomRightInit = keyframes`
  from { bottom: 10px; right: 10px; }
  to { bottom: 0; right: 0; }
`;
const PointerCornerBottomLeft = styled.div`
  ${sharedPointerStyles}
  bottom: 0;
  right: 0;
  border-bottom: 1px solid white;
  border-right: 1px solid white;
  animation: ${pointerCornerBottomRightInit} 300ms ease;
`;

function PointerCorners() {
  return (
    <>
      <PointerCornerTopLeft />
      <PointerCornerTopRight />
      <PointerCornerBottomRight />
      <PointerCornerBottomLeft />
    </>
  );
}

export default PointerCorners;
