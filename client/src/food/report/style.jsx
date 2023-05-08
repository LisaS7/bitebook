import styled from "styled-components";
import { StyledColumnContainer } from "../../Layout/global.style";

export const ReportContainer = styled(StyledColumnContainer)`
  background-color: var(--light);
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  padding: 3rem;
  z-index: 2;
  position: relative;
`;

export const ReportHead = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  & h1 {
    font-size: 2rem;
  }

  & button {
    display: flex;
    align-items: center;
    gap: 0.7rem;
    align-self: flex-end;
    padding: 0.6rem;
    color: var(--light);
    font-size: 1.5rem;
    font-weight: 600;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  }
`;

export const ReportSection = styled.section`
  display: flex;
  justify-content: space-evenly;
  gap: 2rem;

  .small-text {
    color: darkslategray;
  }

  .rating {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;

    & span:first-child {
      text-align: right;
    }
  }
`;

export const Column = styled.div`
  width: 90%;

  & h3 {
    font-size: 1.4rem !important;
    padding: 1rem;
    border-bottom: 1px solid var(--contrast);
    text-align: center;
  }

  .food {
    margin-left: 4rem;
  }
`;
