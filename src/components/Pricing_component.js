import React from "react";
import { NavLink, Link } from "react-router-dom";

function Pricing_component (props) {
	return (
		<>
			

			
						<div class="box">
			              <h3>{props.pricing_heading}</h3>
			              <h4><sup><i class="fas fa-rupee-sign"></i></sup>{props.price}<span>{props.pricing_year}</span></h4>
			              <ul>
			                <li><i class="fas fa-check-double"></i> {props.pricing_li_1}</li>
			                <li><i class="fas fa-check-double"></i> {props.pricing_li_2}</li>
			                <li><i class="fas fa-check-double"></i> {props.pricing_li_3}</li>
			                <li><i class="fas fa-check-double"></i> {props.pricing_li_4}</li>
			               
			              </ul>
			              <NavLink className="primary-btn" to="/About">Get Started<span></span></NavLink>
			            </div>
			
		</>
		)
}

export default Pricing_component;