import styled from "styled-components";

export const CategoriesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
`;

export const DraggableContainer = styled.div`
  display: inline-flex;
  height: fit-content;
  margin: 0.2rem;
  padding: 0.5rem 1rem;
  border-radius: 10%;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  z-index: 100;

  & span {
    color: grey;
    margin-left: 0.3rem;
    font-size: 0.7rem;
    line-height: 1.5rem;
    vertical-align: middle;
  }
`;

export const DroppableContainer = styled.div`
  border-radius: 20px;
  background: white;
  box-shadow: 0px 0px 5px 0px #888;
  position: relative;
  min-height: 20rem;

  /* red notebook margin line */
  & .margin-line {
    position: absolute;
    left: 4rem;
    bottom: 0px;
    width: 2px;
    height: 100%;
    background-color: rgba(255, 0, 0, 0.4);
  }

  & h4 {
    border-radius: 20px 20px 0px 0px;
    padding-top: 1rem;
    text-align: center;
  }

  & .content {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    padding: 1rem 2rem 1rem 5rem;
    height: calc(100% - 6rem);

    /* blue paper-like lines */
    background-image: repeating-linear-gradient(
      white 4px,
      white 23px,
      steelblue 24px
    );
  }
`;
