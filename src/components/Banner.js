import React from "react";

import { NavLink, Link} from "react-router-dom";

function Banner(props) {

  return (
    <>
    
    <section className="banner-section"  >
     <div className='box-two'>
  <div className='wave -one'></div>
  <div className='wave -two'></div>
  <div className='wave -three'></div>
</div>
      <div className="container">
        <div className="banner-contant">
          <h3>{props.top_heading}</h3>
          <h1>{props.heading }</h1>
          <p>{props.banner_content}</p>
            <div className="banner-btn-box">
              <NavLink className="primary-btn" to={"/portfolio"}>{props.banner_one_btn}<span></span></NavLink>
              <NavLink className="primary-btn" to="/service">{props.banner_two_btn}<span></span></NavLink>
            </div>
        </div>
      </div>
    </section>

   

    </>
    );
  };

  export default Banner;