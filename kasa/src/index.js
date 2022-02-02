import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Locations from './pages/Locations'
import Error from './pages/Error'

import './styles/index.css'

ReactDOM.render(  
    <React.StrictMode>
      <Router>     
      <Header />
        <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/location/:idLocation">
          <Locations />
        </Route>
        <Route path='*'>
        <Error/>
      </Route>
      </Switch>
      <Footer />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);