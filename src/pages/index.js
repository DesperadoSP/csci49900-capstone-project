import React from 'react';
import Whirligig from 'react-whirligig'
import placeholder from './placeholder.png';
import placeholder2 from './placeholder-wide.png';
import './index.css'
import background from './Sky.jpg';

import Navbar from '../components/Navbar';
import { Nav, NavLink, NavMenu} from '../components/Navbar/NavbarElements';
import { Form, FormControl, Button } from "react-bootstrap";
import Chart from '../components/Charts/index';
import Logo from '../components/Navbar/TradeBreath.gif';

  
const Home = () => {
  let whirligig
  const next = () => whirligig.next()
  const prev = () => whirligig.prev()

  return (
    <div id='content'>

      <div id='background'
      style={{ 
        backgroundImage: `url(${background})`,
        backgroundCover: `cover`,
        backgroundSize: '100% 100%',
        backgroundAttachment: 'fixed',
        backgroundRepeat: 'no-repeat',
        backgroundColor: '#000'
      }}>

        <div className="navBar-div">
          <Nav id ="navBar"
            style={{ 
            height: '90px',
            paddingTop: '0.5%',
            paddingBottom: '0.5%'
          }}
        >
          <img id="logo" src={Logo} />
 
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
        
        <div id='statement-and-articles'>
          <div id='statement'>
            <h1>Our mission is to let <br/> you invest safely</h1>
          </div>

          <hr></hr>

          <div id='article-title'>
            <h1>Top News Articles</h1>
          </div>

          <div id='newsArticles'>
            <Whirligig id ='slider'
              visibleSlides={3}
              gutter="1em"
              ref={(_whirligigInstance) => { whirligig = _whirligigInstance}}
            >
              <img id="images" src={placeholder} />
              <img id="images" src={placeholder} />
              <img id="images" src={placeholder} />
              <img id="images" src={placeholder} />
              <img id="images" src={placeholder} />
              <img id="images" src={placeholder} />
            </Whirligig>
            
            <button id="sliderbutton-prev" onClick={prev}>Prev</button>
            <button id='sliderbutton-next' onClick={next}>Next</button>

          </div>
        </div>
      </div>
        
      <div id='chart-div'>
        <h1>Top Mover: <NavLink to='/productX' id='productX-Link'> Product X </NavLink></h1>
        <div className='linechart'>
          <Chart></Chart>
        </div>
        {/* <img id="chart" src={placeholder2} /> */}

        <button id="candlesticks-button">Candlestick Chart</button>
        <button id="line-button">Line Chart</button>

        <div id='product-article-title'>
            <h1>Recent News Articles: <NavLink to='/productX' id='productX-Link'> Product X </NavLink></h1>
          </div>
          {/*
          <div id='product-article'>
            <Whirligig id ='product-news-slider'
              visibleSlides={3}
              gutter="1em"
              ref={(_whirligigInstance) => { whirligig = _whirligigInstance}}
            >
              <img id="images" src={placeholder} />
              <img id="images" src={placeholder} />
              <img id="images" src={placeholder} />
            </Whirligig>
          </div>
          */}

      <br></br>

        <div id="data">
          <h3>Dummy Data: </h3>
          <ul> 
            <li>Previous Close: </li>
            <li>Open: </li>
            <li>Volume: </li>
            <li>Daily Percentage Change:</li>
          </ul>
        </div>
      </div>
      

    </div>

    /*
    <div id='content'>
      <div id='title'>
        <h1>Top News Articles</h1>
      </div>
     
      <div id='newsArticles'>
        <Whirligig id ='slider'
          visibleSlides={3}
          gutter="1em"
          ref={(_whirligigInstance) => { whirligig = _whirligigInstance}}
          >
            <img id="images" src={placeholder} />
            <img id="images" src={placeholder} />
            <img id="images" src={placeholder} />
            <img id="images" src={placeholder} />
            <img id="images" src={placeholder} />
        </Whirligig>
        <button id="sliderbutton-prev" onClick={prev}>Prev</button>
        <button id='sliderbutton-next' onClick={next}>Next</button>
      </div>
    
      <div id='chart-div'>
        <img id="chart" src={placeholder2} />

        <br></br>

        <button id="candlesticks-button">Candlestick Chart</button>
        <button id="line-button">Line Chart</button>

      </div>

      <br></br>

      <div id="data">
        <h3>Dummy Data: </h3>
        <ul> 
          <li>Previous Close: </li>
          <li>Open: </li>
          <li>Volume: </li>
          <li>Daily Percentage Change:</li>
        </ul>
      </div>

      <br></br>
    </div>
    */
  );
};
  
export default Home;