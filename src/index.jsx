import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Header from "./components/header/header";
import Segnalazioni from "./pages/segnalazioni/segnalazioni";
import Parcheggi from "./pages/parcheggi/parcheggi";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Header />,
    children: [
      { index: true, element: <Segnalazioni /> },
      {
        path: "/segnalazioni",
        element: <Segnalazioni />,
      },
      /* {
        path: "/zona",
        element: <Zona />,
      }, */
      {
        path: "/parcheggi",
        element: <Parcheggi/>,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
