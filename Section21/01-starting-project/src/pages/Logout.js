import { redirect } from "react-router-dom";

export function action() {
  localStorage.removeItem("Token");
  return redirect("/auth");
}
