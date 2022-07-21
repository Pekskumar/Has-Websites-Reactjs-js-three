import React from "react";
import { NavLink, Link} from "react-router-dom";

function Left_image_component (props) {
	return (
		<>
			<section className="creative-section responsive-padding ">
	<div className="container">
		<div className="d-flex justify-space-between align-item-center flex-direction-raw-reverse">
			<div className="creative-contant">
				<div className="general-heading">
					<h4>{props.top_small_heading}</h4>
					<h2>{props.heading}</h2>
				</div>
				<p>{props.contents_1}</p>
				<ul>
					<li>{props.li_1}</li>
					<li>{props.li_2}</li>
					<li>{props.li_3}</li>
				</ul>
				<p>{props.contents_2}</p>
				<NavLink className="primary-btn" to="/About">{props.btnname}<span></span></NavLink>
			</div>

			<div className="creative-image">
				<figure>
					<img src={props.imgsrc} />
				</figure>
			</div>
			
		</div>
	</div>
</section>
		</>
		)
}

export default Left_image_component;