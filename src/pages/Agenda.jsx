import { Box, Grid, Paper } from "@mui/material";

export default function Agenda() {
  return (
    <>
      <Box border={"solid 5px"} borderColor={"violet"}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
            <Paper> Contenido de la celda 1 </Paper>
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
            <Paper> Contenido de la celda 2 </Paper>
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
            <Paper> Contenido de la celda 3 </Paper>
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
            <Paper> Contenido de la celda 4</Paper>
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
            <Paper> Contenido de la celda 5 </Paper>
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
            <Paper> Contenido de la celda 6</Paper>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
