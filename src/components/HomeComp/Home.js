import React, { useState } from 'react';
import "./home.css";

// background image
import background1 from './window.jpg';
import background2 from './background2.jpg';

// components
import Nav from "../NavComp/nav";
import Portfolio from '../portfolio/Portfolio';
import User from '../user/User';
import Contact from '../contact/Contact';
import Blog from '../Blog/Blog';

//routing
import {Route,Switch,Redirect} from 'react-router-dom';


const isAuth = true;
function Home() {
    const [backgrounds,setBackgrounds] = useState(false);
    const changeBackground = ()=>{
        setBackgrounds((prev)=>!prev);
    }
    return (
        <div className="home" style={{backgroundImage:`url(${backgrounds?background2:background1})`}} onDoubleClick={changeBackground}>
        <Nav/>
        <Switch>
            <Route exact path='/' >
             <Portfolio/>
            </Route>
            <UserRoute exact path='/user'>
             <User/>
            </UserRoute>
            <Route exact path='/contact'>
             <Contact/>
            </Route>
            <BlogRoute exact path='/blog'>
             <Blog/>
            </BlogRoute>
        </Switch>
        </div>
    )
}

export default Home


//protected route for blog page
const BlogRoute = ({children,...rest})=>{
    return (
        <Route {...rest}  render={({location})=>{
            console.log('location',location)
           return isAuth ? (children):(<Redirect to={{
                pathname:'/',
                state:{from:location} 
            }}/>)
        }}>
        </Route>
      
    );
};


//protected route for user page
const UserRoute = ({children,...rest})=>{
    return (
        <Route {...rest} render={({location})=>{
            return isAuth ? (<Redirect to={{
                pathname:'/',
                state:{from:location}
            }}/>):(children)
        }}></Route>
    )
}
