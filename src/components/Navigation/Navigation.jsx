import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import { AppBar, Toolbar, Button, Box } from "@mui/material";

const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <AppBar position="static" color="primary">
      <Toolbar>
        <Box sx={{ flexGrow: 1, display: "flex", gap: "16px" }}>
          <Button
            component={NavLink}
            to="/"
            color="inherit"
            sx={{
              "&.active": { backgroundColor: "#1976d2", color: "white" },
              "&:hover": { backgroundColor: "#1565c0" },
            }}
            aria-label="Go to home page"
          >
            Home
          </Button>
          {isLoggedIn && (
            <Button
              component={NavLink}
              to="/contacts"
              color="inherit"
              sx={{
                "&.active": { backgroundColor: "#1976d2", color: "white" },
                "&:hover": { backgroundColor: "#1565c0" },
              }}
              aria-label="Go to contacts page"
            >
              Contacts
            </Button>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navigation;
