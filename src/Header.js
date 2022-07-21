import React from "react";
import { NavLink, Link } from "react-router-dom";


const Header = () => {
  return (
    <>
    <a id="button"><i class="fas fa-chevron-up"></i></a>

     <section class="top-nav">
    <div className="logo">
    <h1><NavLink to="/"><img src="./images/logo-header.png" /></NavLink></h1>
    </div>
    <input id="menu-toggle" type="checkbox" />
    <label class='menu-button-container' for="menu-toggle">
    <div class='menu-button'></div>
  </label>
    
    <ul className=" menu ">
    <li><NavLink to="/">Home</NavLink></li>
    <li><NavLink exact to="/about">About</NavLink> </li>
    <li><NavLink to="/Service">Services</NavLink> </li>
    <li><NavLink to="/portfolio">Portfolio</NavLink></li>
    <li><NavLink to="/contact">Contact</NavLink></li>
    </ul>

    <div className="nav-call">
    
    
    <NavLink className="primary-btn" to="/contact">Inquiry Now<span></span></NavLink>
    </div>
  </section>




    </>
    );
  };

  export default Header;