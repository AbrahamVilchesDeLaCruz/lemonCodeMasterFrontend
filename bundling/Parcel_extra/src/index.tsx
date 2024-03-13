import { createRoot } from "react-dom/client";
import { HolaComponent } from "./hola.component.js";
import { LogoComponent } from "logo.component.js";

const root = createRoot(document.getElementById("root"));
root.render(
  <div>
    <HolaComponent />
    <LogoComponent/>
  </div>
);
