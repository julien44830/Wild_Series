import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";
import WildSeries from "./components/WildSeries";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/wild-series",
    element: <WildSeries />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
