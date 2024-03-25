import { redirect } from "react-router-dom";

export function getAuthToken() {
  const token = localStorage.getItem("Token");
  return token;
}

export function tokenLoader() {
  return getAuthToken();
}

export function checkAuthLoader() {
  const token = getAuthToken();

  if (!token) {
    return redirect("/auth");
  }
  return token;
}

export function authLoader() {
  const token = getAuthToken();

  if (token) {
    return redirect("/home");
  }
  return null;
}
