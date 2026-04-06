import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";
import App from "./App";
import Home from "./components/Home";
import Root from "./components/Root";
import ConsumerDetails from "./components/route/ConsumerDetails";
import Consumers from "./components/route/Consumers";
import Customers from "./components/route/Customers";
import Spa from "./components/Spa";
import "./index.css";

const consumersPromise = fetch(
  "https://jsonplaceholder.typicode.com/users",
).then((res) => res.json());

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "customers",
        loader: () => fetch("https://jsonplaceholder.typicode.com/users"),
        Component: Customers,
      },
      {
        path: "app",
        element: <App />,
      },
      {
        path: "spa",
        element: <Spa />,
      },

      {
        path: "consumers",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <Consumers consumersPromise={consumersPromise} />
          </Suspense>
        ),
      },
      {
        path: "consumers/:id",
        loader: ({ params }) =>
          fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`),
        element: <ConsumerDetails />,
      },
    ],
  },
  // {
  //   path: "/spa",
  //   element: <div>This is the spa page</div>,
  // },
  // {
  //   path: "app",
  //   Component: App,
  // },
  // {
  //   path: "app2",
  //   element: <App2 />,
  // },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
);
