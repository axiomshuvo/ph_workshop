import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import Books from "../pages/Books";
import ErrorPage from "../pages/ErrorPage";
import Homepage from "../pages/Homepage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Homepage />,
      },
      {
        path: "/books",
        element: <Books />,
      },
    ],
    errorElement: <ErrorPage />,
  },
]);
