import React from "react";
import $ from 'jquery';

function Counter_component () {

   function inVisible(element) {
  //Checking if the element is
  //visible in the viewport
  var WindowTop = $(window).scrollTop();
  var WindowBottom = WindowTop + $(window).height();
  var ElementTop = element.offset().top;
  var ElementBottom = ElementTop + element.height();
  //animating the element if it is
  //visible in the viewport
  if ((ElementBottom <= WindowBottom) && ElementTop >= WindowTop)
    animate(element);
}

function animate(element) {
  //Animating the element if not animated before
  if (!element.hasClass('ms-animated')) {
    var maxval = element.data('max');
    var html = element.html();
    element.addClass("ms-animated");
    $({
      countNum: element.html()
    }).animate({
      countNum: maxval
    }, {
      //duration 5 seconds
      duration: 5000,
      easing: 'linear',
      step: function() {
        element.html(Math.floor(this.countNum) + html);
      },
      complete: function() {
        element.html(this.countNum + html);
      }
    });
  }

}

//When the document is ready
$(function() {
  //This is triggered when the
  //user scrolls the page
  $(window).scroll(function() {
    //Checking if each items to animate are 
    //visible in the viewport
    $("h2[data-max]").each(function() {
      inVisible($(this));
    });
  })
});

	return (
		<>
			<section className=" responsive-padding">
			<div className="container">
				<div class="general-heading text-align-center">
					<h4>Some cool facts</h4>
					<h2>Projects statistics</h2>
				</div>
					
  <div class="counter d-flex">
    <div class="count-happy text-align-center">
      <i class="fas fa-smile"></i>
      <h2 data-max="8"></h2>
      <h5>Happy Customers</h5>
    </div>
    <div class="count-happy text-align-center">
      <i class="fa fa-code"></i>
      <h2 data-max="32680">+</h2>
      <h5>Lines of code</h5>
    </div>
    <div class="count-happy text-align-center">
      <i class="fa fa-briefcase"></i>
      <h2 data-max="12">+</h2>
      <h5>Projects Done</h5>
    </div>
    <div class="count-happy text-align-center">
      <i class="fas fa-user-tie"></i>
      <h2  id="test" data-max="7"></h2>
      <h5>Developers</h5>
    </div>
  </div>


			</div>
			</section>
		</>
		)
}
export default Counter_component;