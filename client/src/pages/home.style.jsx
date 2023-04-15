import styled from "styled-components";
import Card from "react-bootstrap/Card";

export const HomeContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 3rem;
  width: 75%;
  margin: auto;
`;

export const StyledCard = styled(Card)`
  background-color: var(--light);
  border: 1px solid var(--pink);
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  padding: 1rem;
  align-items: center;
  gap: 1rem;
`;

export const ButtonGroup = styled.div`
  width: 60%;
  display: flex;
  justify-content: space-evenly;

  & button {
    width: 6rem;
    padding: 0.75rem;
    color: white;
    font-weight: 700;
  }
`;
