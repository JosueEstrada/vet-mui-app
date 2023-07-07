import { Box, Grid, Paper } from "@mui/material";
import { MyResponsiveBar } from "../components/MyResponsiveBar.jsx";
import { MyResponsivePie } from "../components/MyResponsivePie.jsx";
import { MyResponsiveMarimekko } from "../components/MyResponsiveMarimekko.jsx";
import { MyResponsiveLine } from "../components/MyResponsiveLine.jsx";
import { MyResponsiveCalendar } from "../components/MyResponsiveCalendar.jsx";
import { MyResponsiveWaffle } from "../components/MyResponsiveWaffle.jsx";

export default function Estadisticas() {
  return (
    <>
      <Box sx={{ display: "flex", height: "100%" }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
            <Paper sx={{ height: "350px" }}>
              <MyResponsiveBar />
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
            <Paper sx={{ height: "350px" }}>
              <MyResponsivePie />
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
            <Paper sx={{ height: "350px" }}>
              <MyResponsiveMarimekko />
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
            <Paper sx={{ height: "350px" }}>
              <MyResponsiveLine />
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
            <Paper sx={{ height: "350px" }}>
              <MyResponsiveCalendar />
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
            <Paper sx={{ height: "350px" }}>
              <MyResponsiveWaffle />
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
