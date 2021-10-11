/* import React from 'react'; */
import React, { useEffect, useState } from 'react';
import Whirligig from 'react-whirligig'
import placeholder from './placeholder.png';
import './index.css'
import background from './Sky.jpg';
import { Nav, NavLink, NavMenu} from '../components/Navbar/NavbarElements';
import { Form, FormControl, Button } from "react-bootstrap";
import axios from 'axios'; 

import Chart from '../components/LineChart/index';
import Logo from '../components/Navbar/TradeBreath.gif';

import ChartJS from '../components/CandleChart/chart';
import dataSource from '../components/CandleChart/data'
import CandleApp from '../components/CandleChart/chart';
import { AxisConstantLineStyle } from 'devextreme-react/chart';
  
const Home = () => {

  const [tbapp, settbapp]= useState("");
  const [stock, setstock]= useState("");
  const [found, setFound]= useState(false);
  
  function stockChange(event){
    setstock(event.target.value);
  } 

  async function tbappChange() {
    try {
    let response = await axios.get('/tbapp/?stock=' + stock + '&interval=Day&start_date=2021-10-10&end_date=2021-10-10' , { mode: "no-cors" });
    /*let response = await axios.get('https://stocknewsapi.com/api/v1?tickers=' + stock + '&items=25&token=c5nrxp6lw6ftwokpjx08wkycksgzcg0rpgc4hlcy');(/)
    /*let response = await axios.get("https://goweather.herokuapp.com/weather/"+ stock );*/  
    /*The above line is for Testing pursposes to see if app connects to an expernal api which it does*/ 
      settbapp(response.data);
      console.log(response.data); /* This is what I used to get to display on the console */
      setFound(true);
    }catch(error) {
      if(error.response) {
        console.log(error.response.data);
        setFound(false);
      }
    }
  }


/* API Call -- This portion is an experiment -- */
/*
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
    let response = await fetch('/tbapp/?stock=' + inputValue + '&interval=Day&start_date=2021-10-06&end_date=2021-10-06' , {responseType: 'text'});
    let info = await response.json();
    setInput(info);
    console.log(info); 
  } 
  */
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
              <FormControl type="text" 
              id="searchBar"
              /* value={inputValue} */
               onChange={stockChange} 
          />

            <Button id="searchButton" 
            onClick={tbappChange}>
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
          {found ?
          <div>
            <h3> {stock} </h3>
            <br></br>
            <ul> 
              <li>Previous Close: {tbapp.vw} </li>

              <li>Open: {tbapp.o} </li>

              <li>Volume: {tbapp.c} </li>

            </ul>
          </div>
          : <h3> No Results </h3>}
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