import React, {useState, Component} from 'react'
import './App.css';

class Navigation extends Component {
  render() {
    return (
        <div className = "navBar"> 
          Trade Breath 
          <button className = "navTabs"> Home </button>
          <button className = "navTabs"> Products </button>
          <button className = "navTabs"> About </button>
        </div>
    );
  }
}

function App() {
  return (
    <div className="App">
      <Navigation></Navigation>
      
    </div>
  );
}

export default App;
