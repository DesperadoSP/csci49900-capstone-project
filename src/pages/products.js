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
import './products.css';

import Navbar from '../components/Navbar';
  
const Home = () => {
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
      'https://api.marketstack.com/v1/eod/latest?access_key=7ba49202483340bca37ab953c66b592c&symbols=' + stock /*+ '&%20date_from=2021-10-15'*/ , { mode: "no-cors" }
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
    <div id='products'>
      
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
        marginBottom: '2%',
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

      <div id='list'>
      <div id='products-title'>
        <h1> Products </h1>
      </div>

      <Form inline id="productSearchBar">
        <FormControl type="text" placeholder="Search" id="productSearchBar" autoComplete="off"/>
        <Button id="productSearchButton">
          Search
        </Button>   
        <FormControl type="text" placeholder="Filter" id="filterSearchBar" autoComplete="off"/>
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