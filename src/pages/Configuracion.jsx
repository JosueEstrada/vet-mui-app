import { Box, Typography } from "@mui/material";
import Formulario from "../components/Formulario.jsx";

export default function Configuracion() {
  return (
    <>
      <Box>
        <Box mb="20px">
          <Typography
            variant="h3"
            color={"grey"}
            fontWeight="bold"
            sx={{ mb: "5px" }}
          >
            Configuración del Usuario
          </Typography>
          <Typography
            align={"left"}
            variant="h5"
            color={"#110606"}
            marginLeft={3}
          >
            Agregar nuevos usuarios con Roles
          </Typography>
        </Box>
        <Formulario />
      </Box>
    </>
  );
}
