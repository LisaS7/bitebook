import styled from "styled-components";

export const ReportContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
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

export const ReportBody = styled.section`
  display: flex;
  justify-content: space-evenly;
  gap: 2rem;
`;

export const Column = styled.div`
  width: 90%;

  & h3 {
    font-size: 1.4rem !important;
    border-bottom: 1px solid var(--pink);
  }
`;
