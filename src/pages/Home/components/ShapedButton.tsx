import styled from "@emotion/styled";
import { ReactNode } from "react";

const Fill = styled.div`
  position: absolute;
  background: rgba(255, 255, 255, 0.1);
  clip-path: polygon(0% 0%, 100% 0%, 100% 50%, 75% 100%, 0% 100%);
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const Corner = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  height: 50%;
  width: 25%;
  background: rgba(255, 255, 255, 0.1);
  z-index: 20;
  clip-path: polygon(100% 20%, 100% 100%, 20% 100%);
`;

const Button = styled.a`
  position: relative;
  width: 200px;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  text-decoration: none;
  cursor: pointer;
  &:hover ${Fill}, &:hover ${Corner} {
    background: rgba(255, 255, 255, 0.2);
  }
`;

function ShapedButton({ children }: { children: ReactNode }) {
  return (
    <Button>
      <Fill />
      <Corner />
      {children}
    </Button>
  );
}

export default ShapedButton;
