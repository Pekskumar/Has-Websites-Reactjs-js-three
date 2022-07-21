import React from "react";
import { NavLink, Link} from "react-router-dom";

function Call_component () {
	return (
		<>
		<section className="call_component responsive-padding">
		
	<div className="container">
		<div className="d-flex justify-space-between align-item-center">
			<div className="creative-contant">
				<div className="general-heading">

					<h4>We provide 24 hours service for your business...</h4>
					<h2>Call To Action</h2>
				</div>
				<p>Call us for your interactive web design cost to plan your website design project, and receive a free estimate/proposal from our India based team for your web design project.</p>
				
			</div>

			<div className="creative-image">
				<figure>
					<img src="https://images.unsplash.com/photo-1512428559087-560fa5ceab42?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" />
				</figure>
			</div>

			
			
		</div>
		<div className="three_card_btn">
				<NavLink className="primary-btn" to="+918866808798">Call To Action<span></span></NavLink>
				</div>
	</div>
</section>
		</>
		)
}

export default Call_component;