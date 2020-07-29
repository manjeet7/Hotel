import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { render } from "react-dom";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { RoomProvider } from "./Context";

render(
  <RoomProvider>
    <Router>
      <App />
    </Router>
  </RoomProvider>,
  document.getElementById("root")
);
