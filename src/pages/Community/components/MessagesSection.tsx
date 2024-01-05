import styled from "@emotion/styled";

const ContentSection = styled.div`
  background: rgba(255, 255, 255, 0.2);
  padding: 20px;
  max-width: 30vw;
  overflow-y: scroll;
  border: 1px solid rgba(33, 150, 243, 0.15);
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-grow: 1;
  flex-basis: 100%;

  @media (max-width: 1024px) {
    max-width: none;
    margin-left: 20px;
    margin-right: 20px;
    min-height: 350px;
  }

  ::-webkit-scrollbar {
    display: none;
  }
`;

export default ContentSection;
