import clsx from "clsx";
import { NavLink } from "react-router-dom";
import s from "./Navigation.module.css";
import { useDispatch, useSelector } from "react-redux";
import { selectIsLoggedIn, selectUser } from "../../redux/auth/selectors";
import { logout } from "../../redux/auth/operations";
const buildLinkClass = ({ isActive }) => {
  return clsx(s.link, isActive && s.active);
};
const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const user = useSelector(selectUser);

  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <header>
      <nav className={s.nav}>
        <NavLink to="/" className={buildLinkClass}>
          Home
        </NavLink>
        {isLoggedIn && (
          <NavLink to="/contacts" className={buildLinkClass}>
            Contacts
          </NavLink>
        )}

        {!isLoggedIn && (
          <>
            <NavLink to="/register" className={buildLinkClass}>
              Register
            </NavLink>
            <NavLink to="/login" className={buildLinkClass}>
              Login
            </NavLink>{" "}
          </>
        )}
        {isLoggedIn && (
          <div className={s.container}>
            <p className={s.name}>Welcome,{user.name}!</p>
            <button onClick={handleLogout}>Logout</button>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navigation;
