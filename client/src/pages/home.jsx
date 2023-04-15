import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import { ButtonGroup, HomeContainer, StyledCard } from "./home.style";

export default function Home() {
  return (
    <HomeContainer>
      <StyledCard>
        <Card.Title>Food</Card.Title>
        <ButtonGroup>
          <Link to="/foods">
            <button id="pink-button">Add</button>
          </Link>
          <button id="pink-button">View</button>
        </ButtonGroup>
      </StyledCard>
      <StyledCard>
        <Card.Title>Bites</Card.Title>
        <ButtonGroup>
          <button id="pink-button">Add</button>
          <button id="pink-button">View</button>
        </ButtonGroup>
      </StyledCard>
    </HomeContainer>
  );
}
