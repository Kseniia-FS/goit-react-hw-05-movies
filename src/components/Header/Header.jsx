import { NavLink } from "react-router-dom";

import s from "./Header.module.css";
const Header = () => {
  return (
    <nav className={s.header}>
      <NavLink
        to={{
          pathname: "/",
          state: {
            from: "/",
          },
        }}
        exact
        className={s.headerItem}
        activeClassName={s.active}
      >
        Home
      </NavLink>
      <NavLink
        to={{
          pathname: "/movies",
          state: {
            from: "/movies",
          },
        }}
        className={s.headerItem}
        activeClassName={s.active}
      >
        Movie
      </NavLink>
    </nav>
  );
};

export default Header;
