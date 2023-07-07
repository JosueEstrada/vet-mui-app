import { Box, Button, IconButton, Typography } from "@mui/material";
import { mockTransactions } from "../data/dataMockup";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import EmailIcon from "@mui/icons-material/Email";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import TrafficIcon from "@mui/icons-material/Traffic";
import HeaderTabla from "./HeaderTabla.jsx";
import { MyResponsiveLine } from "./MyResponsiveLine";
import StatBox from "./StatBox";
// import GeographyChart from "../../components/GeographyChart";
// import BarChart from "../../components/BarChart";
import ProgressCircle from "./ProgressCircle";

const PanelesVentas = () => {
  return (
    <Box m="20px">
      {/* HEADER */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <HeaderTabla
          title="DASHBOARD"
          subtitle="Bienvenido, resumenes de venta mensual..."
        />

        <Box>
          <Button
            sx={{
              backgroundColor: "#005904",
              color: "#fcfcfc",
              fontSize: "14px",
              fontWeight: "bold",
              padding: "10px 20px",
            }}
          >
            <DownloadOutlinedIcon sx={{ mr: "10px" }} />
            Descarga Reportes
          </Button>
        </Box>
      </Box>

      {/* GRID & CHARTS */}
      <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="140px"
        gap="20px"
      >
        {/* ROW 1 */}
        <Box
          gridColumn="span 3"
          backgroundColor="darkgrey"
          display="flex"
          alignItems="center"
          justifyContent="center"
          borderRadius="10px"
        >
          <StatBox
            title="1,250"
            subtitle="Correos Enviados"
            progress="0.75"
            increase="+14%"
            icon={<EmailIcon sx={{ color: "#bf1b96", fontSize: "26px" }} />}
          />
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor="darkgrey"
          display="flex"
          alignItems="center"
          justifyContent="center"
          borderRadius="10px"
        >
          <StatBox
            title="200"
            subtitle="Citas Realizadas"
            progress="0.50"
            increase="+21%"
            icon={
              <PointOfSaleIcon sx={{ color: "#bf1b96", fontSize: "26px" }} />
            }
          />
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor="darkgrey"
          display="flex"
          alignItems="center"
          justifyContent="center"
          borderRadius="10px"
        >
          <StatBox
            title="320"
            subtitle="Nuevos Pacientes"
            progress="0.30"
            increase="+5%"
            icon={<PersonAddIcon sx={{ color: "#bf1b96", fontSize: "26px" }} />}
          />
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor="darkgrey"
          display="flex"
          alignItems="center"
          justifyContent="center"
          borderRadius="10px"
        >
          <StatBox
            title="1,325,134"
            subtitle="Delivery de Meds."
            progress="0.80"
            increase="+43%"
            icon={<TrafficIcon sx={{ color: "#bf1b96", fontSize: "26px" }} />}
          />
        </Box>

        {/* ROW 2 */}
        <Box
          gridColumn="span 8"
          gridRow="span 2"
          backgroundColor="darkgrey"
          borderRadius="10px"
        >
          <Box
            mt="25px"
            p="0 30px"
            display="flex "
            justifyContent="space-between"
            alignItems="center"
          >
            <Box>
              <Typography variant="h5" fontWeight="600" color="black">
                Ganancias Estimadas{" "}
              </Typography>
              <Typography variant="h3" fontWeight="bold" color="green">
                S/. 9,342.32
              </Typography>
            </Box>
            <Box>
              <IconButton>
                <DownloadOutlinedIcon
                  sx={{ fontSize: "26px", color: "green" }}
                />
              </IconButton>
            </Box>
          </Box>
          <Box height="250px" m="-20px 0 0 0">
            <MyResponsiveLine isDashboard={true} />
          </Box>
        </Box>
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={"darkgrey"}
          overflow="auto"
          borderRadius="10px"
        >
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            borderBottom={`4px solid black`}
            colors="grey"
            p="15px"
          >
            <Typography color="#fdfdfd" variant="h5" fontWeight="600">
              Transacciones Recientes{" "}
            </Typography>
          </Box>
          {mockTransactions.map((transaction, i) => (
            <Box
              key={`${transaction.txId}-${i}`}
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              borderBottom={`4px solid black`}
              p="15px"
            >
              <Box>
                <Typography color="black" variant="h5" fontWeight="600">
                  {transaction.txId}
                </Typography>
                <Typography color="grey">{transaction.user}</Typography>
              </Box>
              <Box color="darkgrey">{transaction.date}</Box>
              <Box backgroundColor="green" p="5px 10px" borderRadius="4px">
                ${transaction.cost}
              </Box>
            </Box>
          ))}
        </Box>

        {/* ROW 3 */}
        <Box
          gridColumn="span 12"
          gridRow="span 2"
          backgroundColor="darkgrey"
          p="30px"
          borderRadius="10px"
        >
          <Typography variant="h5" fontWeight="600">
            Campaña
          </Typography>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            mt="25px"
          >
            <ProgressCircle size="125" />
            <Typography variant="h5" color={"green"} sx={{ mt: "15px" }}>
              S/. 4,352 ganancia bruta
            </Typography>
            <Typography>Incluyendo pagos e impuestos</Typography>
          </Box>
        </Box>
        {/*<Box gridColumn="span 4" gridRow="span 2" backgroundColor="black">*/}
        {/*  <Typography*/}
        {/*    variant="h5"*/}
        {/*    fontWeight="600"*/}
        {/*    sx={{ padding: "30px 30px 0 30px" }}*/}
        {/*  >*/}
        {/*    Sales Quantity*/}
        {/*  </Typography>*/}
        {/*  <Box height="250px" mt="-20px">*/}
        {/*    /!*<BarChart isDashboard={true} />*!/*/}
        {/*  </Box>*/}
        {/*</Box>*/}
        {/*<Box*/}
        {/*  gridColumn="span 4"*/}
        {/*  gridRow="span 2"*/}
        {/*  backgroundColor="black"*/}
        {/*  padding="30px"*/}
        {/*>*/}
        {/*  <Typography*/}
        {/*    variant="h5"*/}
        {/*    fontWeight="600"*/}
        {/*    sx={{ marginBottom: "15px" }}*/}
        {/*  >*/}
        {/*    Geography Based Traffic*/}
        {/*  </Typography>*/}
        {/*  <Box height="200px">/!*<GeographyChart isDashboard={true} />*!/</Box>*/}
        {/*</Box>*/}
      </Box>
    </Box>
  );
};

export default PanelesVentas;
