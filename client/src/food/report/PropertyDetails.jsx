import { calcFoodPropertyAverages } from "./utils";
import { Column } from "./style";
import { DisplayRating } from "../../bites/utils";

export default function PropertyDetails({ personBites }) {
  const averages = calcFoodPropertyAverages(personBites);

  const displayColours = averages.colour.map((colour) => (
    <div className="rating" key={colour.name}>
      <span>{colour.name}</span>
      <span>{DisplayRating(colour.rating)}</span>
    </div>
  ));

  const displayFlavours = averages.flavour.map((flavour) => (
    <div className="rating" key={flavour.name}>
      <span>{flavour.name}</span>
      <span>{DisplayRating(flavour.rating)}</span>
    </div>
  ));

  const displayTextures = averages.texture.map((texture) => (
    <div className="rating" key={texture.name}>
      <span>{texture.name}</span>
      <span>{DisplayRating(texture.rating)}</span>
    </div>
  ));

  return (
    <>
      <Column>
        <h3>Colours</h3>
        {displayColours}
      </Column>
      <Column>
        <h3>Flavours</h3>
        {displayFlavours}
      </Column>
      <Column>
        <h3>Textures</h3>
        {displayTextures}
      </Column>
    </>
  );
}
