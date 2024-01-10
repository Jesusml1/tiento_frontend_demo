import styled from "@emotion/styled";

const Container = styled.div<{ bgColor: string }>`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  width: 50%;
  background: ${(props) => props.bgColor};
  clip-path: polygon(0% 0%, 80% 0%, 100% 100%, 0% 100%);
`;

function TabName({
  children,
  bgColor,
}: {
  children: React.ReactNode;
  bgColor: string;
}) {
  return <Container bgColor={bgColor}>{children}</Container>;
}

export default TabName;
