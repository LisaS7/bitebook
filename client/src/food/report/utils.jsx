function getAverage(listOfObjects, key) {
  const values = listOfObjects.map((obj) => obj[key]);
  const sum = values.reduce((total, value) => total + value);
  return sum / values.length;
}

export function getBitePropertyAverages(personBites) {
  function averageOfProperty(listOfValues, property) {
    const bitesByProperty = {};
    listOfValues[property].forEach((item) => {
      const currentBites = personBites.filter((bite) =>
        bite.foodRecord.food[property].includes(item)
      );
      bitesByProperty[item] = getAverage(currentBites, "rating");
    });
    return bitesByProperty;
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

  console.log("\nVALUES", values);

  //   const bitesByColour = {};
  //   values.colour.forEach((colour) => {
  //     const currentColourBites = personBites.filter((bite) =>
  //       bite.foodRecord.food.colour.includes(colour)
  //     );
  //     bitesByColour[colour] = getAverage(currentColourBites, "rating");
  //   });

  //   console.log("BITES BY COLOUR", bitesByColour);

  const bitesAverages = {
    colour: averageOfProperty(values, "colour"),
    flavour: averageOfProperty(values, "flavour"),
    texture: averageOfProperty(values, "texture"),
  };

  return bitesAverages;
}
