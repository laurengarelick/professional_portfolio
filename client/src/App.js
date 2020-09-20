import React from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from "./components/Nav/Nav.js";
import CenteredGrid from "./components/Grid/Grid.js";
// import GridList from "./components/GridList/GridList.js"
// import NewsCard2Demo from "./components/Card/Card.js"


function App() {
  return (
    <div className="App">
      <Nav/>
      <div className="banner" style={{background:"#424242", height: "70vh"}}>
        <h1 style={{textAlign:"center", color:"white"}}>Hi, I’m a MOM, MERN coding apprentice, and adventure enthusiast living in Orange County, CA.</h1>
      </div>
      <CenteredGrid/>
      {/* <NewsCard2Demo/>
      <GridList/> */}
    </div>
  );
}

export default App;
