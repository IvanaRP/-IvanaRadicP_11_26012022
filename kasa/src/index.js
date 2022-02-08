import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Locations from "./pages/Locations";
import Error from "./pages/Error";

import "./styles/index.css";

import data from "../src/datas/data.json";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>

        <Route
          exact
          path="/:idLocation"
          render={({ match }) => {
            const location = data.find(
              (location) => location.id === match.params.idLocation
            );

            if (!location) {
              return <Error />;
            }
            return <Locations />;
          }}
        />

        <Route component={Error}></Route>

      </Switch>
      <Footer />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
