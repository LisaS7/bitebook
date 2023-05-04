import styled from "styled-components";

export const SummarySection = styled.section`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 3rem;
  background-color: var(--light);
  border-radius: 10px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;

  & h5 {
    font-weight: 800;
    text-align: center;
    letter-spacing: 0.2rem;
    padding-bottom: 1rem;
    border-bottom: 3px solid var(--platinum);
  }

  & p {
    font-size: 1rem;
    margin-bottom: 0;
    margin-left: 0.8rem;
  }

  & p > span {
    margin-right: 0.3rem;
    color: white;
    font-weight: 800;
    font-size: 1.2rem;
  }
`;

export const ChartTitle = styled.h5`
  text-align: center;
`;
