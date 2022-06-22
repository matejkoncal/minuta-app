import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ApiProvider } from "@reduxjs/toolkit/dist/query/react";
import { smeApi } from "./services/smeApi";
import "./global.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ApiProvider api={smeApi}>
      <App />
    </ApiProvider>
  </React.StrictMode>
);

//@ts-ignore
window.Neutralino.init();
//@ts-ignore
Neutralino.window.move(0, 0).catch(console.log);
