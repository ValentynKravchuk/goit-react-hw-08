import { NavLink } from "react-router-dom";
import { Button, Box } from "@mui/material";

const AuthNav = () => {
  return (
    <Box
      display="flex"
      gap={2}
      sx={{ flexDirection: { xs: "column", sm: "row" } }}
    >
      <Button
        component={NavLink}
        to="/register"
        variant="outlined"
        color="primary"
        sx={{
          "&.active": {
            backgroundColor: "#1976d2",
          },
          "&:hover": {
            backgroundColor: "#1565c0",
            color: "white",
          },
        }}
        aria-label="Go to register page"
      >
        Register
      </Button>
      <Button
        component={NavLink}
        to="/login"
        variant="outlined"
        color="primary"
        sx={{
          "&.active": {
            backgroundColor: "#1976d2",
          },
          "&:hover": {
            backgroundColor: "#1565c0",
            color: "white",
          },
        }}
        aria-label="Go to login page"
      >
        Login
      </Button>
    </Box>
  );
};

export default AuthNav;
