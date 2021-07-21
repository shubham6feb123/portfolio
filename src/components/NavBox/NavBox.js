import React from 'react';
import './navBox.css';

function NavBox({show}) {
     return (
         <>
        <div className={show?'navBox showNavBox':'navBox'}>
            
        </div>
        </>
    )
}

export default NavBox
