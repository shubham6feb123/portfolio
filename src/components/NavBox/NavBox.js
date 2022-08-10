import React from "react";
import "./navBox.css";
import { Link } from "react-router-dom";

function NavBox({ show }) {
  return (
    <>
      <div className={show ? "navBoxWrapper showNavBox " : "navBoxWrapper"}>
        <div className="navBox">
          <div className="icon">
            <Link to="/">
              <img src="./image/portfolio.png" alt="portfolio" />
            </Link>
          </div>
          <div className="icon">
            <Link to="services">
              <img src="./image/services.png" alt="services" />
            </Link>
          </div>
          <div className="icon">
            <Link to="blog">
              <img src="./image/blog.png" alt="blog" />
            </Link>
          </div>
          <div className="icon">
            <Link to="/">
              <img src="./image/resume.png" alt="resume" />
            </Link>
          </div>
          {/* <div className="icon">
            <Link to="user">
                    <img src="./image/user-6.gif" alt="user"/>
                </Link>
            </div>
            <div className="icon">
            <Link to="logout">
                    <img src="./image/off.gif" alt="log-out"/>
                </Link>
            </div> */}

          {/* <div className="icon__3">hai</div>
            <div className="icon__4">bahi ji</div> */}
        </div>
      </div>
    </>
  );
}

export default NavBox;

// className={show?'navBox showNavBox':'navBox'}
