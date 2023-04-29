import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-evenly;
  gap: 6rem;
`;

export const UserContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 6rem;

  & .button-section {
    display: flex;
    justify-content: center;
    gap: 3rem;
  }
`;

export const PeopleContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  & .person {
    display: grid;
    grid-template-columns: 1fr 3fr 1fr 1fr;
    align-items: center;
    gap: 2rem;
  }

  & .form-control-color {
    display: inline-block;
    border-radius: 100%;
    width: 50px;
    height: 50px;
  }
`;
