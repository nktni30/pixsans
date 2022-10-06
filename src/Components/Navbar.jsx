import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [click, setClick] = useState(false);
  const handleclick = () => setClick(!click);

  return (
    <>
      <nav>
        <div className="checkbtn" onClick={handleclick}>
          {click ? <FaTimes /> : <FaBars />}
        </div>
        <img className="logo" src={process.env.PUBLIC_URL + '/logo_dark.png'} />
        <ul className={click ? "mobile-menu" : null}>
          <li><NavLink exact to="/" activeClassName="active">Home</NavLink></li>
          <li><NavLink exact to="/Services" activeClassName="active">Services</NavLink></li>
          <li><NavLink exact to="/About" activeClassName="active">About</NavLink></li>
          <li><NavLink exact to="/Portfolio" activeClassName="active">Portfolio</NavLink></li>
          <li><NavLink exact to="/Blog" activeClassName="active">Blog</NavLink></li>
          <li><NavLink exact to="/Contact" activeClassName="active">Contact</NavLink></li>
        </ul>
      </nav>
    </>
  )
}


export default Navbar;