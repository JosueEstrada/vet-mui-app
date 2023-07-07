import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home.jsx";
import Ayuda from "../pages/Ayuda.jsx";
import Estadisticas from "../pages/Estadisticas.jsx";
import Productos from "../pages/Productos.jsx";
import Register from "../pages/Register.jsx";
import Ventas from "../pages/Ventas.jsx";
import Caja from "../pages/Caja.jsx";
import Agenda from "../pages/Agenda.jsx";
import Clientes from "../pages/Clientes.jsx";
import Login from "../pages/Login.jsx";
import Logout from "../pages/Logout.jsx";
import Stock from "../pages/Stock.jsx";
import Configuracion from "../pages/Configuracion.jsx";

export const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/clientes" element={<Clientes />} />
    <Route path="/caja" element={<Caja />} />
    <Route path="/agenda" element={<Agenda />} />
    <Route path="/productos" element={<Productos />} />
    <Route path="/stock" element={<Stock />} />
    <Route path="/ventas" element={<Ventas />} />
    <Route path="/estadisticas" element={<Estadisticas />} />
    <Route path="/configuracion" element={<Configuracion />} />
    <Route path="/ayuda" element={<Ayuda />} />
    <Route path="/acceso" element={<Login />} />
    <Route path="/salir" element={<Logout />} />
    <Route path="/registro" element={<Register />} />
  </Routes>
);
