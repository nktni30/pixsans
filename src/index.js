import React from "react";
import ReactDOM from "react-dom";
import "./assets/css/theme.css";
import 'mdb-react-ui-kit/dist/css/mdb.min.css'
import App from "./App";
import { BrowserRouter } from "react-router-dom";


ReactDOM.render(
  <BrowserRouter>
     <App/>
  </BrowserRouter>,
  document.getElementById("root")
);