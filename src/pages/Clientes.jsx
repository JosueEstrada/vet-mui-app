import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { mockDataContacts } from "../data/dataMockup";
import HeaderTabla from "../components/HeaderTabla";

export default function Clientes() {
  //const Contacts = () => {
  const columns = [
    { field: "id", headerName: "ID", flex: 0.5 },
    { field: "registrarId", headerName: "Registrar ID" },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "age",
      headerName: "Age",
      type: "number",
      headerAlign: "left",
      align: "left",
    },
    { field: "phone", headerName: "Phone Number", flex: 1 },
    { field: "email", headerName: "Email", flex: 1 },
    { field: "address", headerName: "adress ", flex: 1 },
    { field: "city", headerName: "City ", flex: 1 },
    { field: "zipCode", headerName: "Zipcode ", flex: 1 },
  ];

  return (
    <>
      <Box>
        {/*<Typography variant="h4" gutterBottom>*/}
        {/*  Lista de Clientes*/}
        {/*</Typography>*/}
        {/*<Typography variant="subtitle1" gutterBottom>*/}
        {/*  Aquí encontrarás información sobre todos nuestros clientes valiosos.*/}
        {/*</Typography>*/}
        <Box m="10px">
          <HeaderTabla
            title="Clientes"
            subtitle="Lista de Clientes para futuras referencias"
          />
          <Box
            m="40px 0 0 0"
            height="75vh"
            sx={{
              "& .MuiDataGrid-root": {
                border: "none",
              },
              "& .MuiDataGrid-cell": {
                borderBottom: "none",
                color: "rgb(9,0,0)",
              },
              "& .name-column--cell": {
                color: "rgb(17,2,2)",
                fontWeight: "700",
              },
              "& .MuiDataGrid-columnHeaders": {
                backgroundColor: "#dc85c0",
              },
              "& .MuiDatGrid-virtualScroller": {
                backgroundColor: "#009d2e",
              },
              "& .MuiDataGrid-footerContainer": {
                borderTop: "none",
                backgroundColor: "rgba(27,44,31,0.26)",
              },
              "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
                color: `${"grey"} !important`,
              },
            }}
          >
            <DataGrid
              rows={mockDataContacts}
              columns={columns}
              components={{ Toolbar: GridToolbar }}
            />
          </Box>
        </Box>
      </Box>
    </>
  );
}
