import React from 'react';
import { Form, FormControl, Button } from "react-bootstrap";
import { Nav, NavLink, NavMenu} from '../components/Navbar/NavbarElements';
import './products.css';

import Navbar from '../components/Navbar';
  
const Home = () => {
  return (
    <div id='products'>
      <Navbar />
      <div id='list'>
      <div id='products-title'>
        <h1> Products </h1>
      </div>

      <Form inline id="productSearchBar">
        <FormControl type="text" placeholder="Search" id="productSearchBar"/>
        <Button id="productSearchButton">
          Search
        </Button>   
        <FormControl type="text" placeholder="Filter" id="filterSearchBar"/>
        <Button id="productSearchButton">
          Filter
        </Button>   
      </Form>
        
        <ul> 
          <li><NavLink to='/productX' activeStyle> <p>Product X</p> </NavLink></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    </div>
  );
};
  
export default Home;