import styled from "@emotion/styled";

const backgroundVideoUrl = new URL(
  "/pexels-kelly-2657257-1920x1080-24fps-compress.mp4",
  import.meta.url
).href;

const BackgroundVideoOverlayContainer = styled.video`
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

function BackgroundVideoOverlay() {
  return (
    <BackgroundVideoOverlayContainer autoPlay loop muted plays-inline>
      <source src={backgroundVideoUrl} type="video/mp4" />
    </BackgroundVideoOverlayContainer>
  );
}

export default BackgroundVideoOverlay;
