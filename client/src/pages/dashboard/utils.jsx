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

export function capitalise(string) {
  return string[0].toUpperCase() + string.slice(1);
}
