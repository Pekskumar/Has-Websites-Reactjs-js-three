import React from "react";
import { NavLink, Link} from "react-router-dom";

function Errorpage () {
	return (
		<>
		

		<section class="page_404  responsive-padding">
		<div className="container">
		<div class="four_zero_four_bg">
			<h1 >404</h1>
		</div>
		<div class="contant_box_404">
			<h3 class="h2">Look like you're lost</h3>
			<p>the page you are looking for not available!</p>
			<NavLink className="primary-btn" to="/">Go to Home page<span></span></NavLink>
		</div>
		</div>
</section>


		</>
		);
};

export default Errorpage;