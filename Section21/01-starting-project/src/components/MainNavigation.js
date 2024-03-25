import { NavLink, useRouteLoaderData, Form } from "react-router-dom";
import classes from "./MainNavigation.module.css";

function MainNavigation() {
  const token = useRouteLoaderData("root");
  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.list}>
          {token && (
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? classes.active : undefined
                }
                end
              >
                Home
              </NavLink>
            </li>
          )}

          {token && (
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive ? classes.active : undefined
                }
              >
                About
              </NavLink>
            </li>
          )}

          {token && (
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive ? classes.active : undefined
                }
              >
                Contact
              </NavLink>
            </li>
          )}

          {token && (
            <li>
              <NavLink
                to="/users"
                className={({ isActive }) =>
                  isActive ? classes.active : undefined
                }
              >
                Users
              </NavLink>
            </li>
          )}

          {!token && (
            <li>
              <NavLink
                to="/auth"
                className={({ isActive }) =>
                  isActive ? classes.active : undefined
                }
              >
                Authentication
              </NavLink>
            </li>
          )}

          {token && (
            <li>
              <Form action="/logout" method="post">
                <button>Logout</button>
              </Form>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
}
export default MainNavigation;
