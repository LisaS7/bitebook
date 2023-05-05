import styled from "styled-components";

export const CategoriesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
`;

export const DraggableContainer = styled.div`
  display: inline-flex;
  margin: 0.2rem;
  padding: 0.5rem 1rem;
  border-radius: 10%;
  background-color: var(--light-green);
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
    rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
`;

export const DroppableContainer = styled.div`
  border: 1px solid black;
  border-radius: 20px;
  background-color: var(--light);

  & h5 {
    border-radius: 20px 20px 0px 0px;
    padding: 2rem;
    text-align: center;
    background-color: var(--pink);
  }

  & > div {
    padding: 1rem;
    min-height: 100px;
  }
`;

export const UncategorisedContainer = styled(DroppableContainer)`
  margin: 2rem;

  & > div {
    padding: 2rem;
  }
`;
