import React from "react";
import Left_image_component from "./Left_image_component";
import Right_image from "./Right_image";


function Tabbing_component () {

	var tabLinks = document.querySelectorAll(".tablinks");
  var tabContent = document.querySelectorAll(".tabcontent");
  tabLinks.forEach(function(el) {
   el.addEventListener("click", openTabs);
 });
  function openTabs(el) {
   var btnTarget = el.currentTarget;
   var country = btnTarget.dataset.country;
   tabContent.forEach(function(el) {
    el.classList.remove("active");
  });
   tabLinks.forEach(function(el) {
    el.classList.remove("active");
  });
   document.querySelector("#" + country).classList.add("active");
   btnTarget.classList.add("active");
 }


	return (
		<>
		<section className="tabbing responsive-padding">
		
			<div className="container">
				<div class="general-heading text-align-center">
					<h4>THE UPGRADED SERVICES OF HAS WEBSITES</h4>
					<h2>SERVICES</h2>
				</div>
	<section id="wrapper">
		<div class="content">
			
			<div class="tabs">
				<button class="tablinks active" data-country="London"><i class="fas fa-chalkboard-teacher"></i><p data-title="UI/UX DESIGNING">UI/UX DESIGNING</p></button>
				<button class="tablinks" data-country="Madrid"><i class="fas fa-tasks"></i><p data-title="SEO DEVELOPMENT">SEO DEVELOPMENT</p></button>
				<button class="tablinks" data-country="Paris"><i class="fas fa-laptop-code"></i><p data-title="WEB DEVELOPMENT">WEB DEVELOPMENT</p></button>
				<button class="tablinks" data-country="Barcelona"><i class="fas fa-hat-wizard"></i><p data-title="GRAPHIC DESIGNING">GRAPHIC DESIGNING</p></button>
				<button class="tablinks" data-country="Domain"><i class="fas fa-server"></i><p data-title="DOMAIN/HOSTING">DOMAIN/HOSTING</p></button>
			</div>

			
			<div class="wrapper_tabcontent">

			<div id="London" class="tabcontent">
					<h3>UI/UX DESIGNING</h3>
					
					<Left_image_component 
       				top_small_heading="About UI/UX DESIGNING"
       				heading="UI/UX DESIGNING"
       				contents_1="The UI/UX of your website makes sure that your design is consistent with a beautiful user interface and a great user experience. Usability, functionality, and visualization are the three important factors of a website's design. Our design process starts with learning about our client and it help to convey your intended business message clearly with impact."
       				btnname="Learn More"
       				imgsrc="https://images.unsplash.com/photo-1553861542-15283bc1bcd2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=327&q=80"
      				/>
			</div>

			<div id="Madrid" class="tabcontent">
					<h3>SEO DEVELOPMENT</h3>
					
					<Right_image 
			       	top_small_heading="About SEO DEVELOPMENT"
			       	heading="SEO DEVELOPMENT"
			       	contents_1="The main aim of the search engine optimization is to get more traffic from diverse sources and to get repetitive visitors. SEO plays a crucial role in online business websites as well as other interactive sites. With regular update of content on website, SEO helps to get more traffic."
			       	btnname="Learn More"
			       	imgsrc="https://images.unsplash.com/photo-1599658880436-c61792e70672?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
			        />
			</div>

			<div id="Paris" class="tabcontent">
					<h3>WEB DEVELOPMENT</h3>
					<Left_image_component 
       				top_small_heading="About WEB DEVELOPMENT"
       				heading="WEB DEVELOPMENT"
       				contents_1="Website development is a way to make people aware of the services and/or products you are offering, understand why your products are relevant and even necessary for them to buy or use, and see which of your company's qualities set it apart from competitors. It is important to strive towards making your product as relatable and appealing as possible."
       				btnname="Learn More"
       				imgsrc="https://images.unsplash.com/photo-1605379399843-5870eea9b74e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=898&q=80"
      				/>
			</div>

			<div id="Barcelona" class="tabcontent">
					<h3>GRAPHIC DESIGNING</h3>
					<Right_image 
			       	top_small_heading="About GRAPHIC DESIGNING"
			       	heading="GRAPHIC DESIGNING"
			       	contents_1="Graphic Design is the development of visual communications that resonate with a specific target audience with an objective to create awareness, shape perceptions, increase market share, and elevate brands. design has always played an important role around society and the individual as it affects cultural identity, social structures, economies, cultural development and environments."
			       	btnname="Learn More"
			       	imgsrc="https://images.unsplash.com/photo-1529767203443-a617595c8825?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
			        />
			</div>

			<div id="Domain" class="tabcontent active">
					<h3>DOMAIN/HOSTING</h3>
					<Left_image_component 
       				top_small_heading="About DOMAIN/HOSTING"
       				heading="DOMAIN/HOSTING"
       				contents_1="While doing this domain registration make sure your domain name related to your company name and their products and services, domain registration company in ahmedabadalso which is easy to remember for your customers. Your domain name search ends here, We are providing the list of domain names which is most common domain extensions like .com, .net, .org, .co.in, .in, Domain name is playing important role to spread your business globally. We are providing the Domains for your Company Name. We provide lowest price in domain registration. We are providing indian domain names as well as international domain names like .us, .co.uk, .au.com, .cn, .ca, etc."
       				btnname="Learn More"
       				imgsrc="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
      				/>

				</div>


				

				

				

				
			</div>
		</div>
	</section>
	</div>
	</section>
		</>
		)
}
export default Tabbing_component;