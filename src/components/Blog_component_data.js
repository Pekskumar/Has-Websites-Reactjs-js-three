import React from "react";
import Blog_component from "./Blog_component";
import Blog_component_api from "./Blog_component_api";
import { NavLink, Link} from "react-router-dom";

function Blog_component_data () {
	return (
		<>
			<section className="responsive-padding pirates-bg">
			<div id="particles-js-two"></div>
			<div className="container">
				<div className="general-heading text-align-center">
					<h4>London Web Design Agency</h4>
					<h2>Has Blog</h2>
				</div>
				<div className="3d-cards d-flex">
					


 					<Blog_component 
					imgsrc={Blog_component_api[0].imgsrc}
					card_heading={Blog_component_api[0].card_heading}
					card_content={Blog_component_api[0].card_content}
					btn_name={Blog_component_api[0].btn_name}
			      	/>

			      	<Blog_component 
					imgsrc={Blog_component_api[1].imgsrc}
					card_heading={Blog_component_api[1].card_heading}
					card_content={Blog_component_api[1].card_content}
					btn_name={Blog_component_api[1].btn_name}
			      	/>

			      	<Blog_component 
					imgsrc={Blog_component_api[2].imgsrc}
					card_heading={Blog_component_api[2].card_heading}
					card_content={Blog_component_api[2].card_content}
					btn_name={Blog_component_api[2].btn_name}
			      	/>

			      	<Blog_component 
					imgsrc={Blog_component_api[3].imgsrc}
					card_heading={Blog_component_api[3].card_heading}
					card_content={Blog_component_api[3].card_content}
					btn_name={Blog_component_api[3].btn_name}
			      	/>

			      	<Blog_component 
					imgsrc={Blog_component_api[4].imgsrc}
					card_heading={Blog_component_api[4].card_heading}
					card_content={Blog_component_api[4].card_content}
					btn_name={Blog_component_api[4].btn_name}
			      	/>

			      	<Blog_component 
					imgsrc={Blog_component_api[5].imgsrc}
					card_heading={Blog_component_api[5].card_heading}
					card_content={Blog_component_api[5].card_content}
					btn_name={Blog_component_api[5].btn_name}
			      	/>
					

			      	
		
				</div>
		</div>
		</section>
		</>
		)
}

export default Blog_component_data;