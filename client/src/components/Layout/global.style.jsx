import styled from "styled-components";

export const MainContainer = styled.main`
  max-width: 90%;
  margin: auto;
  padding: 3rem;
`;

export const StyledColumnContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 1rem;
`;

export const Card = styled.div`
  background-color: var(--light);
  border: 1px solid var(--dark);
  border-radius: 5px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  padding: 0.5rem;
`;

export const TipBar = styled.p`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  background-color: var(--light);
  border-radius: 10px;
`;
