import { useSelector } from "react-redux";
import Table from "react-bootstrap/Table";
import Food from "../components/Food/Food";
import { StyledContainer } from "../components/Food/style";

export default function FoodContainer() {
  const foods = useSelector((state) => state.foods);

  const foodElements = foods.map((food) => <Food food={food} key={food.id} />);

  return (
    <StyledContainer>
      <Table responsive>
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Category</th>
            <th>Group</th>
            <th>Colour</th>
            <th>Flavour</th>
            <th>Texture</th>
            <th>Notes</th>
          </tr>
        </thead>
        <tbody>{foodElements}</tbody>
      </Table>
    </StyledContainer>
  );
}
