import React  from "react";

function Flip_hover (props) {

return (
		<>
		
				
						<div className="include-contant">
						<figure>
							<img src={props.imgsrc} /></figure>
							<div className="include-data">
							<h4>{props.flip_heading}</h4>
							<p>{props.flip_content}</p>
							</div>
						</div>
				
			
		</>
		);
	};

	export default Flip_hover;