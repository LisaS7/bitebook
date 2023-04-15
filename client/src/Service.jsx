const baseURL = "http://localhost:8080/api";

export async function getData(endpoint, setData, uid = null) {
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
  const url = `${baseURL}/${endpoint}`;

  const data = await fetch(url, {
    method: "POST",
    body: JSON.stringify(item),
    headers: { "Content-Type": "application/json" },
  });
  return await data.json();
}
