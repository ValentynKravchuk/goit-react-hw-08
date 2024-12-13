import clsx from "clsx";
import React from "react";
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
          <NavLink className={buildLinkClass}>Home</NavLink>
          <NavLink className={buildLinkClass}>Contacts</NavLink>
        </nav>
      </header>
    </div>
  );
};

export default navigation;
