import React from 'react';
import './about.css';
import Adrian from './Adrian.png'
import Alex from './Alex.png'
import Diego from './Diego.png'
import Edwin from './Edwin.png'

import Navbar from '../components/Navbar';
  
const About = () => {
  return (
    <div id = "content">
    <Navbar />
    <div className = "container">
      <div className = "aboutTitle">
        <h1>About Us</h1>
      </div>
        <div className = "aboutContent">
             <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. </p>
        </div>

      <div className = "whoTitle">
        <h1>Who We Are</h1>
      </div>
        <div className = "whoContent">
             <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. </p>
        </div>
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