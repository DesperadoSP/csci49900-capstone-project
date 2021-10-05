import React, { Component } from 'react'
import ReactHighcharts from 'react-highcharts/ReactHighstock.src'
import priceData from './data.json'
import moment from 'moment'
import './chart.css';
import placeholder from './placeholder-wide.png';

export default class Chart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visibility: ""
    }
  }

  hide = (e) => {
    this.setState ({
      visibility: "hidden"
    })
  }

  view = (e) => {
    this.setState ({
      visibility: "block"
    })
  }   

  render() {

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

    return (
      <div>
        <div id='stock-chart'
        style={{
          display: this.state.visibility
        }}
        >
          <ReactHighcharts config = {configPrice}></ReactHighcharts>     
        </div>

        <div id='stock-chart' 
        style={{
          display: this.state.visibility
        }}
        >
          {/*<img src={placeholder} />*/}
        </div>

        {/*<button onClick={this.hide} id="candlesticks-button">Candlestick Chart</button> 
        <button onClick={this.view} id="line-button">Line Chart</button> */}
      </div>
    )
  }
}
