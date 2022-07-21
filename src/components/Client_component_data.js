import React from "react";
import Client_component from "./Client_component";
import Client_component_api from "./Client_component_api";
import $ from 'jquery';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Client_component_data () {

	var settings = {
		
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 7,
      slidesToScroll: 4,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
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
			<section className="client_component text-align-center responsive-padding">
			<div className="container">
				<div class="general-heading ">
					<h4>We are fortunate to work with exceptional brands</h4>
					<h2>Our Clients</h2>
				</div>

				<Slider {...settings} class="clients d-flex ">
					
					<Client_component 
					imgsrc={Client_component_api[0].imgsrc}
			      	/>

			      	<Client_component 
					imgsrc={Client_component_api[1].imgsrc}
			      	/>

			      	<Client_component 
					imgsrc={Client_component_api[2].imgsrc}
			      	/>

			      	
			      	<Client_component 
					imgsrc={Client_component_api[5].imgsrc}
			      	/>

			      	<Client_component 
					imgsrc={Client_component_api[6].imgsrc}
			      	/>

			      	<Client_component 
					imgsrc={Client_component_api[7].imgsrc}
			      	/>

			      	<Client_component 
					imgsrc={Client_component_api[8].imgsrc}
			      	/>

			      	<Client_component 
					imgsrc={Client_component_api[9].imgsrc}
			      	/>

			      
			      	
		    </Slider>
				
		</div>
		</section>
		</>
		)
}

export default Client_component_data;