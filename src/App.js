import logo from './logo.svg';
import React from 'react'
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages'
import Products from './pages/products';
import About from './pages/about';


function App() {
  return (
    <Router>
      <Navbar />
        <Switch>
          <Route path='/index' exact component={Home} />
          <Route path='/products' exact component={Products} />
          <Route path='/about' exact component={About} />
        </Switch>
    </Router>


    /*
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>

    */
  );
}

export default App;
