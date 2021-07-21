import React from 'react';
import './navBox.css';

function NavBox({show}) {
     return (
         <>
        <div className={show?'navBox showNavBox':'navBox'}>
            <div className="icon__1">ye mera</div>
            <div className="icon__2">portfolio</div>
            <div className="icon__3">hai</div>
            <div className="icon__4">bahi ji</div>
        </div>
        </>
    )
}

export default NavBox
