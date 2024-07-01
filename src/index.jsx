import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom";
import Header from "./components/header/header";
import Segnalazioni from "./pages/segnalazioni/segnalazioni";
import Parcheggi from "./pages/parcheggi/parcheggi";
import Login from "./pages/login/login"; //
import { LoginChecker, useLoginChecker, useLoginCk} from './hooks/login.hook';

const ProtectedRoute = ({ children }) => {
  const {matricola} = useLoginCk();
  if (matricola) {
    return <Navigate to="/login" />;
  }
  return children;
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Header />,
    children: [
      { index: true, element: <ProtectedRoute><Segnalazioni /></ProtectedRoute> },
      {
        path: "/segnalazioni",
        element: <ProtectedRoute><Segnalazioni /></ProtectedRoute>,
      },
      {
        path: "/parcheggi",
        element: <ProtectedRoute><Parcheggi /></ProtectedRoute>,
      },
      {
        path: "/login",
        element: <LoginChecker><Login /></LoginChecker>,
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
