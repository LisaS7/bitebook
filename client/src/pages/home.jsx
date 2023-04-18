import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import { ButtonGroup, HomeContainer, StyledCard } from "./home.style";

export default function Home() {
  return (
    <HomeContainer>
      <StyledCard>
        <Card.Title>View</Card.Title>
        <ButtonGroup>
          <Link to="/foods">
            <button id="pink-button">Foods</button>
          </Link>
          <Link to="/bites">
            <button id="pink-button">Bites</button>
          </Link>
        </ButtonGroup>
      </StyledCard>
      <StyledCard></StyledCard>
    </HomeContainer>
  );
}
