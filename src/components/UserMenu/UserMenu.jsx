import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../redux/auth/selectors";
import { logout } from "../../redux/auth/operations";
import { Button, Typography, Box } from "@mui/material";
import s from "./UserMenu.module.css";

const UserMenu = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  if (!user) {
    return null;
  }

  return (
    <Box className={s.container}>
      <Typography variant="subtitle1" className={s.welcomeText}>
        Welcome, {user.name}!
      </Typography>
      <Button className={s.button} variant="contained" onClick={handleLogout}>
        Logout
      </Button>
    </Box>
  );
};

export default UserMenu;
