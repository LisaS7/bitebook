import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Popover from "react-bootstrap/Popover";
import Button from "react-bootstrap/Button";

export function PopoverTrigger({ food }) {
  const foodPopover = (
    <Popover id="popover-basic">
      <Popover.Header as="h3">
        {food.icon + " " + food.name}
        {food.detail && " - " + food.detail}
      </Popover.Header>
      <Popover.Body>
        <table>
          <tbody>
            <tr>
              <td>Group:</td>
              <td>{food.grouping}</td>
            </tr>
            <tr>
              <td>Category:</td>
              <td>{food.category}</td>
            </tr>
            <tr>
              <td>Colour:</td>
              <td>{food.colour}</td>
            </tr>
            <tr>
              <td>Flavour:</td>
              <td>{food.flavour}</td>
            </tr>
            <tr>
              <td>Texture:</td>
              <td>{food.texture}</td>
            </tr>
          </tbody>
        </table>
      </Popover.Body>
    </Popover>
  );
  console.log(food);
  return (
    <OverlayTrigger
      rootClose
      trigger="click"
      placement="top"
      overlay={foodPopover}
    >
      <button className="btn-outline-pink">{food.name}</button>
    </OverlayTrigger>
  );
}
