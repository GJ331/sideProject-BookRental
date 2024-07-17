import { RouterProvider } from "react-router-dom";
import ReactDOM from "react-dom/client";

import Router from "./router/Router";
import "./i18n/i18n";
import "../index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={Router} />
);
