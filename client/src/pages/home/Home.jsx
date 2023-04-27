import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import { HomeContainer } from "./style";
import { Animation } from "./Animation";

export default function Home() {
  return (
    <HomeContainer>
      <Animation />
      {/* <StyledCard>
        <Card.Title>Foods</Card.Title>
        <ButtonGroup>
          <Link to="/foods">
            <button id="pink-button">View</button>
          </Link>
          <Link to="/foods/report">
            <button id="pink-button">Report</button>
          </Link>
        </ButtonGroup>
      </StyledCard>
      <StyledCard>
        {" "}
        <Card.Title>Bites</Card.Title>
        <ButtonGroup>
          <Link to="/bites">
            <button id="pink-button">View</button>
          </Link>
        </ButtonGroup>
      </StyledCard> */}
    </HomeContainer>
  );
}
