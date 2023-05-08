import styled from "styled-components";
import paperClip from "../Layout/paper-clip.png";

export const PaperStack = styled.div`
  background: #e9e8e8;
  padding: 3rem;
  position: relative;
  transform: rotate(2deg);
  z-index: 1;

  &,
  &::before,
  &::after {
    /* Styles to distinguish sheets from one another */
    box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.25);
    border: 1px solid #dcd9d9;
  }

  &::before,
  &::after {
    content: "";
    position: absolute;
    height: 99%;
    width: 98%;
    background-color: #eee;
  }

  &::before {
    right: 15px;
    top: 7px;
    transform: rotate(-2deg);
    z-index: -1;
  }

  &::after {
    top: 37px;
    right: 0px;
    transform: rotate(2deg);
    z-index: -2;
  }
`;

export const PaperClip = styled.img`
  src: url(${paperClip});
  z-index: 10;
  height: 15rem;
  position: absolute;
  top: -52px;
  padding: 4rem 2rem 2rem 3rem;
`;
