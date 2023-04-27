import styled from "styled-components";

export const MainContainer = styled.main`
  max-width: 90%;
  margin: auto;
  padding: 3rem;
`;

export const PinkCard = styled.div`
  background-color: var(--pink);
  color: var(--light);
  font-size: 1.5rem;
  padding: 1rem;
  border-radius: 10px;
`;

export const Card = styled.div`
  background-color: var(--light);
  border: 1px solid var(--dark);
  border-radius: 5px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  padding: 0.5rem;
`;
