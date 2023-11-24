import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./Routes/Router";
import AuthProviders from "./Layout/AuthProvider/AuthProvider";
// import { HelmetProvider } from "react-helmet-async";

ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthProviders>
    {/* <HelmetProvider> */}
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
    {/* </HelmetProvider> */}
  </AuthProviders>
);
