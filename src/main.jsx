import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Card1 from "./Card1.jsx";
import ColorPalette from "./ColorPalette.jsx";
import Typography from "./Typography.jsx";
import IconComponent from "./IconComponent.jsx";
import SvgGallery from "./SvgGallery.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
    <IconComponent />
    <ColorPalette />
    <Typography />
    <Card1 />

    <SvgGallery />
  </StrictMode>
);
