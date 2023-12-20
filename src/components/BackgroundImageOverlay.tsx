import styled from "@emotion/styled";

const backgroundImageUrl = new URL("/background_image.png", import.meta.url)
  .href;

const BackgroundImageOverlayContainer = styled.img`
  position: absolute;
  left: 0;
  top: 0;
  object-fit: cover;
  filter: sepia(50%) hue-rotate(180deg);
  opacity: 0.3;
  height: 100%;
  width: 100%;
  overflow: hidden;
`;

function BackgroundImageOverlay() {
  return <BackgroundImageOverlayContainer src={backgroundImageUrl} />;
}

export default BackgroundImageOverlay;
