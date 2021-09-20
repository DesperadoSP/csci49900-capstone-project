/* eslint-disable */
import { render } from '@testing-library/react';
import React, {useState, Component} from 'react'
import './App.css';

class Navigation extends Component {
  render() {
    return (
        <div>
          <div className = {"navBar"}> 
            Trade Breath 
            <button className = {"navTabs"}> Home </button>
            <button className = {"navTabs"}> Products </button>
            <button className = {"navTabs"}> About </button>
          </div>
          <SearchBar className = {"searchBar"}></SearchBar>
        </div>
          
          
    );
  }
}

function App() {
  return (
    <div className = "App">
      <Navigation></Navigation>
    </div>
  );
}

function SearchBar() {
  return (
    <table className = {"table"}>
            <tr>
                <td>
                    <input type = {"text"} size= {"25"} className = {"input-sm"} placeholder = {"Search"}/>
                </td>
            </tr>
        </table>
  )
}

export default App;
