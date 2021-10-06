import React, { useState } from 'react';
import Whirligig from 'react-whirligig'
import placeholder from './placeholder.png';
import './productX.css';

import Navbar from '../components/Navbar';
import Chart from '../components/LineChart/index';
import { render } from '@testing-library/react';

const Home = () => {
    let whirligig
    const next = () => whirligig.next()
    const prev = () => whirligig.prev()

    return (
    <div>
        <Navbar />
        <div id='chart-div'>
            <h1>Product X </h1>
            <div className='linechart'>
                <Chart></Chart>
            </div>

        <br></br>

        <div id="data">
            <h3>Dummy Data: </h3>
            <ul> 
                <li>Previous Close: </li>
                <li>Open: </li>
                <li>Volume: </li>
                <li>Daily Percentage Change:</li>
            </ul>
        </div>

        <div id='product-article-title'>
          <h1>Recent News Articles: Product X </h1>
        </div>

        <div id='newsArticles'>
            <Whirligig className ='product-slider'
              visibleSlides={4}
              gutter="1em"
              ref={(_whirligigInstance) => { whirligig = _whirligigInstance}}
            >
              <img id="images" src={placeholder} />
              <img id="images" src={placeholder} />
              <img id="images" src={placeholder} />
              <img id="images" src={placeholder} />
              <img id="images" src={placeholder} />
              <img id="images" src={placeholder} />

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