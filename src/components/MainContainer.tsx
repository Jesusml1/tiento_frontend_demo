import styled from "@emotion/styled";

const generalBackgroundColor = "rgb(20, 20, 20)";

export const MainContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${generalBackgroundColor};
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
  cursor: crosshair;
`;

export default MainContainer;
