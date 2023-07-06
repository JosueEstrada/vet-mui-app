import React from "react";
import { ComponentPreview, Previews } from "@react-buddy/ide-toolbox";
import { PaletteTree } from "./palette";
import App from "../App.jsx";
import { Header } from "../components/layout/Header.jsx";

const ComponentPreviews = () => {
  return (
    <Previews palette={<PaletteTree />}>
      <ComponentPreview path="/App">
        <App />
      </ComponentPreview>
      <ComponentPreview path="/Header">
        <Header />
      </ComponentPreview>
    </Previews>
  );
};

export default ComponentPreviews;
