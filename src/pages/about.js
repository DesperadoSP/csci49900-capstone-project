import React, { useState } from 'react';
import Whirligig from 'react-whirligig'
import background from './Sky.jpg';
import { Nav, NavLink, NavMenu} from '../components/Navbar/NavbarElements';
import { Form, FormControl, Button } from "react-bootstrap";
import Logo from '../components/Navbar/TradeBreath.gif';
import Chart from '../components/LineChart/index';
import NewsItem from './newsItem';
import StockInformation from './stockInformation';
import axios, { Axios } from 'axios';
import './about.css';
import Adrian from './Adrian.png'
import Alex from './Alex.png'
import Diego from './Diego.png'
import Edwin from './Edwin.png'

import StockPic from './stock.jpeg'
import HunterPic from './hunter.jpg'

const About = () => {

  const [stockInfo, setStockInfo] = useState([]);
  const [articles, setArticles] = useState([]);
  const [stock, setStock]= useState("");

  const [hidden, setHidden] = useState("block");
  const [show, setShowing] = useState("none");

  function stockChange(event){
    setStock(event.target.value);
  } 

  const getStockInfo = async () => {
    const info = await axios.get (
      'http://api.marketstack.com/v1/eod/latest?access_key=7ba49202483340bca37ab953c66b592c&symbols=' + stock /*+ '&%20date_from=2021-10-15'*/ , { mode: "no-cors" }
    );
    setStockInfo(info.data.data);
    console.log(info);
  };

  const getArticles = async () => {
    const res = await axios.get(
      'https://stocknewsapi.com/api/v1?tickers=' + stock + '&items=25&token=c5nrxp6lw6ftwokpjx08wkycksgzcg0rpgc4hlcy'
    );
    setArticles(res.data.data);
    console.log(res); 
    setHidden("none");
    setShowing("block");
    getStockInfo();
    /* tbappChange(); */
  };
  

  let whirligig
  const next = () => whirligig.next()
  const prev = () => whirligig.prev()

  return (
  <div id = "content">
    <div className="navBar-div">
    <Nav id ="navBar"
        style={{ 
        height: '90px',
        paddingTop: '0.5%',
        paddingBottom: '0.5%',
        backgroundImage: `url(${background})`,
        backgroundCover: `cover`,
        backgroundSize: '100% 100%',
        backgroundAttachment: 'fixed',
        backgroundRepeat: 'no-repeat',
        backgroundColor: '#000'
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
          <FormControl type="text" autoComplete="off"
            id="searchBar"
            onChange={stockChange} 
        />

          <Button id="searchButton" 
            onClick={getArticles}>
              Search
            </Button>
        </Form>

        </NavMenu>
      </Nav>

    </div>


    <div 
      style ={{
        justifyContent: 'center',
        marginLeft: '5%',
        marginRight: '5%',
        overflow: 'auto',
        alignItems: 'center',
        height: 'auto',
        display: show
    }}>
        <h1 style = {{
          marginLeft: '10%'
        }}> 
          {stock} 
        </h1>
        <div className='linechart'>
            <Chart></Chart>
        </div>

        <br></br>

        <div className="databox">
          {
          stockInfo.map(({ close, open, high, low, volume }) => (
          <StockInformation
            open={open} 
            close={close}
            high={high}
            low={low}
            volume={volume}
          />
          ))}
        </div>

        <div style = {{
          marginLeft: '10%'
        }}>
          <h1>Recent News Articles: {stock} </h1>
        </div>

          <div id='newsArticles'>
            <Whirligig className ='product-slider'
              visibleSlides={3}
              gutter="1em"
              ref={(_whirligigInstance) => { whirligig = _whirligigInstance}}
            >
              
              {articles.map(({ title, news_url, image_url, text, date}) => (
                <NewsItem
                  title={title}
                  news_url={news_url}
                  image_url={image_url} 
                  text={text}
                  date={date}
                />
              ))}
            </Whirligig>
            
            <div className='buttons'>
                <button id="sliderbutton-prev" onClick={prev}>Prev</button>
                <button id='sliderbutton-next' onClick={next}>Next</button>
            </div>
          </div>
        </div>

    <div style={{
      display: hidden
    }}>
    <div className = "container">
      <div className = "aboutTitle">
        <h1>TradeBreath</h1>
      </div>
        <img className = "stockPic" src = {StockPic} alt = "decoPic"></img>
        <div className = "aboutContent">
             <p> TradeBreath is a finanicial website which provides stock information such as: open, close, high low, volume of the stock with the line chart and a candlestick chart. <br></br> We want every investor to invest safe by providing the lastest news of the specific sotck along with the news from the stock market. </p>
        </div>
        
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      
      {/* <div className = "chartTitle">
        <h1>Charts</h1>
      </div>
        <div className = "aboutContent">
           <p> Line chart is  </p>
        </div> */}

      <div className = "whoTitle">
        <h1>Who We Are</h1>
      </div>
        <img className = "hunterPic" src = {HunterPic} alt = "hunterPic"></img>
        <div className = "whoContent">
             <p> We are stduent of Hunter College and this website is a project for the class CSCI 49900.  </p>
        </div>

      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>


        <div className = "peopleContainer">
          <img className = "people" src = {Adrian} alt = "Adrian Ramirez"></img>
          <img className = "people" src = {Alex} alt = "Alex Jun"></img>
          <img className = "people" src = {Diego} alt = "Diego Kervabon"></img>
          <img className = "people" src = {Edwin} alt = "Edwin Zhu"></img>
        </div>
      </div>  

      </div>
    </div>
  );
};
  
export default About;