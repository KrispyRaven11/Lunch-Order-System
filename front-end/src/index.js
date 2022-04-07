import React from "react";
import ReactDOM from "react-dom";
// import App from "./App";
import Registration from "./Registration";
import Login from "./Login";
import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.render(
  <React.StrictMode>
    <Registration />
    {/* <Login /> */}
  </React.StrictMode>,
  document.getElementById("root")
);
