import React from "react";
import Banner from "../components/Banner";
import Right_image from "../components/Right_image";
import Three_cards_component_data from "../components/Three_cards_component_data";
import Client_component_data from "../components/Client_component_data";
import Call_component from "../components/Call_component";
import Pricing_component_data from "../components/Pricing_component_data";
import Tabbing_component from "../components/Tabbing_component";
import Counter_component from "../components/Counter_component";
import Newsletter_component from "../components/Newsletter_component";
import Contactform_component from "../components/Contactform_component";
import Blog_component_data from "../components/Blog_component_data";



const Home = () => {

  return (
      <>

      <Banner
      // bg_image="https://www.elegantthemes.com/layouts/wp-content/uploads/2017/12/home_01_a.jpg"
      top_heading="Do You Need Website ?"
      heading="This website is made by React js library"
      banner_content="This is Home Page"
      banner_one_btn="View Our Portfolio"
      banner_two_btn="Get Started"
       />

       <Right_image 
       top_small_heading="About HAS WEBSITES"
       heading="Has websites"
       contents_1="We know that websites take a lot of time, and are complicated.."
       li_1="We Value Relationships. Business is a By-Product."
       li_2="Integrity & Reliability is at the Core of Everything We Do."
       li_3="Work Smart. Think Smart."
       contents_2="Building a website is an exciting project one that takes great minds and great vision to accomplish. Thats why our process begins with you, the one who knows their business best and has had a vision for it from the start. Our design and development team becomes your team as we work together to create a website that encourages growth and strengthens your online presence."
       btnname="Learn More"
       imgsrc="https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
        />

      <Tabbing_component />


      

      <Call_component />

      

      <Three_cards_component_data />

      <Counter_component />

      <Pricing_component_data />

      

      <Newsletter_component />

      <Blog_component_data />

      <Client_component_data />

      <Contactform_component />



      
      
      </>
    );
};

export default Home;