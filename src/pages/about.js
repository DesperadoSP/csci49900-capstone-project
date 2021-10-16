import React from 'react';
import './about.css';
import Adrian from './Adrian.png'
import Alex from './Alex.png'
import Diego from './Diego.png'
import Edwin from './Edwin.png'

import Navbar from '../components/Navbar';

import StockPic from './stock.jpeg'
import HunterPic from './hunter.jpg'

const About = () => {
  return (
    <div id = "content">
    <Navbar />
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
  );
};
  
export default About;