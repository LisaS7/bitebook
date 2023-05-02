import { calcFoodPropertyAverages } from "./utils";
import { Column } from "./style";
import { DisplayRating } from "../../bites/utils";

export default function PropertyDetails({ personBites }) {
  const averages = calcFoodPropertyAverages(personBites);

  const displayColours = averages.colour.map((colour) => (
    <div>
      {colour.name} {DisplayRating(colour.rating)}
    </div>
  ));

  const displayFlavours = averages.flavour.map((flavour) => (
    <div>
      {flavour.name} {DisplayRating(flavour.rating)}
    </div>
  ));

  const displayTextures = averages.texture.map((texture) => (
    <div>
      {texture.name} {DisplayRating(texture.rating)}
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
