export async function fetchAvailablePlaces() {
  const response = await fetch("http://localhost:3000/places");
  const resData = await response.json();

  if (!response.ok) {
    throw new Error("failed to fetch places");
  }

  return resData.places;
}

export async function fetchPosts() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const resData = await response.json();
  if (!response.ok) {
    throw new Error("failed to fetch posts");
  }
  return resData;
}

export async function fetchComments() {
  const response = await fetch("https://jsonplaceholder.typicode.com/comments");
  const resData = await response.json();
  if (!response.ok) {
    throw new Error("failed to fetch comments");
  }
  return resData;
}

export async function fetchUserPlaces() {
  const response = await fetch("http://localhost:3000/user-places");
  const resData = await response.json();

  if (!response.ok) {
    throw new Error("failed to fetch user places");
  }

  return resData.places;
}
export async function updateUserPlaces(places) {
  const response = await fetch("http://localhost:3000/user-places", {
    method: "PUT",
    body: JSON.stringify({ places }),
    headers: { "Content-Type": "application/json" },
  });

  const resData = await response.json();

  if (!response.ok) {
    throw new Error("Failed to update use data.");
  }
  return resData.message;
}
