import { NavLink, Form, useRouteLoaderData } from "react-router-dom";
import classes from "./MainNavigation.module.css";
import { action as logoutAction } from "../pages/Logout";

interface MainNavigationProps {
  admin: boolean;
}

const MainNavigation: React.FC<MainNavigationProps> = ({ admin }) => {
  const token: any | null = useRouteLoaderData("root");

  return (
    <nav className={classes.header}>
      <ul className={classes.list}>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? classes.active : undefined
            }
            end
          >
            Accueil
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/Trajets"
            className={({ isActive }) =>
              isActive ? classes.active : undefined
            }
          >
            Trajets
          </NavLink>
        </li>
        {!token && (
          <li>
            <NavLink
              to="/Authentification?mode=login"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              Authentification
            </NavLink>
          </li>
        )}
        {token && (
          <li>
            <Form
              action="/logout"
              method="post"
            >
              Déconnexion
            </Form>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default MainNavigation;
