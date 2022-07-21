import React from "react";
import Flip_hover from "./Flip_hover";
import Flip_hover_api from "./Flip_hover_api";
import { NavLink, Link} from "react-router-dom";

function Flip_hover_data () {
	return (
		<>
		<section className="include-section text-align-center responsive-padding">
			<div className="container">
				<div class="general-heading">
					<h4>Suspendisse a rhoncus</h4>
					<h2>our works</h2>
				</div>
				<div class="include-slider d-flex  ">

					<Flip_hover 
					imgsrc={Flip_hover_api[0].imgsrc}
			      	flip_heading={Flip_hover_api[0].flip_heading}
			      	flip_content={Flip_hover_api[0].flip_content}
			      	/>

			      	<Flip_hover 
					imgsrc={Flip_hover_api[1].imgsrc}
			      	flip_heading={Flip_hover_api[1].flip_heading}
			      	flip_content={Flip_hover_api[1].flip_content}
			      	/>

			      	<Flip_hover 
					imgsrc={Flip_hover_api[2].imgsrc}
			      	flip_heading={Flip_hover_api[2].flip_heading}
			      	flip_content={Flip_hover_api[2].flip_content}
			      	/>

			      	<Flip_hover 
					imgsrc={Flip_hover_api[3].imgsrc}
			      	flip_heading={Flip_hover_api[3].flip_heading}
			      	flip_content={Flip_hover_api[3].flip_content}
			      	/>
			      	</div>

			      	<div className="three_card_btn">
				<NavLink className="primary-btn" to="/service">Learn More<span></span></NavLink>
				</div>

      	</div>
		</section>


		</>
		)
}

export default Flip_hover_data;