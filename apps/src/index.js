import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter, RouterProvider } from "react-router-dom";
import { router } from "./routes";
import BasketProvider from "./context/BasketContext";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ChakraProvider>
    <BasketProvider>
      <RouterProvider router={router} />
    </BasketProvider>
  </ChakraProvider>
);
