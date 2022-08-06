import React from "react";
import "./App.css";

// components
import Home from "./components/HomeComp/Home";
// import Portfolio from "./components/portfolio/Portfolio";
// import User from "./components/user/User";
// import Contact from "./components/contact/Contact";
// import Blog from "./components/Blog/Blog";

//routing
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="app">
      {/* <Home/> */}
      <Router>
        <Routes>
          <Route path="*" element={<Home />} />
         {/* <Route index path="portfolio" element={<Portfolio />} />  */}

          {/* <Route path="user" element={<User />} />

          <Route path="contact" element={<Contact />} />

          <Route path="blog" element={<Blog />} /> */} */
        </Routes>
      </Router>
    </div>
  );
}

export default App;
