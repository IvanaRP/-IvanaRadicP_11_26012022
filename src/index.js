import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Route_Home, Route_About, Route_Location} from "./utils/router"

import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Locations from "./pages/Locations";
import Error from "./components/Error";

import "./styles/index.css";

import data from "../src/datas/data.json";


ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Switch>
        <Route exact path={Route_Home}>
          <Home />
        </Route>
        <Route exact path={Route_About}>
          <About />
        </Route>
        <Route
          exact
          path={Route_Location}
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


