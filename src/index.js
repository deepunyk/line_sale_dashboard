import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";
import App from "./App";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

ReactDOM.render(
  <React.StrictMode>
    <App />
    <ToastContainer
      hideProgressBar={true}
      style={{ color: "#000000" }}
      autoClose={2500}
    />
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
