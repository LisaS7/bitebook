import styled from "styled-components";

export const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  margin: auto;

  & > section {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
  }

  & .button-section {
    display: flex;
    justify-content: center;
    gap: 3rem;
  }
`;

export const PeopleContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  & .person {
    display: flex;
    align-items: center;
    gap: 1rem;
  }
`;

export const Circle = styled.span`
  display: inline-block;
  border-radius: 100%;
  width: 50px;
  height: 50px;
  background-color: ${(props) => props.colour || "blue"};
`;
