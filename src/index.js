import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { StateProvider } from "./Provider";
import reducer, { initialState } from "./reducer";
import { BrowserRouter } from "react-router-dom";
import { Elements } from "@stripe/react-stripe-js";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <StateProvider initialState={initialState} reducer={reducer}>
      <App />
    </StateProvider>
  </BrowserRouter>
);
