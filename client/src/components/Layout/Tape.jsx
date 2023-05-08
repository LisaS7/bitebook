import styled from "styled-components";

const Tape = styled.div`
  content: "";
  width: 8rem;
  height: 2.5rem;
  position: absolute;
  opacity: 0.5;
  background-color: var(--tape-gray);
  border-right: 2px dotted var(--tape-edge-gray);
  border-left: 2px dotted var(--tape-edge-gray);
`;

export const TapeTopLeft = styled(Tape)`
  left: 0px;
  top: 0px;
  transform: translate(-36px, 10px) rotate(-45deg);
`;

export const TapeTopRight = styled(Tape)`
  right: 0px;
  top: 0px;
  transform: translate(36px, 10px) rotate(45deg);
`;
