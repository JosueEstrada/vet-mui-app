import React from "react";
import { ComponentPreview, Previews } from "@react-buddy/ide-toolbox";
import { PaletteTree } from "./palette";
import App from "../App.jsx";
import { Header } from "../components/layout/Header.jsx";
import About from "../pages/About.jsx";
import { Dashboard } from "../components/layout/Dashboard.jsx";

const ComponentPreviews = () => {
  return (
    <Previews palette={<PaletteTree />}>
      <ComponentPreview path="/App">
        <App />
      </ComponentPreview>
      <ComponentPreview path="/Header">
        <Header />
      </ComponentPreview>
      <ComponentPreview path="/About">
        <About />
      </ComponentPreview>
      <ComponentPreview path="/Dashboard">
        <Dashboard />
      </ComponentPreview>
    </Previews>
  );
};

export default ComponentPreviews;
