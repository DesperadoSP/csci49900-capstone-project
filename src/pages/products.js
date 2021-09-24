import React from 'react';
import { Form, FormControl, Button } from "react-bootstrap";
import './products.css';
  
const Home = () => {
  return (
    <div id='content'>
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
        
      <br></br>
    </div>
  );
};
  
export default Home;