import React from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from "./components/Nav/Nav.js";
import GridList from "./components/GridList/GridList.js"
import Projects from "./components/Projects/Projects.js"



function App() {
  return (
    <div className="App">
      <Nav/>
      <div className="banner" style={{background:"black", height: "50vh"}}>
        <h1 style={{textAlign:"center", padding: 100, color:"white", fontFamily:"epilogue,sans-serif", fontSize:"56px"}}>-Hi, I’m a MOM, MERN coding apprentice, and
         adventure enthusiast living in Orange County, CA.</h1>
      </div>
     <GridList/>
     <Projects/>
    </div>
  );
}

export default App;
