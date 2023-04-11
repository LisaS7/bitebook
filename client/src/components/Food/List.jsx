import Table from "react-bootstrap/Table";
import { capitalise } from "../../utils/StringHelpers";
import { StyledContainer } from "./style";

export default function FoodList({ foods }) {
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

function Food({ food }) {
  return (
    <tr>
      <td>{food.icon}</td>
      <td>{food.name}</td>
      <td>{capitalise(food.category)}</td>
      <td>{capitalise(food.grouping)}</td>
      <td>{food.colour}</td>
      <td>{food.flavour}</td>
      <td>{food.texture}</td>
      <td>{food.notes}</td>
    </tr>
  );
}
