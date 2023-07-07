import { Box, Typography } from "@mui/material";

export default function Productos() {
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
            Productos
          </Typography>
          <Typography align={"left"} variant="h5" color={"#110606"}>
            Panel de Administración de Productos
          </Typography>
        </Box>
      </Box>
    </>
  );
}
