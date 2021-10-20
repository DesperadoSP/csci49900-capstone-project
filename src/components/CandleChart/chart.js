import React, { Component, useEffect, useState } from 'react'
import './chart.css'
import axios, { Axios } from 'axios';
import { CanvasJSChart } from 'canvasjs-react-charts'

const CandleChart = () => {
  
    const [price, setPrice] = useState([]);
    const [stock, setStock]= useState("");

    function stockChange(event){
        setStock(event.target.value);
    } 
    
      useEffect(() => {
        const getchartInfo = async () => {
          const priceAndDate = await axios.get (
            'https://api.marketstack.com/v1/eod?access_key=7ba49202483340bca37ab953c66b592c&symbols=' + "TSLA"
          );
        setPrice(priceAndDate.data.data);
        console.log(price)
        };
        getchartInfo()
      }, []);
        
    return (
      <div id="chartContainer">
        <CanvasJSChart
        options = { {
          theme: "light1",
          exportEnabled: true,

          axisY: {
            minimum: Math.min(...price.map(data => data.low)) / 1.1,
            maximum: Math.max(...price.map(data => data.high)) * 1.1,
            crosshair: {
              enabled: true,
              snapToDataPoint: true
            },
            prefix: "$",
          },
          axisX: {
            crosshair: {
              enabled: true,
              snapToDataPoint: true
            },
            scaleBreaks: {
              spacing: 0,
              fillOpacity: 0,
              lineThickness: 0,
              customBreaks: price.reduce((breaks, value, index, array) => {
                  if (index === 0) return breaks;

                  const currentDataPointUnix = Number(new Date(value.date));
                  const previousDataPointUnix = Number(new Date(array[index - 1].date));

                  const oneDayInMs = 86400000;

                  const difference = previousDataPointUnix - currentDataPointUnix;

                  return difference === oneDayInMs
                      ? breaks
                      : [
                          ...breaks,
                          {
                              startValue: currentDataPointUnix,
                              endValue: previousDataPointUnix - oneDayInMs
                          }
                      ]
              }, [])
            }
          },
          data: [{
            type: 'candlestick',
            risingColor: "green",
            fallingColor: "#E40A0A",
            dataPoints: price.map(price => ({
              x: new Date(price.date),
              y: [
                price.open,
                price.high,
                price.low,
                price.close
              ]
            }))
          }],
          
        }
      }
      />

      </div>
      
      );
    };
export default CandleChart;