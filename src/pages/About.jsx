import React from "react";
import Banner from "../components/Banner";
import Left_image_component from "../components/Left_image_component";
import Contactform_component from "../components/Contactform_component";
import Three_cards_component_data from "../components/Three_cards_component_data";

import Counter_component from "../components/Counter_component";

const About = () => {
	return (
		<>
		<Banner top_heading="Welcome About Page"
		heading="About Us"
		banner_content="THIS WEBSITE IS MADE BY REACT JS LIBRARY"
		banner_one_btn="View Our Portfolio"
		banner_two_btn="Get Started"
		/>

		<Left_image_component 
       top_small_heading="About HAS WEBSITES"
       heading="ABOUT US"
       contents_1="We know that websites take a lot of time, and are complicated.."
       li_1="We Value Relationships. Business is a By-Product."
       li_2="Integrity & Reliability is at the Core of Everything We Do."
       li_3="Work Smart. Think Smart."
       contents_2="Building a website is an exciting project one that takes great minds and great vision to accomplish. Thats why our process begins with you, the one who knows their business best and has had a vision for it from the start. Our design and development team becomes your team as we work together to create a website that encourages growth and strengthens your online presence."
       btnname="Learn More"
       imgsrc="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
      />

      <div class="bg-gradient_solid responsive-padding">
  <div class="container">
    <div class="section-header">
    <div class="general-heading ">
          <h4>Etiam scelerisque felis</h4>
          <h2>Our story</h2>
        </div>
      
      
    </div>
    <div class="steps">
      <div class="steps-container">
        <div class="content">
          <h2>Morbi pellentesque </h2>
          <p>Vivamus dapibus elit nisl. Etiam scelerisque felis tellus, nec dignissim turpis auctor nec. Pellentesque sit amet velit blandit, tincidunt magna quis, malesuada urna.</p>
        </div>
        <i class="step-line"></i>
        <div class="date">2017</div>
      </div>
      <div class="steps-container">
       <div class="content">
          <h2>Duis hendrerit </h2>
          <p>Ut risus justo, porttitor vitae purus at, viverra tincidunt nibh. Morbi pellentesque condimentum sapien, sagittis mattis odio. Nulla facilisi. Aliquam venenatis aliquam congue.</p>
        </div>
        <i class="step-line"></i>
        <div class="date">2018</div>
      </div>
      <div class="steps-container">
        <div class="content">
          <h2>Pellentesque sit</h2>
          <p>Vivamus dapibus elit nisl. Etiam scelerisque felis tellus, nec dignissim turpis auctor nec. Pellentesque sit amet velit blandit, tincidunt magna quis, malesuada urna.</p>
        </div>
        <i class="step-line"></i>
        <div class="date">2019</div>
      </div>
      <div class="steps-container">
        <div class="content">
          <h2>Sed lectus lorem</h2>
          <p>Nulla pulvinar id metus sit amet maximus. Integer sed congue dui. Aliquam interdum sem felis, eu tincidunt nunc posuere vel. </p>
        </div>
        <i class="step-line"></i>
        <div class="date">2020</div>
      </div>
      <div class="steps-container">
        <div class="content">
          <h2> Aenean in odio</h2>
          <p>Ut risus justo, porttitor vitae purus at, viverra tincidunt nibh. Morbi pellentesque condimentum sapien, sagittis mattis odio. Nulla facilisi. Aliquam venenatis aliquam congue.</p>
        </div>
        <i class="step-line"></i>
        <div class="date">2021</div>
      </div>
      <div class="steps-container">
        <div class="content">
          <h2> Mauris nibh</h2>
          <p> Sed fermentum ex interdum, congue sem ac, commodo dolor. Mauris nibh eros, pulvinar sed ex vel, gravida sollicitudin velit. Vestibulum ante ipsum primis in faucibus.</p>
        </div>
        <i class="step-line"></i>
        <div class="date">2022</div>
      </div>
    </div>
  </div>
</div>



  <Three_cards_component_data />

  <Counter_component />

  



  <Contactform_component />

		
			
		</>
		);
};
export default About;