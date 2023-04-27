export function getAverage(listOfObjects, key) {
  const values = listOfObjects.map((obj) => obj[key]);
  const sum = values.reduce((total, value) => total + value);
  return sum / values.length;
}

export function aggFoodBites(foods) {
  const aggData = [];
  foods.forEach((food) => {
    if (!food.bites.length) {
      return;
    }
    const index = aggData.findIndex((f) => f.name === food.name);
    if (index < 0) {
      aggData.push(food);
    } else {
      aggData[index].bites.push(...food.bites);
    }
  });
  return aggData;
}
