import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Box, Button, Container, Typography } from "@mui/material";
import imgLogout from "../assets/img/logout.png";

export default function Logout() {
  const [counter, setCounter] = useState(10);
  const navigate = useNavigate();

  useEffect(() => {
    if (counter > 0) {
      setTimeout(() => setCounter(counter - 1), 1000);
    } else {
      // Redirige al inicio
      navigate("/");
    }
  }, [counter, navigate]);

  return (
    <Container component="main" maxWidth="sm">
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          mt: 2,
          boxShadow: 3,
          borderRadius: 2,
          px: 4,
          py: 6,
          width: "100%",
        }}
      >
        <Typography
          variant="h2"
          component="h1"
          gutterBottom
          align="center"
          sx={{ fontWeight: "bold" }}
          color="grey"
        >
          ¡Hasta pronto!
        </Typography>
        <img
          src={imgLogout}
          width={150}
          alt={"Imagen de Aviso de Cierre de Sesión"}
        />

        <Typography variant="h4" component="h2" align="center">
          Cerrando sesión en {counter}
        </Typography>
        <Box component="div" sx={{ mt: 1 }}>
          <Button
            type="button"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2, p: 2 }}
            onClick={() => navigate("/")}
          >
            <Typography variant="h6">Volver al Inicio</Typography>
          </Button>
          <Button
            type="button"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2, p: 2 }}
            onClick={() => navigate("/acceso")}
          >
            <Typography variant="h6">Iniciar Sesión...</Typography>
          </Button>
        </Box>
      </Box>
    </Container>
  );
}
