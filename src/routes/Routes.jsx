import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import BookDetails from "../pages/BookDetails";
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
      {
        path: "/bookdetails/:bookId",
        element: <BookDetails />,
        loader: () => fetch("../../src/data/booksData.json"),
      },
    ],
    errorElement: <ErrorPage />,
  },
]);
