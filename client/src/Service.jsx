const baseURL = "http://localhost:8080/api";

export async function getData(endpoint, setData) {
  const response = await fetch(baseURL + endpoint);
  const responseJson = await response.json();
  setData(responseJson);
}

export async function updateFood(food) {
  const url = `${baseURL}/foods/${food.id}`;
  const body = {
    method: "PUT",
    body: JSON.stringify(food),
    headers: {
      "Content-Type": "application/json",
    },
  };
  const response = await fetch(url, body);
  return await response.json();
}

export async function deleteFood(id) {
  const url = `${baseURL}/foods/${id}`;
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

// export async function deleteBooking(id) {
//   return await fetch(baseURL + id, {
//       method: "DELETE",
//   })
// }
