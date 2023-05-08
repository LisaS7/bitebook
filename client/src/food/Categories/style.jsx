import styled from "styled-components";

export const CategoriesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
`;

export const DraggableContainer = styled.div`
  display: inline-flex;
  margin: 0.2rem;
  padding: 0.5rem 1rem;
  border-radius: 10%;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;

export const DroppableContainer = styled.div`
  border-radius: 20px;
  background: var(--light);
  box-shadow: -5px 5px 3px #a1a1a1, 5px -5px 3px #ffffff;

  & h5 {
    border-radius: 20px 20px 0px 0px;
    padding: 2rem;
    text-align: center;
    background: var(--contrast);
  }

  & > div {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    padding: 1rem;
    min-height: 100px;
  }
`;
