import { Box, Grid, Paper } from "@mui/material";
import { Link } from "react-router-dom";
import HelpIcon from "@mui/icons-material/Help";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import QueryStatsIcon from "@mui/icons-material/QueryStats";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import PersonSearchIcon from "@mui/icons-material/PersonSearch";
import InventoryIcon from "@mui/icons-material/Inventory";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import ShopIcon from "@mui/icons-material/Shop";

export default function Home() {
  return (
    <>
      <Box>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <Link to="/clientes">
              <Paper
                sx={{
                  height: 100,
                  width: 300,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: "#2cd4d7 ",
                  color: "#fcfcfc",
                  fontSize: "1.5rem",
                }}
              >
                <PersonSearchIcon sx={{ marginRight: 2 }} />
                Clientes
              </Paper>
            </Link>
          </Grid>
          <Grid item xs={12} md={6}>
            <Link to="/caja">
              <Paper
                sx={{
                  height: 100,
                  width: 300,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: "#ed8517",
                  color: "#fcfcfc",
                  fontSize: "1.5rem",
                }}
              >
                <PointOfSaleIcon sx={{ marginRight: 2 }} />
                Caja
              </Paper>
            </Link>
          </Grid>
          <Grid item xs={12} md={6}>
            <Link to="/agenda">
              <Paper
                sx={{
                  height: 100,
                  width: 300,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: "#b34dd3",
                  color: "#fcfcfc",
                  fontSize: "1.5rem",
                }}
              >
                <CalendarMonthIcon sx={{ marginRight: 2 }} />
                Agenda
              </Paper>
            </Link>
          </Grid>
          <Grid item xs={12} md={6}>
            <Link to="/productos">
              <Paper
                sx={{
                  height: 100,
                  width: 300,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: "#1fa3cf",
                  color: "#fcfcfc",
                  fontSize: "1.5rem",
                }}
              >
                <ShopIcon sx={{ marginRight: 2 }} />
                Productos
              </Paper>
            </Link>
          </Grid>
          <Grid item xs={12} md={6}>
            <Link to="/stock">
              <Paper
                sx={{
                  height: 100,
                  width: 300,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: "#cea400",
                  color: "#fcfcfc",
                  fontSize: "1.5rem",
                }}
              >
                <InventoryIcon sx={{ marginRight: 2 }} />
                Stock
              </Paper>
            </Link>
          </Grid>
          <Grid item xs={12} md={6}>
            <Link to="/ventas">
              <Paper
                sx={{
                  height: 100,
                  width: 300,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: "#f33636",
                  color: "#fcfcfc",
                  fontSize: "1.5rem",
                }}
              >
                <MonetizationOnIcon sx={{ marginRight: 2 }} />
                Ventas
              </Paper>
            </Link>
          </Grid>
          <Grid item xs={12} md={6}>
            <Link to="/estadisticas">
              <Paper
                sx={{
                  height: 100,
                  width: 300,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: "#f46db1 ",
                  color: "#fcfcfc",
                  fontSize: "1.5rem",
                }}
              >
                <QueryStatsIcon sx={{ marginRight: 2 }} />
                Estadisticas
              </Paper>
            </Link>
          </Grid>
          <Grid item xs={12} md={6}>
            <Link to="/configuracion">
              <Paper
                sx={{
                  height: 100,
                  width: 300,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: " #6b7078 ",
                  color: "#fcfcfc",
                  fontSize: "1.5rem",
                }}
              >
                <HelpIcon sx={{ marginRight: 2 }} />
                Configuracion
              </Paper>
            </Link>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
