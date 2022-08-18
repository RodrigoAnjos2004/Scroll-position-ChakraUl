import { ChakraProvider } from "@chakra-ui/react";
import * as React from "react";
import { render } from "react-dom";
import App from "./App";
import theme from "./theme";
import "./styles.css";

const rootElement = document.getElementById("root");
render(
  <ChakraProvider theme={theme}>
    <App />
  </ChakraProvider>,
  rootElement
);
