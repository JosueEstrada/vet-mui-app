import { Box, Typography } from "@mui/material";

export default function Caja() {
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
            Servicios de Caja
          </Typography>
          <Typography align={"left"} variant="h5" color={"#110606"}>
            Administración y Servicios de Caja
          </Typography>
        </Box>
      </Box>
    </>
  );
}
