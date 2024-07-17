import { RouterProvider } from "react-router-dom";
import ReactDOM from "react-dom/client";

import Router from "./router/Router";
import "../index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={Router} />
);
