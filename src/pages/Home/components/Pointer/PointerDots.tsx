import { css, keyframes } from "@emotion/react";
import styled from "@emotion/styled";

const sharedPointerDotsStyles = css`
  height: 5px;
  width: 5px;
  background-color: white;
  border-radius: 50%;
  position: absolute;
`;

const pointerDotTopLeftInit = keyframes`
  from { top: 5px; left: 5px; }
  to { top: 15px; left: 15px; }
`;
const PointerDotTopLeft = styled.div`
  ${sharedPointerDotsStyles}
  top: 15px;
  left: 15px;
  animation: ${pointerDotTopLeftInit} 300ms ease;
`;

const pointerDotTopRightInit = keyframes`
  from { top: 5px; right: 5px; }
  to { top: 15px; right: 15px; }
`;
const PointerDotTopRight = styled.div`
  ${sharedPointerDotsStyles}
  top: 15px;
  right: 15px;
  animation: ${pointerDotTopRightInit} 300ms ease;
`;

const pointerDotBottomRightInit = keyframes`
  from { bottom: 5px; right: 5px; }
  to { bottom: 15px; right: 15px; }
`;
const PointerDotBottomRight = styled.div`
  ${sharedPointerDotsStyles}
  bottom: 15px;
  right: 15px;
  animation: ${pointerDotBottomRightInit} 300ms ease;
`;

const pointerDotBottomleftInit = keyframes`
  from { bottom: 5px; left: 5px; }
  to { bottom: 15px; left: 15px; }
`;
const PointerDotBottomLeft = styled.div`
  ${sharedPointerDotsStyles}
  bottom: 15px;
  left: 15px;
  animation: ${pointerDotBottomleftInit} 300ms ease;
`;

function PointerDots() {
  return (
    <>
      <PointerDotTopLeft />
      <PointerDotTopRight />
      <PointerDotBottomRight />
      <PointerDotBottomLeft />
    </>
  );
}

export default PointerDots;
