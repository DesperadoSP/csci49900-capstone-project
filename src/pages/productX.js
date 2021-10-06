import React, { useState } from 'react';
import { Form, FormControl, Button } from "react-bootstrap";
import { Nav, NavLink, NavMenu} from '../components/Navbar/NavbarElements';
import './productX.css';
import placeholder2 from './placeholder-wide.png';

import Navbar from '../components/Navbar';
import Chart from '../components/Charts/index';
import { render } from '@testing-library/react';

const Home = () => {
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
        </div>
    </div>
    );
};

export default Home;