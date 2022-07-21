import React from "react";
import Banner from "../components/Banner";
import Left_image_component from "../components/Left_image_component";
import Contactform_component from "../components/Contactform_component";
// import Flip_hover_data from "../components/Flip_hover_data";
import Pricing_component_data from "../components/Pricing_component_data";
import Client_component_data from "../components/Client_component_data";

const Portfolio = () => {
	return (
		<>
		<Banner 
		top_heading="WELCOME to Portfolio PAGE"
		heading="Our Portfolio"
		banner_content="THIS WEBSITE IS MADE BY REACT JS LIBRARY"
		banner_one_btn="View Our Portfolio"
		banner_two_btn="Get Started"
		/>

		<Left_image_component 
       top_small_heading="About portfolio"
       heading="our works"
       contents_1="We know that websites take a lot of time, and are complicated.."
       li_1="We Value Relationships. Business is a By-Product."
       li_2="Integrity & Reliability is at the Core of Everything We Do."
       li_3="Work Smart. Think Smart."
       contents_2="Building a website is an exciting project one that takes great minds and great vision to accomplish. Thats why our process begins with you, the one who knows their business best and has had a vision for it from the start. Our design and development team becomes your team as we work together to create a website that encourages growth and strengthens your online presence."
       btnname="Learn More"
       imgsrc="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
      />

      {/* <Flip_hover_data /> */}

      <Pricing_component_data />

      <Client_component_data />


      <Contactform_component />
		
		</>
		);
};

export default Portfolio;
