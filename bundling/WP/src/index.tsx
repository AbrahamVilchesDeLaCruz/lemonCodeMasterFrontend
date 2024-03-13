import React from "react";
import { createRoot } from "react-dom/client";
import logo from "./content/logo.png";
import classes from "./styles.scss";

const root = createRoot(document.getElementById("root"));
root.render(
  <div>
    <h1 className={classes.holaMundo}>hola mundo</h1>
    <img src={logo} style={{ width: 150 }} />
  </div>
);
