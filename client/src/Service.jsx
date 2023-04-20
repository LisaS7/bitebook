import { debugStyle } from "./console_css";

const baseURL = "http://localhost:8080/api";

export async function getData(endpoint, setData) {
  const uid = localStorage.getItem("uid");
  const url = uid ? `${baseURL}${endpoint}?uid=${uid}` : baseURL + endpoint;
  const response = await fetch(url);
  const responseJson = await response.json();
  setData(responseJson);
}

export async function updateRecord(item, endpoint) {
  const url = `${baseURL}/${endpoint}/${item.id}`;
  const body = {
    method: "PUT",
    body: JSON.stringify(item),
    headers: {
      "Content-Type": "application/json",
    },
  };
  const response = await fetch(url, body);
  return await response.json();
}

export async function deleteRecord(id, endpoint) {
  const url = `${baseURL}/${endpoint}/${id}`;
  const body = { method: "DELETE" };
  await fetch(url, body);
}

export async function postRecord(item, endpoint) {
  const uid = localStorage.getItem("uid");
  const url = `${baseURL}/${endpoint}`;
  item.userId = uid;

  const data = await fetch(url, {
    method: "POST",
    body: JSON.stringify(item),
    headers: { "Content-Type": "application/json" },
  });
  return await data.json();
}

export async function seedNewAccount() {
  const uid = localStorage.getItem("uid");
  const url = `${baseURL}/foods/seed-new-user/${uid}`;
  console.log("%c Seed url: " + url, debugStyle);
  const response = await fetch(url);
  const responseJson = await response.json();
  console.log("%c Response: " + responseJson, debugStyle);
  return responseJson;
}
