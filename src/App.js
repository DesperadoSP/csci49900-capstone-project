import 'devextreme/dist/css/dx.common.css';
import 'devextreme/dist/css/dx.light.css';
import React from 'react'
import './App.css';
/* import Navbar from './components/Navbar'; */
import Footer from './components/Footer';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages'
import Products from './pages/products';
import About from './pages/about';
import ProductX from './pages/productX';
import {Redirect} from 'react-router-dom';

/* <Navbar /> */

function App() {
  return (
    
    <Router>
      <Redirect to='/index' exact component={Home}/>

        <Switch>
          <Route path='/index' exact component={Home} />
          <Route path='/products' exact component={Products} />
          <Route path='/productX' exact component={ProductX} />
          <Route path='/about' exact component={About} />
        </Switch>
        <Footer />
    </Router>
    
  );
}

export default App;
