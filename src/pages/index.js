/* import React from 'react'; */
import React, { useEffect, useState } from 'react';
import Whirligig from 'react-whirligig'
import placeholder from './placeholder.png';
import './index.css'
import background from './Sky.jpg';
import { Nav, NavLink, NavMenu} from '../components/Navbar/NavbarElements';
import { Form, FormControl, Button } from "react-bootstrap";
/* import axios from 'axios'; */

import Chart from '../components/LineChart/index';
import Logo from '../components/Navbar/TradeBreath.gif';

import ChartJS from '../components/CandleChart/chart';
import dataSource from '../components/CandleChart/data'
import CandleApp from '../components/CandleChart/chart';

/*
function APICall() {
  let[input, getInput] = useState({});
  let[inputValue, setInputValue] = useState("");
  let onChange = (event) => {
    setInputValue(event.target.value);
  };

  useEffect(() => {
    getInfo();
  },
  []);

  let getInfo = async() => {
    let response = await fetch()
  }
}
*/
  
const Home = () => {

/* API Call */
  let[input, setInput] = useState({});
  let[inputValue, setInputValue] = useState("");
  let onChange = (event) => {
    setInputValue(event.target.value);
  };

  useEffect(() => {
    getInfo();
  },
  []);

  let getInfo = async() => {
    let response = await fetch("/tbapp/?stock=" + inputValue + "&interval=Day&start_date=2021-10-06&end_date=2021-10-06");
    let info = await response.json();
    setInput(info);
  } 
  /* ------------------ */


  let whirligig
  const next = () => whirligig.next()
  const prev = () => whirligig.prev()

  /*-------------*/
  /*
  const [chartsToDisplay, setChartsToDisplay] = useState([]);

  const getData = async => {
    const charts = [];
    charts.push(<ChartJS key = {1} data = {MadeData} />);
    setChartsToDisplay(charts)
  };

  useEffect(() => {
    getData();
  }, []);

  /*-------------*/

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
              value={inputValue}
              onChange={onChange}
            />

            <Button id="searchButton" onClick={getInfo}>
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
        
      <br></br>

        <div id="data">
          <h3> {inputValue} </h3>
          <ul> 
            <li>Previous Close: </li>
            <li>Open: {input.o} </li>
            <li>Volume: {input.v} </li>
            <li>Daily Percentage Change: {input.news_url}</li>
          </ul>
        </div>

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

      </div>
      

    </div>
  );
};
  
export default Home;