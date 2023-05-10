import { useSelector } from "react-redux";
import { Animation } from "./Animation";
import { HomeContainer, IconContainer } from "./style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBowlRice, faAppleWhole } from "@fortawesome/free-solid-svg-icons";

const iconVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { delay: 8, duration: 3 } },
};

export default function Home() {
  const { foods, bites } = useSelector((state) => state);
  return (
    <HomeContainer>
      <Animation />
      <IconContainer
        initial="initial"
        animate="animate"
        variants={iconVariants}
      >
        <figure>
          <FontAwesomeIcon icon={faAppleWhole} />
          <p className="count count-food">{foods.length}</p>
          <figcaption>Foods</figcaption>
        </figure>
        <figure>
          <FontAwesomeIcon icon={faBowlRice} />
          <p className="count count-bites">{bites.length}</p>
          <figcaption>Bites</figcaption>
        </figure>
      </IconContainer>
    </HomeContainer>
  );
}
