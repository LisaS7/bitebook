import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import { ButtonGroup, HomeContainer, StyledCard } from "./home.style";

export default function Home() {
  return (
    <HomeContainer>
      <StyledCard>
        <Card.Title>Food</Card.Title>
        <ButtonGroup>
          <Link to="/foods/add">
            <button id="pink-button">Add</button>
          </Link>
          <Link to="/foods">
            <button id="pink-button">View</button>
          </Link>
        </ButtonGroup>
      </StyledCard>
      <StyledCard>
        <Card.Title>Bites</Card.Title>
        <ButtonGroup>
          <Link to="/bites/add">
            <button id="pink-button">Add</button>
          </Link>
          <Link to="/bites">
            <button id="pink-button">View</button>
          </Link>
        </ButtonGroup>
      </StyledCard>
    </HomeContainer>
  );
}
