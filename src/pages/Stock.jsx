import { Box, Typography } from "@mui/material";

export default function Stock() {
  return (
    <>
      <Box border={"solid 5px"} borderColor={"violet"}>
        <Box mb="20px">
          <Typography
            variant="h3"
            color={"grey"}
            fontWeight="bold"
            sx={{ mb: "5px" }}
          >
            Panel de Stock
          </Typography>
          <Typography align={"left"} variant="h5" color={"#110606"}>
            Verificación del Stock de Inventario{" "}
          </Typography>
        </Box>
      </Box>
    </>
  );
}
