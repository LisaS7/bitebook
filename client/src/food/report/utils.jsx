import _ from "underscore";

function getAverage(listOfObjects, key) {
  const values = _.pluck(listOfObjects, key);
  const sum = values.reduce((total, value) => total + value, 0);
  return sum / values.length;
}

export function calcFoodPropertyAverages(personBites) {
  function averageOfProperty(listOfValues, property) {
    const bitesByProperty = [];
    listOfValues[property].forEach((item) => {
      const currentBites = personBites.filter((bite) =>
        bite.foodRecord.food[property].includes(item)
      );
      bitesByProperty.push({
        name: item,
        rating: Math.round(getAverage(currentBites, "rating")),
      });
    });
    return _.sortBy(bitesByProperty, "rating").reverse();
  }

  const values = {
    colour: new Set(),
    flavour: new Set(),
    texture: new Set(),
  };

  personBites.forEach((bite) => {
    values.colour.add(...bite.foodRecord.food.colour.split(","));
    values.flavour.add(...bite.foodRecord.food.flavour.split(","));
    values.texture.add(...bite.foodRecord.food.texture.split(","));
  });

  const foodAverages = {
    colour: averageOfProperty(values, "colour"),
    flavour: averageOfProperty(values, "flavour"),
    texture: averageOfProperty(values, "texture"),
  };

  return foodAverages;
}
