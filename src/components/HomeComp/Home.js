import React, { useState } from "react";
import "./home.css";

// background image
import background1 from "./window.jpg";
import background2 from "./background2.jpg";

// components
import Nav from "../NavComp/nav";
import Portfolio from "../portfolio/Portfolio";
// import User from "../user/User";
import Blog from "../Blog/Blog";

import Snowfall from "react-snowfall";

//routing
import {
  // BrowserRouter as Router,
  Route,
  Routes,
  // Navigate,
} from "react-router-dom";
import Services from "../services/Services";

function Home() {
  const [backgrounds, setBackgrounds] = useState(false);
  const changeBackground = () => {
    setBackgrounds((prev) => !prev);
  };
  return (
    <div
      className="home"
      style={{
        backgroundImage: `url(${backgrounds ? background1 : background2})`,
      }}
      onDoubleClick={changeBackground}
    >
      <Nav background={changeBackground} setBackgrounds={setBackgrounds} />
      <Snowfall color=" #00bcd4" />
      <Routes>
        <Route path="/" element={<Portfolio />} />

        {/* <Route path="/" element={<Contact />} /> */}

        <Route path="blog" element={<Blog />} />

        <Route path="services" element={<Services />} />
      </Routes>
    </div>
  );
}

export default Home;

//protected route for blog page
// const BlogRoute = ({ children, ...rest }) => {
//   return (
//     <Route
//       {...rest}
//       render={({ location }) => {
//         console.log("location", location);
//         return isAuth ? (
//           children
//         ) : (
//           <Navigate
//             to={{
//               pathname: "/",
//               state: { from: location },
//             }}
//           />
//         );
//       }}
//     ></Route>
//   );
// };

//protected route for user page
// const UserRoute = ({ children, ...rest }) => {
//   return (
//     <Route
//       {...rest}
//       render={({ location }) => {
//         return isAuth ? (
//           <Navigate
//             to={{
//               pathname: "/",
//               state: { from: location },
//             }}
//           />
//         ) : (
//           children
//         );
//       }}
//     ></Route>
//   );
// };
