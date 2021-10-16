import React, { useEffect, useState } from 'react';
import Whirligig from 'react-whirligig'
import background from './Sky.jpg';
import './productX.css';
import NewsItem from './newsItem';
import StockInformation from './stockInformation';
import axios, { Axios } from 'axios';

import { Nav, NavLink, NavMenu} from '../components/Navbar/NavbarElements';
import { Form, FormControl, Button } from "react-bootstrap";
import Logo from '../components/Navbar/TradeBreath.gif';
import Chart from '../components/LineChart/index';
import { render } from '@testing-library/react';
import StockInfo from './stockInformation';

const Home = () => {

  const [stockInfo, setStockInfo] = useState([]);
  const [articles, setArticles] = useState([]);
  const [stock, setStock]= useState("");

  const [tbapp, settbapp]= useState("");
  const [found, setFound]= useState(false);

  
  function stockChange(event){
    setStock(event.target.value);
  } 

  async function tbappChange() {
    try {
    let response = await axios.get('/tbapp/?stock=' + stock + '&interval=Day&start_date=2021-10-14&end_date=2021-10-14' , { mode: "no-cors" }); 
    /*let response = await axios.get("https://goweather.herokuapp.com/weather/"+ stock );*/  
    /*The above line is for Testing pursposes to see if app connects to an external api which it does*/ 
      /*settbapp(response.data);*/
      setStockInfo(response.data);
      /* console.log(response.data); */
      setFound(true);
    }catch(error) {
      if(error.response) {
        /* console.log(error.response.data); */
        setFound(false);
      }
    }
  }

/* 
  useEffect(() => {
    const getArticles = async () => {
      const res = await axios.get(
        'https://stocknewsapi.com/api/v1?tickers=' + stock + '&items=25&token=c5nrxp6lw6ftwokpjx08wkycksgzcg0rpgc4hlcy'
      );
      setArticles(res.data.data);
    };
    getArticles();
  },[null]);
*/

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
    getStockInfo();
    /* tbappChange(); */
  };
  

    let whirligig
    const next = () => whirligig.next()
    const prev = () => whirligig.prev()

    return (
    <div>
      <div>
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
        <div id='chart-div'>
            <h1> {stock} </h1>
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

          {/*}
          <div>
            <p>{stockInfo}</p>
            {console.log(stockInfo)}
          </div>
          

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
          */}
        </div>

        <div id='product-article-title'>
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
        </div>
    </div>
    );
};

export default Home;