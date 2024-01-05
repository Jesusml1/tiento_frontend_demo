import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";

const PageContent = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  animation: ${keyframes`
    0% { opacity: 0 }
    50% {opacity: 0 }
    100% { opacity: 1 }
  `} 2s ease-in-out;
`;

export default PageContent;
