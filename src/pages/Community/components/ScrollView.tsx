import styled from "@emotion/styled";

const Container = styled.div<{ bgColor: string }>`
  background: ${(props) => props.bgColor};
  padding: 15px;
  position: relative;
  overflow: auto;
  height: inherit;
  width: inherit;
`;

function ScrollView({
  children,
  bgColor,
}: {
  children: React.ReactNode;
  bgColor: string;
}) {
  return <Container bgColor={bgColor}>{children}</Container>;
}

export default ScrollView;

// rgba(255, 255, 255, 0.2)
