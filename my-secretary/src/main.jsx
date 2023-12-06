import React from "react";
import ReactDOM from "react-dom/client";

// import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
// import { store } from "../src/redux/store/store.js";

import App from "./App";
import theme from "./theme";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  // <Provider store={store}>
  <ThemeProvider theme={theme}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ThemeProvider>
  // </Provider>
);
