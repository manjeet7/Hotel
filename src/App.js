import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Room from "./pages/Room";
import SingleRoom from "./pages/SingleRoom";
import Error from "./pages/Error";
import Navbar from "./Components/Navbar";
// import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="container-fluid">
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/Room" component={Room} />
        <Route exact path="/rooms/:slug" component={SingleRoom} />
      </Switch>
    </div>
  );
}

export default App;
