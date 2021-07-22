import React from 'react';
import './App.css';

// components
import Home from "./components/HomeComp/Home";


//routing
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';


function App() {
  return (
    <div className="app">
    <Router>
      <Switch>
        <Route to="/">
      <Home/>
      </Route>
      </Switch>
      </Router>
    </div>
  )
}

export default App
