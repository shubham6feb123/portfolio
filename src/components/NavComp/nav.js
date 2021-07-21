import React, { useState } from 'react'
import './nav.css';

//component
import NavBox from '../NavBox/NavBox';

function Nav() {
    const [show,setShow] = useState(false);
    const showNavBox = ()=>{
        setShow((prev)=>!prev);
    }
    return (
        <>
        <div className="nav">
            <div className="nav__icon">
                <img src="./image/windows-11.svg" alt="nav-icon" onClick={showNavBox}/>
            </div>
        </div>
        <NavBox show={show}/>
       </> 
    )
}

export default Nav
