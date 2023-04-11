export default function FoodList({ foods }) {
  const foodElements = foods.map((food) => <Food food={food} key={food.id} />);

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
        </tr>
      </thead>
      <tbody>{foodElements}</tbody>
    </table>
  );
}

function Food({ food }) {
  return (
    <tr>
      <td>{food.name}</td>
    </tr>
  );
}
