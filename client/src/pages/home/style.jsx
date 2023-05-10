import styled from "styled-components";
import { motion } from "framer-motion";

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const IconContainer = styled(motion.div)`
  display: flex;
  justify-content: space-evenly;
  font-size: 15rem;
  color: var(--green);

  & figure {
    position: relative;
    width: 220px;
  }

  & .count {
    position: absolute;
    color: var(--contrast);
    font-size: 5rem;
  }

  & .count-food {
    top: 44%;
    right: 30%;
  }

  & .count-bites {
    top: 48%;
    right: 24%;
  }

  & svg {
    vertical-align: bottom;
  }

  & figcaption {
    font-size: 5rem;
  }
`;
