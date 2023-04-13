const baseURL = "http://localhost:8080/api";

export async function getData(endpoint, setData) {
  const response = await fetch(baseURL + endpoint);
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

// export async function postBooking(booking) {
//   const data = await fetch(baseURL, {
//       method: "POST",
//       body: JSON.stringify(booking),
//       headers: {"Content-Type": "application/json"}
//   })
//   return await data.json()
// }
