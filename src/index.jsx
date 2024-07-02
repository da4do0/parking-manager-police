import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import Header from "./components/header/header";
import Segnalazioni from "./pages/segnalazioni/segnalazioni";
import Parcheggi from "./pages/parcheggi/parcheggi";
import Login from "./pages/login/login"; //
import ParkingManager from "./pages/parking-manager-police/parking-manager-police";
import {LoginChecker} from './hooks/login.hook';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Header />,
    children: [
      {
        index: true,
        element:
            <Segnalazioni />,
      },
      {
        path: "/segnalazioni",
        element: 
            <Segnalazioni />,
      },
      {
        path: "/parcheggi",
        element:
            <Parcheggi />,
      },
      {
        path: "/login",
        element:
            <Login />,
      },
      {
        path: "/parking-manager-police",
        element: <ParkingManager />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <LoginChecker>
      <RouterProvider router={router} />
    </LoginChecker>
  </React.StrictMode>
);
