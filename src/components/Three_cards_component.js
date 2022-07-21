import React from "react";

function Three_cards_component (props) {
	return (
		<>
			

			<div className="single-person">
						<div className="person-image">
							<img src={props.imgsrc} alt="" />
							<span className="icon">
								<i className="fab fa-html5"></i>
							</span>
						</div>
						<div className="person-info">
							<h3 className="full-name">John Doe</h3>
							<span className="speciality">Web Developer</span>
						</div>
					</div>
		</>
		)
}

export default Three_cards_component;