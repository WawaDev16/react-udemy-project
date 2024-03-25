export async function fetchPosts() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const resData = await response.json();
  if (!response.ok) {
    throw new Error("failed to fetch posts");
  }
  return resData;
}
