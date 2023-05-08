import styled from "styled-components";

export const NewFoodSummary = styled.section`
  display: flex;
  flex-direction: column;
  padding: 1.5rem;
  gap: 2rem;
  align-items: center;
  border-radius: 10px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  background-color: var(--light);
  position: relative;

  & p {
    margin-bottom: 0;
  }

  & .new-foods {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    gap: 2rem;
  }

  & .detail {
    font-size: 0.7rem;
    color: darkslategray;
    margin-left: 5px;
  }
`;
