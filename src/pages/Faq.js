import React from "react";
import Banner from "../components/Banner";
import $ from "jquery";
import { NavLink } from "react-router-dom";

$(document).ready(function(){
	$(".accordion-content:first").css("display", "block");
  	$(".accordion-title").click(function () {
	  $(this).next().slideToggle(500);
	  $(".accordion-content").not($(this).next()).slideUp(500);
	});

  });
function Faq () {
	return(
		<>
		<Banner 
		// top_heading="WELCOME Terms Condition"
		heading="FAQ"
		banner_content="THIS WEBSITE IS MADE BY REACT JS LIBRARY"
		banner_one_btn="View Our Portfolio"
		banner_two_btn="Get Started"
		/>

		<section className="responsive-padding">
		<div className="container">
			<div class="general-heading text-align-center">
					<h4>Subscribe To Our newsletter</h4>
					<h2>faq</h2>
			</div>
			<div class="accordion-main-part">
				<div class="accordion-row">
					<div class="accordion-title">
						<div class="acc-title">
                          	<h4>Lorem ipsum dolor sit amet, consectetur?</h4>
                         </div>
						<i class="plus-icon"></i>
					</div>
					<div class="accordion-content">
						<p>Praesent nisi purus, tristique in gravida vitae, lobortis at justo. Morbi tempor condimentum felis, malesuada mattis nibh pulvinar nec. Quisque sit amet felis varius leo rutrum maximus vitae eu mauris. Nullam interdum nulla ut purus dictum, non sollicitudin enim semper.</p>
					</div>
				</div>
				<div class="accordion-row">
					<div class="accordion-title">
						<div class="acc-title">
                          	<h4>Duis ut molestie orci. Proin non risus a nunc efficitur vestibulum?</h4>
                         </div>
						<i class="plus-icon"></i>
					</div>
					<div class="accordion-content">
						<p>Duis turpis leo, ultrices eget tristique non, volutpat et nibh. Integer ut nibh non lorem tincidunt eleifend at ornare lacus. Donec sed finibus puru.</p>
					</div>
				</div>
				<div class="accordion-row">
					<div class="accordion-title">
						<div class="acc-title">
                          	<h4>Pellentesque interdum eu nunc et feugiat. Fusce id mauris at ipsum?</h4>
                         </div>
						<i class="plus-icon"></i>
					</div>
					<div class="accordion-content">
						<p>Mauris eget vulputate dui. Donec mattis, sem id elementum mattis, dui quam placerat ante, id porta turpis turpis ac nulla. In neque risus, dictum quis lorem quis.</p>
					</div>
				</div>
				<div class="accordion-row">
					<div class="accordion-title">
						<div class="acc-title">
                          	<h4>Vivamus condimentum aliquam massa, vel suscipit nisi tempus at?</h4>
                         </div>
						<i class="plus-icon"></i>
					</div>
					<div class="accordion-content">
						<p>Aenean ornare eu neque et efficitur. Mauris non felis ut libero semper pretium. Morbi sit amet lacus dictum, pharetra orci a, facilisis mi. Donec in arcu varius, cursus lacus id, eleifend risus. Duis rutrum quam quis orci tincidunt tempor. Mauris magna metus, pellentesque id semper vitae.</p>
					</div>
				</div>
				<div class="accordion-row">
					<div class="accordion-title">
						<div class="acc-title">
                          	<h4>Nunc commodo, diam ut bibendum venenatis?</h4>
                         </div>
						<i class="plus-icon"></i>
					</div>
					<div class="accordion-content">
						<p>Phasellus ut justo vulputate sapien dapibus condimentum eu at nisi. Praesent tellus sapien, euismod ac blandit sed, sagittis in dui.</p>
					</div>
				</div>
				<div class="accordion-row">
					<div class="accordion-title">
						<div class="acc-title">
                          	<h4>Ut in ex quis purus finibus consectetur et ac enim?</h4>
                         </div>
						<i class="plus-icon"></i>
					</div>
					<div class="accordion-content">
						<p> Pellentesque tristique varius bibendum. Morbi a dui nec mauris venenatis eleifend quis non quam. Donec at risus convallis, accumsan ex sed, mollis turpis. Ut ultricies ex sem, at viverra elit pretium vel. Pellentesque in velit ultrices, euismod arcu nec, aliquet diam. </p>
					</div>
				</div>
			</div>
		</div>
		</section>
		</>
		)
}

export default Faq;