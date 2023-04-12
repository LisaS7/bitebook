const baseURL = "http://localhost:8080/api/";

export async function getData(endpoint, setData) {
  const response = await fetch(baseURL + endpoint);
  const responseJson = await response.json();
  setData(responseJson);
}
