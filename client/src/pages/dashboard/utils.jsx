export function getDistinctValues(listOfObjects, property) {
  const allValuesArray = listOfObjects
    .map((item) =>
      item[property].split(",").map((string) => string.trim().toLowerCase())
    )
    .flat();
  return [...new Set(allValuesArray)];
}

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

export function aggBitesByDate(bites, category) {
  const aggData = [];
  bites.forEach((bite) => {
    const index = aggData.findIndex((b) => b.date === bite.date);
    if (index < 0) {
      // set new date object with total rating and count of ratings
      // ??? {date: "date", yellow: 3.5, juicy: 2.4, etc}
      aggData.push({ date: bite.date });
    } else {
      // add to existing rating and count of ratings
    }
  });
}
