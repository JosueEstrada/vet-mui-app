import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { useState } from "react";
import PetsIcon from "@mui/icons-material/Pets";
import ContainerSearch from "../ContainerSearch.jsx";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import QueryStatsIcon from "@mui/icons-material/QueryStats";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import PersonSearchIcon from "@mui/icons-material/PersonSearch";
import DangerousIcon from "@mui/icons-material/Dangerous";
import InventoryIcon from "@mui/icons-material/Inventory";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import ShopIcon from "@mui/icons-material/Shop";
import HomeIcon from "@mui/icons-material/Home";
import HelpIcon from "@mui/icons-material/Help";
import { Link, Route, Routes } from "react-router-dom";
import Footer from "./Footer.jsx";
import Clientes from "../../pages/Clientes.jsx";
import { AppRoutes } from "../../routes/AppRoutes.jsx";

const drawerWidth = 240;

const MainStyled = styled("main", {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
  transition: theme.transitions.create("margin", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginLeft: `-${drawerWidth}px`,
  ...(open && {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  }),
}));

export const Main = ({ open, children }) => (
  <MainStyled open={open}>
    <DrawerHeader />
    {children}
  </MainStyled>
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));
const items = [
  {
    name: "Clientes",
    icon: <PersonSearchIcon />,
    link: "clientes",
  },
  {
    name: "Caja",
    icon: <PointOfSaleIcon />,
    link: "/caja",
  },
  {
    name: "Agenda",
    icon: <CalendarMonthIcon />,
    link: "/agenda",
  },
  {
    name: "Productos",
    icon: <ShopIcon />,
    link: "/productos",
  },
  {
    name: "Stock",
    icon: <InventoryIcon />,
    link: "/stock",
  },
  {
    name: "Ventas",
    icon: <MonetizationOnIcon />,
    link: "/ventas",
  },
];
const items2 = [
  {
    name: "Estadísticas",
    icon: <QueryStatsIcon />,
    link: "/estadisticas",
  },
  {
    name: "Mi cuenta",
    icon: <AccountCircleIcon />,
    link: "/configuracion",
  },
  {
    name: "Ayuda",
    icon: <HelpIcon />,
    link: "/ayuda",
  },
  {
    name: "Salir",
    icon: <DangerousIcon />,
    link: "/salir",
  },
];

export default function Layout2() {
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState("");

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  // Función para cambiar el color del item seleccionado
  const getStyle = (itemName, theme) => {
    if (itemName === selectedItem) {
      return {
        bgcolor: theme.palette.primary.light,
        color: "#000000",
        border: "3px solid #000000",
        ".MuiListItemIcon-root": {
          color: "#000000",
        },
        ".MuiTypography-root": {
          fontWeight: 700,
        },
      };
    } else {
      return {
        bgcolor: "inherit",
        // color: "inherit",
        ".MuiListItemIcon-root": {
          // color: "inherit",
        },
      };
    }
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: "none" }) }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component={Link}
            to={"/"}
            color="inherit"
            fontWeight="bold"
            sx={{
              flexGrow: 1,
              display: { xs: "none", sm: "flex" },
              alignItems: "center",
              // justifyContent: "center",
            }}
          >
            <PetsIcon sx={{ mr: 1 }} />
            FISIVET
          </Typography>
          <ContainerSearch />
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
            bgcolor: "#dcdcdc",
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <ListItemButton component={Link} to={"/"}>
            <ListItemIcon>{<HomeIcon />}</ListItemIcon>
            <ListItemText primary={"Inicio"} />
          </ListItemButton>
          <IconButton
            onClick={handleDrawerClose}
            sx={{ "&:hover": { border: "solid" } }}
          >
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {items.map((item) => (
            <ListItem
              key={item.name}
              disablePadding
              className="list-item-drawer"
            >
              <ListItemButton
                component={Link}
                to={item.link}
                onClick={() => setSelectedItem(item.name)}
                sx={(theme) => getStyle(item.name, theme)}
              >
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={<Typography>{item.name}</Typography>} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {items2.map((item) => (
            <ListItem
              key={item.name}
              disablePadding
              className="list-item-drawer"
            >
              <ListItemButton
                component={Link}
                to={item.link}
                onClick={() => setSelectedItem(item.name)}
                sx={(theme) => getStyle(item.name, theme)}
              >
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.name} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Main open={open}>
        {/*<Routes>*/}
        {/*  <Route path="/clientes" element={<Clientes />} />*/}
        {/*</Routes>*/}
        <AppRoutes />
        <Footer />
      </Main>
    </Box>
  );
}
