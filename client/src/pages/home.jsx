import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import { HomeContainer } from "./home.style";
import { HomeImage } from "./HomeImage";

export default function Home() {
  return (
    <HomeContainer>
      {/* <Row><img src="/logo.svg" width="60" alt="BiteBook logo" /></Row> */}
      {/* <img src="/home_steps.svg" width="2000" alt="BiteBook logo" /> */}
      <HomeImage />
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
