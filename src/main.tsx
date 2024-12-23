// import { StrictMode } from 'react'
import React from "react";
import { createRoot } from "react-dom/client";
import "./index.scss";
import App from "./App.tsx";
import store from "./store/index.ts";
import { Provider } from "react-redux";
import { AuthProvider } from "./contexts/AuthContext.tsx";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <AuthProvider>
          <App />
        </AuthProvider>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
