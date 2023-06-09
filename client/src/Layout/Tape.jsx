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

export const LongTopTape = styled(Tape)`
  width: 110%;
  top: -10px;
  left: -30px;
`;

export const LongBottomTape = styled(Tape)`
  width: 110%;
  bottom: -10px;
  left: -30px;
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

export const TapeBottomRight = styled(Tape)`
  right: 0px;
  bottom: 0px;
  transform: translate(26px, 0px) rotate(-45deg);
`;

export const TapeBottomLeft = styled(Tape)`
  left: -70px;
  bottom: 0px;
  transform: translate(26px, 0px) rotate(45deg);
`;
