export async function fetchAvaliablePlaces() {
  const response = await fetch("http://localhost:3000/places");
  const data = await response.json();

  if (!response.ok) {
    throw new Error("Failed to fetch the places");
  }

  return data.places;
}

export async function updateUserPlaces(places) {
  const response = await fetch("http://localhost:3000/user-places", {
    method: "PUT",
    body: JSON.stringify({ places }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const resData = await response.json();

  console.log(resData);

  if (!response.ok) {
    throw new Error("Failed to upate the data");
  }
  return resData.message;
}

export async function fetchUserPlaces() {
  const response = await fetch("http://localhost:3000/user-places");
  const data = await response.json();

  if (!response.ok) {
    throw new Error("Failed to fetch the user places");
  }

  return data.places;
}
