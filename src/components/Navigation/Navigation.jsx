import clsx from "clsx";
import { NavLink } from "react-router-dom";
import s from "./Navigation.module.css";

const buildLinkClass = ({ isActive }) => {
  return clsx(s.link, isActive && s.active);
};
const navigation = () => {
  return (
    <div>
      <header>
        <nav className={s.nav}>
          <NavLink to="/" className={buildLinkClass}>
            Home
          </NavLink>
          <NavLink to="/contacts" className={buildLinkClass}>
            Contacts
          </NavLink>
          <NavLink to="/register" className={buildLinkClass}>
            Register
          </NavLink>
          <NavLink to="/login" className={buildLinkClass}>
            Login
          </NavLink>
        </nav>
      </header>
    </div>
  );
};

export default navigation;
