import React, { Component } from 'react'
import ReactHighcharts from 'react-highcharts/ReactHighstock.src'
import priceData from './data.json'
import moment from 'moment'
import './chart.css';
import placeholder from './placeholder-wide.png';

export default class Chart extends Component {
/* Controls the buttons to view either the linechart or candlstick chart */
  constructor(props) {
    super(props);
    this.state = {
      linechart_Visibility: "block",
      candlestick_Visibility: "none"
    }
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

/* -------------------------------------------- */

  render() {

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
          <img 
          style={{
            height: '600px'
          }}
          classname='candlestick-chart' src={placeholder} 
          />
        </div>

        <button onClick={this.hidelinechart_showcandlestick} 
          id="candlesticks-button">Candlestick Chart
        </button> 
        <button onClick={this.viewlinechart_hidecandlstick}
          id="line-button">Line Chart
        </button> 
      </div>
    )
  }
}
