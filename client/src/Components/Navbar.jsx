import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";


function Navbar() {
  const [click, setClick] = useState(false);
  const handleclick = () => setClick(!click);

  const [color, setColor]= useState(false)
  const changeColor = () =>{
    if (window.scrollY>=70){
      setColor(true)
    }
    else
    setColor(false)
  }

  window.addEventListener('scroll', changeColor)

  return (
    <>
    <div className={color? 'nav-header nav-header-bg' :'nav-header'}>
      <nav className="container">
        <div className="checkbtn" onClick={handleclick}>
          {click ? <FaTimes /> : <FaBars />}
        </div>
        <Link to={"/"}>
        <img className="logo" src={process.env.PUBLIC_URL + '/logo1.svg'} />
        </Link>
        <ul className={click ? "mobile-menu" : null}>
          <li><NavLink exact to="/">Home</NavLink></li>
          <li><NavLink exact to="/Services" >Services</NavLink></li>
          <li><NavLink exact to="/About">About</NavLink></li>
          <li><NavLink exact to="/Portfolio" >Portfolio</NavLink></li>
          {/*<li><NavLink exact to="/Blog">Blog</NavLink></li>*/}
          <li><NavLink exact to="/Contact">Contact</NavLink></li>
        </ul>
      </nav>
      </div>
      
      
    </>
  )
}


export default Navbar;