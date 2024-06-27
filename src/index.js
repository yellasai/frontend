import React from "react";
import ReactDOM from "react-dom";

import App from "./App.js";

import "./index.css";
import ShopContextProvider from "./Context/ShopContext.jsx";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <ShopContextProvider>
    <App />
  </ShopContextProvider>
);
