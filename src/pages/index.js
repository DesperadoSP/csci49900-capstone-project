import React, { useEffect, useState } from 'react';
import Whirligig from 'react-whirligig'
import Highcharts from 'highcharts/highstock';
import HighchartsReact from 'highcharts-react-official';
import './index.css'
import background from './Sky.jpg';
import DailyArticles from './dailyArticles';
import NewsItem from './newsItem';
import Line from './linechartv2';
import { Nav, NavLink, NavMenu} from '../components/Navbar/NavbarElements';
import { Form, FormControl, Button } from "react-bootstrap";
import StockInformation from './stockInformation';
import axios from 'axios'; 

import Chart from '../components/LineChart/index';
import Logo from '../components/Navbar/TradeBreath.gif';

import ChartJS from '../components/CandleChart/chart';
import dataSource from '../components/CandleChart/data'
import CandleApp from '../components/CandleChart/chart';
import { AxisConstantLineStyle } from 'devextreme-react/chart';
import ReactHighcharts from 'react-highcharts';

/*
const options = {
  title: {
    text: 'My stock chart'
  },
  plotOptions: {
    series: {
      showInNavigator: true,
      gapSize: 6,

    }
  },
  rangeSelector: {
    selected: 1
  },
  chart: {
    height: '60%',
    width: 1400,
  },
  credits: {
    enabled: false
  },
  legend: {
    enabled: false
  },
  tooltip: {
    valueDecimals: 2
  },
  series: [
    {
      data: [1, 2, 1, 4, 3, 6, 7, 3, 8, 6, 9]
      
    }
  ]
};
*/
  
const Home = () => {

  const [price, setPrice] = useState([]);
  /* const [date, setDate] = useState([]); */
  const [stockInfo, setStockInfo] = useState([]);
  const [articles, setArticles] = useState([]);
  const [stock, setStock]= useState("TSLA");

  /* const [block, setBlock] = useState("block") */
  const [hidden, setHidden] = useState("block");
  
  function stockChange(event){
    setStock(event.target.value);
  } 

/*
  const [tbapp, settbapp]= useState("");
  const [found, setFound]= useState(false);

  async function tbappChange() {
    try {
    let response = await axios.get('/tbapp/?stock=' + stock + '&interval=Day&start_date=2021-10-06&end_date=2021-10-10' , { mode: "no-cors" });
    let response = await axios.get('https://stocknewsapi.com/api/v1?tickers=' + stock + '&items=25&token=c5nrxp6lw6ftwokpjx08wkycksgzcg0rpgc4hlcy');
    let response = await axios.get("https://goweather.herokuapp.com/weather/"+ stock ); 
    The above line is for Testing pursposes to see if app connects to an external api which it does*
      settbapp(response.data);
      console.log(response.data); 
      setFound(true);
    }catch(error) {
      if(error.response) {
        console.log(error.response.data);
        setFound(false);
      }
    }
  }
  */

  useEffect(() => {
    const getArticles = async () => {
      const res = await axios.get(
        'https://stocknewsapi.com/api/v1?tickers=TSLA&items=25&token=c5nrxp6lw6ftwokpjx08wkycksgzcg0rpgc4hlcy'
      );
      setArticles(res.data.data);
      getStockInfo();
      getchartInfo();
    };
    getArticles();
    
  },
  [null]);

  const getStockInfo = async () => {
    const info = await axios.get (
      'https://api.marketstack.com/v1/eod/latest?access_key=7ba49202483340bca37ab953c66b592c&symbols=' + stock /*+ '&%20date_from=2021-10-15'*/ , { mode: "no-cors" }
    );
    setStockInfo(info.data.data);
    console.log(info);
  };

  const getchartInfo = async () => {
    const priceAndDate = await axios.get (
      'https://api.marketstack.com/v1/eod?access_key=7ba49202483340bca37ab953c66b592c&symbols=AAPL'
    );
    setPrice(priceAndDate.data.data);
    /* setDate(priceAndDate.data); */
    console.log(price);
    /* console.log(date); */
  }

  const getArticles = async () => {
    const res = await axios.get(
      'https://stocknewsapi.com/api/v1?tickers=' + stock + '&items=25&token=c5nrxp6lw6ftwokpjx08wkycksgzcg0rpgc4hlcy'
    );
    setArticles(res.data.data);
    setHidden("none");
    console.log(res); 
    getStockInfo();
    /* tbappChange(); */
  };

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
            backgroundImage: `url(${background})`,
            backgroundCover: `cover`,
            backgroundSize: '100% 100%',
            backgroundAttachment: 'fixed',
            backgroundRepeat: 'no-repeat',
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
              <FormControl type="text" autoComplete="off"
              id="searchBar"
              /* value={inputValue} */
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
      
        <div id='statement-and-articles'
        style={{
          paddingTop: '8%',
          paddingBottom: '2%',
          overflow: 'hidden',
          display: hidden,
          height: '100%'
        }}>
          <div id='statement'>
            <h1>Our mission is to let <br/> you invest safely</h1>
          </div>

          <hr></hr>

          <div id='newsArticles'>
            <DailyArticles></DailyArticles>
          </div>
        </div>
    </div>
        
    <div id='chart-div'>
        <h1> {stock} </h1>
        <div className='linechart'>
          <Chart></Chart>
          
              <HighchartsReact
                highcharts={Highcharts}
                constructorType={'stockChart'}
                options={{
                  yAxis: [{
                    offset: 30,
  
                      x: -20,
                      style: {
                        "color": "#000", "position": "absolute"
            
                      },
                      align: 'left'
                    },
  
                  ],
                  title: {
                    text: ''
                  },
                  plotOptions: {
                    series: {
                      showInNavigator: true,
                      gapSize: 6,
                
                    }
                  },
                  rangeSelector: {
                    selected: 1
                  },
                  chart: {
                    height: '60%',
                    width: 1400,
                  },
                  credits: {
                    enabled: false
                  },
                  legend: {
                    enabled: false
                  },
                  tooltip: {
                    valueDecimals: 2
                  },
                  series: [
                    {
                      /*data: [1, 2, 1, 4, 3, 6, 7, 3, 8, 6, 9]*/
                      data: [0, 1, 2, 3, 4]
                    }
                  ]
                }}
                >
                </HighchartsReact>

        <div className='linechart'>
            
              <HighchartsReact
              highcharts={Highcharts}
              /*constructorType={'stockChart'}*/
              options={{
                yAxis: [{
                  offset: 30,

                    x: -20,
                    style: {
                      "color": "#000", "position": "absolute"
          
                    },
                    align: 'left'
                  },

                ],
                title: {
                  text: ''
                },
                plotOptions: {
                  series: {
                    showInNavigator: true,
                    gapSize: 6,
              
                  }
                },
                rangeSelector: {
                  selected: 1
                },
                chart: {
                  height: '60%',
                  width: 1400,
                },
                credits: {
                  enabled: false
                },
                legend: {
                  enabled: false
                },
                tooltip: {
                  valueDecimals: 2
                },
                series: [
                  {
                    type: 'line',
                    /*data: [1, 2, 1, 4, 3, 6, 7, 3, 8, 6, 9]*/
                    data: [price.map(({date, close}) => (
                      date={date}, 
                      close={close}))]
                  }
                ]
              }}
              >
              </HighchartsReact>
           
        </div>   
            
        </div>
        
      <br></br>

        <div id="data">
          {
          stockInfo.map(({ close, open, high, low, volume}) => (
          <StockInformation
            open={open} 
            close={close}
            high={high}
            low={low}
            volume={volume}
          />
          ))}

          {/*
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

          <div id='product-article'>
            <Whirligig id ='product-news-slider'
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
  );
};

export default Home;