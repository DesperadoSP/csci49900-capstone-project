import React from 'react';
import { Nav, NavLink, NavMenu} from './NavbarElements';
import { Form, FormControl, Button } from "react-bootstrap";
  
const Navbar = () => {
  return (
    <>
      <div className="navBar">
      <Nav>
        <h3 id="logo"> TradeBreath <br/>(Logo Pending) </h3>

          <hr></hr>
       
          <NavMenu id="menu">

            <NavLink id="link" to='/index' activeStyle>
              Home
            </NavLink>
            <NavLink id="link" to='/products' activeStyle>
              Products
            </NavLink>
            <NavLink id="link" to='/about' activeStyle>
              About Us
            </NavLink>

            <Form inline id="searchBar">
              <FormControl type="text" placeholder="Search" id="searchBar"
              />

              <Button id="searchButton">
                Search
              </Button>
            </Form>

          </NavMenu>
      </Nav>
      </div>
    </>
  );
};
  
export default Navbar;