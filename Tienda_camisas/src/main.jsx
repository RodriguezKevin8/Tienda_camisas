import React from "react";
import ReactDOM from "react-dom/client";
//import App from "./App.jsx";
//import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Hola from "./components/Hola.jsx";
import Dos from "./components/Dos.jsx";
import Tres from "./components/Tres.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Hola />,
  },
  {
    path: "/2",
    element: <Dos />,
  },
  {
    path: "/3",
    element: <Tres />,
  }
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
