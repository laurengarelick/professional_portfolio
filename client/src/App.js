import React from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from "./components/Nav/Nav.js";
import GridList from "./components/GridList/GridList.js"




function App() {
  return (
    <div className="App">
      <Nav/>
      <div className="banner" style={{background:"#424242", height: "50vh"}}>
        <h1 style={{textAlign:"center", padding: 100, color:"white", fontSize:"32px"}}>-Hi, I’m a MOM, MERN coding apprentice, and
         adventure enthusiast living in Orange County, CA.</h1>
      </div>
     <GridList/>
    </div>
  );
}

export default App;
