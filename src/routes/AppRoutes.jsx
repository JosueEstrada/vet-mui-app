import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home.jsx";
import About from "../pages/About.jsx";
import Estadisticas from "../pages/Estadisticas.jsx";
import Productos from "../pages/Productos.jsx";
import Register from "../pages/Register.jsx";
import Ventas from "../pages/Ventas.jsx";
import Caja from "../pages/Caja.jsx";
import Agenda from "../pages/Agenda.jsx";
import Clientes from "../pages/Clientes.jsx";
import Login from "../pages/Login.jsx";
import Logout from "../pages/Logout.jsx";

export const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/nosotros" element={<About />} />
    <Route path="/agenda" element={<Agenda />} />
    <Route path="/caja" element={<Caja />} />
    <Route path="/clientes" element={<Clientes />} />
    <Route path="/estadisticas" element={<Estadisticas />} />
    <Route path="/acceso" element={<Login />} />
    <Route path="/salir" element={<Logout />} />
    <Route path="/productos" element={<Productos />} />
    <Route path="/registro" element={<Register />} />
    <Route path="/ventas" element={<Ventas />} />
  </Routes>
);
