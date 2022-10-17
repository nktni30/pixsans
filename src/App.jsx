import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./Home";
import Services from "./Services";
import About from "./About";
import Portfolio from "./Portfolio";
import Blog from "./Blog";
import Contact from "./Contact";
import Navbar from "./Components/Navbar";

const App = () => {
  return (
    <>

<Navbar/>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/Services" element={<Services />} />
        <Route exact path="/About" element={<About />} />
      <Route exact path="/Portfolio" element={<Portfolio />} />
          {/*<Route exact path="/Blog" element={<Blog />} />*/}
        <Route exact path="/Contact" element={<Contact />} />
        <Route render={() => <Navigate to="/" />} />
      </Routes>

    </>
  )
}

export default App;