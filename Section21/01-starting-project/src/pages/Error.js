import MainNavigation from "../components/MainNavigation";
import { useNavigate } from "react-router-dom";

function ErrorPage() {
  const button = useNavigate();

  function buttonHandler() {
    button("/");
  }
  return (
    <>
      <MainNavigation />
      <main>
        <h1> An error occurred!</h1>
        <p> Could not find this page!</p>
        <button onClick={buttonHandler}>BACK TO HOME PAGE</button>
      </main>
    </>
  );
}

export default ErrorPage;
