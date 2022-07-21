import React from 'react';
import Banner from "../components/Banner";
import Right_image from "../components/Right_image";
import Blog_component_data from "../components/Blog_component_data";
import Client_component_data from "../components/Client_component_data";
import Contactform_component from "../components/Contactform_component";
import Tabbing_component from "../components/Tabbing_component";

const Services = () => {
	return (
		<>
		<Banner 
		top_heading="WELCOME to Services PAGE"
		heading="Our Services"
		banner_content="THIS WEBSITE IS MADE BY REACT JS LIBRARY"
		banner_one_btn="View Our Portfolio"
		banner_two_btn="Get Started"
		/>

		<Right_image 
       top_small_heading="About services"
       heading="Our services"
       contents_1="We know that websites take a lot of time, and are complicated.."
       li_1="We Value Relationships. Business is a By-Product."
       li_2="Integrity & Reliability is at the Core of Everything We Do."
       li_3="Work Smart. Think Smart."
       contents_2="Building a website is an exciting project one that takes great minds and great vision to accomplish. Thats why our process begins with you, the one who knows their business best and has had a vision for it from the start. Our design and development team becomes your team as we work together to create a website that encourages growth and strengthens your online presence."
       btnname="Learn More"
       imgsrc="https://images.pexels.com/photos/209151/pexels-photo-209151.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        />

        <Tabbing_component />

        <Blog_component_data />

        

        <Client_component_data />
		 
		 <Contactform_component />
		 </>
		);
};

export default Services;