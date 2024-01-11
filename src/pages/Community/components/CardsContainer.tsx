import styled from "@emotion/styled";

const CardsContainer = styled.div`
  display: flex;
  column-gap: 20px;
  max-height: 70vh;
  @media (max-width: 1024px) {
    flex-direction: column;
    row-gap: 80px;
    overflow-y: scroll;
  }
`;

export default CardsContainer;
