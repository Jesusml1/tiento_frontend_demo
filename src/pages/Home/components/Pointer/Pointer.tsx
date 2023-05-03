import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";
import { RefObject, useEffect, useRef, useState } from "react";
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
`;

const pointerHover = keyframes`
  from { transform: rotate(0); }
  to { transform: rotate(45deg); }
`;

function Pointer(props: { containerRef: RefObject<HTMLDivElement> }) {
  const pointerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const pointer = pointerRef.current;
    const viewport = props.containerRef.current;
    if (!pointer || !viewport) return;

    const handlePointerMove = (event: PointerEvent) => {
      const { clientX, clientY } = event;

      const rect = viewport.getBoundingClientRect();
      const isInside =
        clientX >= rect.left &&
        clientX <= rect.right &&
        clientY >= rect.top &&
        clientY <= rect.bottom;
      if (!isInside) {
        return;
      }

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
    <PointerContainer ref={pointerRef}>
      <PointerCorners />
      <PointerDots />
    </PointerContainer>
  );
}

export default Pointer;
