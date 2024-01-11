import { css, keyframes } from "@emotion/react";
import styled from "@emotion/styled";
import { useEffect, useRef } from "react";
import PointerCorners from "./PointerCorners";
import PointerDots from "./PointerDots";

const pointerInit = keyframes`
  from {transform: rotate(45deg);}
  to {transform: rotate(0);}
`;

const PointerContainer = styled.div`
  height: 50px;
  width: 50px;
  position: absolute;
  left: 50%;
  top: 50%;
  translate: -50% -50%;
  animation: ${pointerInit} 300ms ease;
  pointer-events: none;
  z-index: 100;
  @media (max-width: 768px) {
    display: none;
  }
`;

const pointerHover = keyframes`
  from { transform: rotate(0); }
  to { transform: rotate(45deg); }
`;

function Pointer({ isHovered }: { isHovered: boolean }) {
  const pointerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const pointer = pointerRef.current;
    if (!pointer) return;

    const handlePointerMove = (event: PointerEvent) => {
      const { clientX, clientY } = event;
      pointer.animate(
        {
          left: `${clientX}px`,
          top: `${clientY}px`,
        },
        { duration: 1000, fill: "forwards" }
      );
    };

    document.body.addEventListener("pointermove", handlePointerMove);

    return () => {
      document.body.removeEventListener("pointermove", handlePointerMove);
    };
  }, []);

  return (
    <PointerContainer
      ref={pointerRef}
      css={
        isHovered ?
        css`
          animation: ${pointerHover} 300ms ease-in-out;
          transform: rotate(45deg);
        `:
        css`
          animation: ${pointerInit} 300ms ease-in-out;
        `
      }
    >
      <PointerCorners isHovered={isHovered} />
      <PointerDots isHovered={isHovered} />
    </PointerContainer>
  );
}

export default Pointer;
