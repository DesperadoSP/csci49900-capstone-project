import React from 'react';
import { Form, FormControl, Button } from "react-bootstrap";
import './products.css';
  
const Home = () => {
  return (
    <div>
      <div className = "Title"><h1 className = "Title">Products</h1></div>
      <Form inline id="productSearchBar">
        <FormControl type="text" placeholder="Search" id="productSearchBar"/>
        <FormControl type="text" placeholder="Filter" id="filterSearchBar"/>
        <Button id="productSearchButton">
          Search
        </Button>   
      </Form>
        
    </div>
  );
};
  
export default Home;