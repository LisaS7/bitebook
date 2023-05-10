import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
`;

export const NoteContainer = styled.ul`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  flex-wrap: wrap;
  justify-content: center;
`;

export const StyledNote = styled.li`
  list-style: none;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  font-family: "Gloria Hallelujah", cursive;
  text-align: center;
  background: "#f2e058";
  height: 20rem;
  width: 20rem;
  padding: 2rem;
  margin: 2rem;
  box-shadow: 5px 5px 7px rgba(33, 33, 33, 0.7);
  transform: rotate(2deg);
  transition: 0.3s;

  & a {
    text-decoration: none;
  }

  &:nth-child(even) {
    transform: rotate(-3deg);
    position: relative;
    top: 7px;
  }

  &:nth-child(3n) {
    transform: rotate(4deg);
    position: relative;
    top: -3px;
  }

  &:hover {
    box-shadow: 10px 10px 7px rgba(0, 0, 0, 0.7);
    transform: scale(1.25);
    position: relative;
    z-index: 5;
  }
`;

export const StyledTitleNote = styled(StyledNote)`
  display: flex;
  align-items: center;
  justify-content: center;
  grid-column-start: 1;
`;
