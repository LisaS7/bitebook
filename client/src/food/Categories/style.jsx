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
  box-shadow: 0px 0px 5px 0px #888;
  position: relative;

  /* blue paper-like lines */
  background-image: repeating-linear-gradient(
    white 4px,
    white 23px,
    steelblue 24px
  );

  /* red notebook margin line */
  & .margin-line {
    position: absolute;
    left: 4rem;
    bottom: 0px;
    width: 2px;
    height: calc(100% - 3.5rem);
    background-color: rgba(255, 0, 0, 0.4);
  }

  & h5 {
    border-radius: 20px 20px 0px 0px;
    padding: 1rem;
    text-align: center;
    background: var(--contrast);
  }

  & .content {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    padding: 1rem 2rem 1rem 5rem;
    min-height: 100px;
  }
`;
