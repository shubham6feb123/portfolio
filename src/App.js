import React from 'react';
import './App.css';

// components
import Nav from "./components/NavComp/nav";
import Home from "./components/HomeComp/Home";


function App() {
  return (
    <div className="app">
      {/* <video className="background_video" autoPlay muted>
  <source src="./video/video.webm" type="video/webm"/>
   </video> */}
      <Home/>
      {/* <Nav/> */}
    </div>
  )
}

export default App
