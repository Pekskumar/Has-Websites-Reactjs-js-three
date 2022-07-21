import React from "react";
import {NavLink} from "react-router-dom";

function
Contactform_component () {
	return (
		<>
		<section className="newsletter responsive-padding penguin-bg">
			{/* <div className="circles">
  <div className="circle1"></div>
  <div className="circle2"></div>
  <div className="circle3"></div>
</div> */}
			<div className="container">
				<div class="general-heading text-align-center">
					<h4>We'd love to hear from you!</h4>
					<h2>contact us</h2>
				</div>
				<form id="contact-form" className="d-flex justify-space-between">
					<div className="form-group full">
						<input type="text" Placeholder="Full Name*" required />
					</div>
					<div className="form-group left">
						<input type="text" Placeholder="Email*" required/>
					</div>
					<div className="form-group right">
						<input type="text" Placeholder="Mobile Number*" required/>
					</div>
					
					<div className="form-group full ">
					<div class="checkbox-one">
					<p>You might’ve heard the term Headless CMS :</p>
						<input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
						  <label for="vehicle1"> I have a bike</label>
						 </div>
						 <div class="checkbox-one">
						  <input type="checkbox" id="vehicle2" name="vehicle2" value="Car" />
						  <label for="vehicle2"> I have a car</label>
						  </div>
						  <div class="checkbox-one">
						  <input type="checkbox" id="vehicle3" name="vehicle3" value="Boat" />
						  <label for="vehicle3"> I have a boat</label>	
						  </div>
					</div>
					<div className="form-group full">
						<textarea placeholder="How can we help you ?*" required></textarea>
					</div>
					<div className="form-group full">
					<div class="checkbox-one">
						<input type="checkbox" id="terms" name="vehicle3" value="Boat" />
						<label for="terms"> I agree to the <NavLink to="/terms_condition">Terms & Conditions</NavLink> and <NavLink to="/privacy_policy"> Privacy Policy </NavLink> and allow HAS WEBSITES to contact me via email or phone call.</label>	
					</div>
					</div>
					<div className="form-group full text-align-center">
						<NavLink className="primary-btn" to="/About">Submit<span></span></NavLink>
					</div>



				</form>
			</div>
		</section>


		


		</>
	)
}
export default Contactform_component;