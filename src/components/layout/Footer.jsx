import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        position: "fixed",
        bottom: 0,
        width: "100%",
        backgroundColor: "#dcdcdc",
      }}
    >
      <Typography variant="body2">
        Copyright © Grupo 8 | 2023. Todos los derechos reservados.{" "}
      </Typography>
    </Box>
  );
}
