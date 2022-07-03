import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./App";
import { UserProvider } from "./contexts/User.context";
import { CategoriesContext } from "./contexts/Categories.context";
import { CartProvider } from "./contexts/Cart.context";

import "./index.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <CategoriesContext>
          <CartProvider>
            <App />
          </CartProvider>
        </CategoriesContext>
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
);
