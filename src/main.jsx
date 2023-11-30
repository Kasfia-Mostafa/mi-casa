import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./Routes/Router";
import AuthProviders from "./Layout/AuthProvider/AuthProvider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import { HelmetProvider } from "react-helmet-async";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthProviders>
    <QueryClientProvider client={queryClient}>
  
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  
    </QueryClientProvider>
  </AuthProviders>
);
