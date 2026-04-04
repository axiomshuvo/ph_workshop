import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";
import App from "./App";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello from react router</div>,
  },
  {
    path: "/spa",
    element: <div>This is the spa page</div>,
  },
  {
    path: "app",
    Component: App,
  },
  {
    path: "app2",
    element: <App />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </StrictMode>,
);
