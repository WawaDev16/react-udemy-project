import { useEffect } from "react";
import { fetchPosts } from "./assets/http";

function App() {
  useEffect(() => {
    async function apiFetchPost() {
      try {
        const posts = await fetchPosts();
        console.log(posts);
      } catch (error) {
        console.log(error);
      }
    }
    apiFetchPost();
  }, []);

  return <h1> Hello World </h1>;
}

export default App;
