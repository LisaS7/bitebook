import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Popover from "react-bootstrap/Popover";

export function foodPopover() {
  return (
    <Popover id="popover-basic">
      <Popover.Header as="h3">Popover right</Popover.Header>
      <Popover.Body>
        And here's some <strong>amazing</strong> content. It's very engaging.
        right?
      </Popover.Body>
    </Popover>
  );
}

export function PopoverTrigger() {
  return (
    <OverlayTrigger trigger="click" placement="right" overlay={foodPopover}>
      <Button variant="success">Click me to see</Button>
    </OverlayTrigger>
  );
}
