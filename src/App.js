import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';

import Home from './pages/Home.js';
import About from './pages/About.js';
import Help from './pages/Help.js';
import Navbar from './components/Navbar.js';
import Jumbotron from './components/Jumbotron.js';
import Footer from './components/Footer.js';


class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <Jumbotron title="Welcome Kibaru" subtitle="Reactjs is fun" />
          <Route exact path="/" component={Home}/>
          <Route path="/about" component={About}/>
          <Route path="/help" component={Help}/>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
