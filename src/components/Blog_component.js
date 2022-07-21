import React from "react";
import { NavLink, Link} from "react-router-dom";

function Blog_component (props) {
	return (
		<>
		 			<div class="overlay">
    					<div class="card">
    						<img src={props.imgsrc} />
    						<div className="cards-content">
    						<div class="card__content">{props.card_heading}</div>
      						<div class="card__title">{props.card_content}</div>
      						<NavLink className="primary-btn" to="+918866808798">{props.btn_name}<span></span></NavLink>
      						</div>
    					</div>
 					</div>
 					
			
		</>
		)
}
export default Blog_component;