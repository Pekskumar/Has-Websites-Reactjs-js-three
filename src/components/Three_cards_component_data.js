import React from "react";
import Three_cards_component from "./Three_cards_component";
import Three_cards_component_api from "./Three_cards_component_api";
import { NavLink, Link} from "react-router-dom";
import Slider from "react-slick";
import $ from 'jquery';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Three_cards_component_data () {
	var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 2,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };


	return (
		<>
		<section className="include-section text-align-center responsive-padding team-bg">
				<div id="particles-js-four"></div>
				<div className="container">
				<div class="general-heading ">
					<h4>Meet the people who make awesome stuffs</h4>
					<h2>Our Team</h2>
				</div>
				<div className="three_cards_component d-flex  "  >

					<div className="single-person">
						<div className="person-image">
							<img src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80" alt="" />
							<span className="icon">
								<i className="fab fa-wordpress-simple"></i>
							</span>
						</div>
						<div className="person-info">
							<h3 className="full-name">Tina Houghton</h3>
							<span className="speciality">WordPress Developer</span>
						</div>
					</div>

					
					<div className="single-person">
						<div className="person-image">
							<img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80" alt="" />
							<span className="icon">
								<i className=" fab fa-react"></i>
							</span>
						</div>
						<div className="person-info">
							<h3 className="full-name">Jinny Won</h3>
							<span className="speciality">Web Developer</span>
						</div>
					</div>



					<div className="single-person">
						<div className="person-image">
							<img src="https://images.unsplash.com/photo-1480455624313-e29b44bbfde1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="" />
							<span className="icon">
								<i className="fab fa-html5"></i>
							</span>
						</div>
						<div className="person-info">
							<h3 className="full-name">John Doe</h3>
							<span className="speciality">Web Developer</span>
						</div>
					</div>

					

					<div className="single-person">
						<div className="person-image">
							<img src="https://images.unsplash.com/photo-1532170579297-281918c8ae72?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=884&q=80" alt="" />
							<span className="icon">
								<i className="fab fa-html5"></i>
							</span>
						</div>
						<div className="person-info">
							<h3 className="full-name">Jose Keys</h3>
							<span className="speciality">Quality Assurance</span>
						</div>
					</div>

					

				

					

			      	
				</div>
				
	</div>
      	
		</section>


		</>
		)
}

export default Three_cards_component_data;