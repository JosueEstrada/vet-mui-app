import Box from "@mui/material/Box";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import SidePanel from "./SidePanel.jsx";
import Dashboard from "./Dashboard.jsx";

export default function Layout({ children }) {
  return (
    <>
      <Box
        border={"solid 5px"}
        height={"100vh"}
        width={"100vw"}
        borderColor={"goldenrod"}
      >
        {/*<Header />*/}
        {/*<SidePanel />*/}
        <Dashboard />
        <main>{children}</main>
        {/*<Footer />*/}
      </Box>
    </>
  );
}
