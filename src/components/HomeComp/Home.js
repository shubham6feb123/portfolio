import React from 'react';
import "./home.css";

// components
import Nav from "../NavComp/nav";
import Portfolio from '../portfolio/Portfolio';
import Login from '../login/Login';
import Contact from '../login/contact/Contact';

//routing
import {Route,Switch,useRouteMatch} from 'react-router-dom';

function Home() {
    // console.log("use",useRouteMatch());
    // const {path,url} = useRouteMatch();
    return (
        <div className="home">
        <img src="./image/window.jpg" alt="window"/>
        <Nav/>
        <Switch>
            <Route exact path='/' >
             <Portfolio/>
            </Route>
            <Route exact path='/login'>
             <Login/>
            </Route>
            <Route exact path='/contact'>
             <Contact/>
            </Route>
        </Switch>
        </div>
    )
}

export default Home
