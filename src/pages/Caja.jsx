import { Box, Typography } from "@mui/material";
import Orders from "../components/Orders.jsx";
import Chart from "../components/Chart.jsx";

export default function Caja() {
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
            Servicios de Caja
          </Typography>
          <Typography align={"left"} variant="h5" color={"#110606"}>
            Administración y Servicios de Caja
          </Typography>
          <Orders />
          <Box sx={{ padding: 3, height: "200px" }}>
            <Chart />
          </Box>
        </Box>
      </Box>
    </>
  );
}
