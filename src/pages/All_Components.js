import React from "react";
import Banner from "../components/Banner";
import Right_image from "../components/Right_image";
import Left_image_component from "../components/Left_image_component";
import Flip_hover_data from "../components/Flip_hover_data";
import Three_cards_component_data from "../components/Three_cards_component_data";
import Client_component_data from "../components/Client_component_data";
import Call_component from "../components/Call_component";
import Pricing_component_data from "../components/Pricing_component_data";
import Tabbing_component from "../components/Tabbing_component";
import Counter_component from "../components/Counter_component";
import Newsletter_component from "../components/Newsletter_component";
import Contactform_component from "../components/Contactform_component";
import Blog_component_data from "../components/Blog_component_data";


const All_Components = () => {

  return (
      <>

      <Banner
      bg_image="https://www.elegantthemes.com/layouts/wp-content/uploads/2017/12/home_01_a.jpg"
      top_heading="This is Home Page"
      heading="Has Websites"
      banner_content="You are in the Home us page."
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
       imgsrc="./images/footer-projects/ft (8).jpg"
      />

       <Right_image 
       top_small_heading="About HAS WEBSITES"
       heading="ABOUT US"
       contents_1="We know that websites take a lot of time, and are complicated.."
       li_1="We Value Relationships. Business is a By-Product."
       li_2="Integrity & Reliability is at the Core of Everything We Do."
       li_3="Work Smart. Think Smart."
       contents_2="Building a website is an exciting project one that takes great minds and great vision to accomplish. Thats why our process begins with you, the one who knows their business best and has had a vision for it from the start. Our design and development team becomes your team as we work together to create a website that encourages growth and strengthens your online presence."
       btnname="Learn More"
       imgsrc="./images/footer-projects/ft (6).jpg"
        />

      <Tabbing_component />


      <Flip_hover_data />

      <Call_component />

      

      <Three_cards_component_data />+

      <Counter_component />

      <Pricing_component_data />

      <Newsletter_component />

      <Client_component_data />
      <Blog_component_data />
      <Contactform_component />

      
      <h1>All_Components</h1>
      
      </>
    )
};

export default All_Components;