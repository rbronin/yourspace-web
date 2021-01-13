import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import CustomTheme from "./Config/CustomTheme";

ReactDOM.render(
  <React.StrictMode>
    <CustomTheme children={<App />} />
  </React.StrictMode>,
  document.getElementById("root")
);
