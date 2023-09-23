import { createBrowserRouter } from "react-router-dom";
import Products from "../pages/Products";
import Basket from "../pages/Basket";
import Layout from "../Layout/Layout";
export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Products />,
      },
      {
        path: "/basket",
        element: <Basket />,
      },
    ],
  },
]);
