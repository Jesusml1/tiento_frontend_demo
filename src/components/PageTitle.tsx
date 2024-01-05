import { css } from "@emotion/react";
import styled from "@emotion/styled";

const PageTitleContainer = styled.div`
  padding: 20px;
  border: 1px solid rgba(33, 150, 243, 0.15);
  font-size: 24px;
  font-weight: 400;
  font-family: 'IBM Plex Mono', monospace;
  margin-bottom: 20px;
  /* width: max-content; */
  min-width: 30%;
  height: 69px;
  background: rgba(255, 255, 255, 0.2);
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const borderSharedStyles = css`
  position: absolute;
  width: 15px;
  height: 15px;
`;

const cornerBorderProps = "1px solid white";

const TopLeftCorner = styled.div`
  ${borderSharedStyles}
  top: 0;
  left: 0;
  border-top: ${cornerBorderProps};
  border-left: ${cornerBorderProps};
`;
const TopRightCorner = styled.div`
  ${borderSharedStyles}
  top: 0;
  right: 0;
  border-top: ${cornerBorderProps};
  border-right: ${cornerBorderProps};
`;
const BottomLeftCorner = styled.div`
  ${borderSharedStyles}
  bottom: 0;
  left: 0;
  border-left: ${cornerBorderProps};
  border-bottom: ${cornerBorderProps};
`;
const BottomRightCorner = styled.div`
  ${borderSharedStyles}
  bottom: 0;
  right: 0;
  border-right: ${cornerBorderProps};
  border-bottom: ${cornerBorderProps};
`;

function PageTitle({ children }: { children: React.ReactNode }) {
  return (
    <PageTitleContainer>
      <TopLeftCorner />
      <TopRightCorner />
      <BottomLeftCorner />
      <BottomRightCorner />
      {children}
    </PageTitleContainer>
  );
}

export default PageTitle;
