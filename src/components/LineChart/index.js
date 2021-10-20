import React, { Component } from 'react'
import ReactHighcharts from 'react-highcharts/ReactHighstock.src'
import priceData from './data.json'
import StockInformation from '../../pages/stockInformation';
import axios from 'axios'; 
import moment from 'moment'
import './chart.css';
import placeholder from './placeholder-wide.png';
import CandleApp from '../CandleChart/chart';
import CandleChart from '../CandleChart/chart';

import {Home} from '../../pages/index';

export default class LineChart extends Component {
/* Controls the buttons to view either the linechart or candlestick chart */
  constructor(props) {
    super(props);
    this.state = {
      linechart_Visibility: "block",
      candlestick_Visibility: "none",
      items: [],
      date: [],
      price: [],
      stock: ""
    };

  }

  hidelinechart_showcandlestick = (e) => {
    this.setState ({
      linechart_Visibility: "none",
      candlestick_Visibility: "block"
    })
  }

  viewlinechart_hidecandlstick= (e) => {
    this.setState ({
      linechart_Visibility: "block",
      candlestick_Visibility: "none"
    })
  } 

  setStock = (e) => {
    this.setState ({
      stock: "TSLA"
    })
  }


/* -------------------------------------------- */

/*
constructor() {
  super();

  this.state = {
    'items': []
  }
}
*/

/*
getStockInfo = async () => {
  var info = await axios.get (
    'https://api.marketstack.com/v1/eod/latest?access_key=7ba49202483340bca37ab953c66b592c&symbols=' + stock , { mode: "no-cors" }
  )
  .then(function(response, data) {
    data = response.data
  });
   stockInfo(info.data.data); 
  console.log(info);
};
*/

/*
componentDidMount() {
  this.getItems(); 
  fetch('https://stocknewsapi.com/api/v1?tickers=AAPL&items=25&token=c5nrxp6lw6ftwokpjx08wkycksgzcg0rpgc4hlcy')
  .then(response => response.json())
  .then(
    (result) => {
      this.setState ({
        items : result
      });
    }
  )
}
*/

/*
getItems() {
  fetch('https://stocknewsapi.com/api/v1?tickers=AAPL&items=25&token=c5nrxp6lw6ftwokpjx08wkycksgzcg0rpgc4hlcy')
  .then(results => results.json())
  .then((results) => {
    this.setState({
      items: results
    });
  });
}
*/

/* -------------------------------------------- */

  render() {
    const {items} = this.state;
    console.log(items)

    /* Logic for the Linechart */
    const options = {style: 'currency', currency: 'USD'};
    const numberFormat = new Intl.NumberFormat('en-US', options);
    const configPrice = {
      
      yAxis: [{
        offset: 30,

        labels: {
          formatter: function () {
            return numberFormat.format(this.value) 
          }
          ,
          x: -20,
          style: {
            "color": "#000", "position": "absolute"

          },
          align: 'left'
        },
      },
        
      ],
      tooltip: {
        shared: true,
        formatter: function () {
          return numberFormat.format(this.y, 0) +  '</b><br/>' + moment(this.x).format('MMMM Do YYYY, h:mm')
        }
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
      /*
      title: {
        text: `Bitcoin Price`
      },
      */
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
      xAxis: {
        type: 'date',
      },
      rangeSelector: {
        buttons: [{
          type: 'day',
          count: 1,
          text: '1d',
        }, {
          type: 'day',
          count: 7,
          text: '7d'
        }, {
          type: 'month',
          count: 1,
          text: '1m'
        }, {
          type: 'month',
          count: 3,
          text: '3m'
        },
          {
          type: 'all',
          text: 'All'
        }],
        selected: 4
      },
      series: [{
        name: 'Price',
        type: 'spline',
  
        data: priceData,
        /*
        [
          [Date.UTC(2010, 0, 1), 29.9],
          [Date.UTC(2010, 2, 1), 71.5],
          [Date.UTC(2010, 3, 1), 106.4]
        ]
        */
        tooltip: {
          valueDecimals: 2
        },
  
      }
      ]
    };

    /* ------------------------------------- */

    /* Place logic for the candlestick chart here */

    /* ------------------------------------- */

    return (
      <div>
        <div id='stock-chart'
        style={{
          display: this.state.linechart_Visibility
        }}
        >
          <ReactHighcharts config = {configPrice}></ReactHighcharts>     
        </div>

        <div 
        style={{
          display: this.state.candlestick_Visibility,
          marginLeft: '10%',
          marginBottom: '1%',
        }}
        >
          <CandleChart></CandleChart>
          <br></br>
          {/* <div><h4 id = 'fillExplain'>If the stock closes higher than its opening price, no color fills its body and if the stock closes lower than its opening price, a color fill is applied.</h4></div> */}
        </div>
        
        <button onClick={this.hidelinechart_showcandlestick} 
          id="candlesticks-button">Candlestick Chart
        </button> 
        <button onClick={this.viewlinechart_hidecandlstick}
          id="line-button">Line Chart
        </button> 


      </div>
    );
  }
} 