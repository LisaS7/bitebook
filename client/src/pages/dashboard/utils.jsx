import _ from "underscore";

export function getDistinctValues(listOfObjects, property) {
  const allValuesArray = listOfObjects
    .map((item) =>
      item[property].split(",").map((string) => string.trim().toLowerCase())
    )
    .flat();

  return [...new Set(allValuesArray)];
}

export function capitalise(string) {
  return string[0].toUpperCase() + string.slice(1);
}
