import classes from "./AuthForm.module.css";
import { useState } from "react";
import account from "../account";

function AuthForm() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  function loginHandler() {
    if (user.email === account.email && user.password === account.password) {
      window.location.assign("/");
      localStorage.setItem("Token", true);
    } else {
      alert("not login");
    }
  }

  return (
    <>
      <div className={classes.form}>
        <p>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            value={user.email}
            onChange={(e) =>
              setUser((prev) => ({ ...prev, email: e.target.value }))
            }
            required
          />
        </p>
        <p>
          <label htmlFor="image">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            required
            value={user.password}
            onChange={(e) =>
              setUser((prev) => ({ ...prev, password: e.target.value }))
            }
          />
        </p>
        <div className={classes.actions}>
          <button onClick={loginHandler}>Login</button>
        </div>
      </div>
    </>
  );
}

export default AuthForm;
