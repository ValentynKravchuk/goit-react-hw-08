import { Box, Typography, Container } from "@mui/material";
import image from "../../img/consejos-organizar-agenda-contactos-1200x900.webp";

export const HomePage = () => {
  return (
    <Container
      sx={{
        minHeight: "calc(100vh - 50px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box textAlign="center">
        <Typography
          variant="h1"
          sx={{
            fontWeight: 100,
            fontSize: "2rem",
            mb: 2,
          }}
        >
          Welcome to the Contacts App!
        </Typography>
        <img
          src={image}
          alt="Contactos"
          style={{
            width: "450px",
            justifyContent: "center",
          }}
        />
      </Box>
    </Container>
  );
};
