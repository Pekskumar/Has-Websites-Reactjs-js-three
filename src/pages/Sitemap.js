import React from "react";
import Banner from "../components/Banner";
import { NavLink } from "react-router-dom";

function Sitemap () {
	return(
		<>
		<Banner 
		// top_heading="WELCOME Terms Condition"
		heading="Sitemap"
		banner_content="THIS WEBSITE IS MADE BY REACT JS LIBRARY"
		banner_one_btn="View Our Portfolio"
		banner_two_btn="Get Started"
		/>

		<section className="responsive-padding">
		<div className="container">
			
			<div className="home-btn">

              <NavLink className="primary-btn" to={"/"}>Home page<span></span></NavLink>
              </div>
              <div className="other-btn">
              <NavLink className="primary-btn" to="/About">About<span></span></NavLink>
              <NavLink className="primary-btn" to="/service">Services<span></span></NavLink>
              <NavLink className="primary-btn" to="/Portfolio">Portfolio<span></span></NavLink>
              <NavLink className="primary-btn" to="/Contact">Contact<span></span></NavLink>
              <NavLink className="primary-btn" to="/FAQ">FAQ<span></span></NavLink>
              <NavLink className="primary-btn" to="/terms_condition">Terms & Condition<span></span></NavLink>
              <NavLink className="primary-btn" to="/privacy_policy">Privacy Policy<span></span></NavLink>
              <NavLink className="primary-btn" to="/Sitemap">Sitemap<span></span></NavLink>

            </div>

		</div>
		</section>
		</>
		)
}

export default Sitemap;