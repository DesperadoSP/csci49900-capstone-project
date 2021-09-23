import React from 'react';
import background from './bg.gif';
import { Nav, NavLink, NavMenu} from './NavbarElements';
import { Form, FormControl, Button } from "react-bootstrap";
import Logo from './TradeBreath.png';
  
const Navbar = () => {
  return (
    <>
      <div className="navBar-div">

      <Nav id ="navBar"
        style={{ 
          backgroundImage: `url(${background})`,
          backgroundCover: `cover`,
          height: '90px',
          backgroundRepeat: 'no-repeat',
          backgroundSize: '1920px 110px',
          backgroundColor: '#000'
        }}
      >
          <img id="logo" src={Logo} />
         
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