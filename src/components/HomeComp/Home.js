import React, { useState } from 'react';
import "./home.css";

// background image
import background from './window.jpg';
import background2 from './background2.jpg';

// components
import Nav from "../NavComp/nav";
import Portfolio from '../portfolio/Portfolio';
import User from '../user/User';
import Contact from '../contact/Contact';

//routing
import {Route,Switch} from 'react-router-dom';

function Home() {
    const [backgrounds,setBackgrounds] = useState(false);
    const changeBackground = ()=>{
        setBackgrounds((prev)=>!prev);
    }
    return (
        <div className="home" style={{backgroundImage:`url(${backgrounds?background2:background})`}} onDoubleClick={changeBackground}>
        {/* <img src="./image/window.jpg" alt="window"/> */}
        <Nav/>
        <Switch>
            <Route exact path='/' >
             <Portfolio/>
            </Route>
            <Route exact path='/user'>
             <User/>
            </Route>
            <Route exact path='/contact'>
             <Contact/>
            </Route>
        </Switch>
        </div>
    )
}

export default Home
