import { Box, Typography } from "@mui/material";

export default function Stock() {
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
            Panel de Stock de Vacunas
          </Typography>
          <Typography align={"left"} variant="h5" color={"#110606"}>
            Verificación del Stock de Inventario{" "}
          </Typography>
          <img
            src={"https://placehold.co/600x400"}
            style={{ border: "solid 1px" }}
            alt="placeholder"
          />
        </Box>
      </Box>
    </>
  );
}
