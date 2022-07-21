jQuery(document).ready(function(){


 
	









 
  // Tabbing
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

 // Counter
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

  // Pricing Slider

  $('.pricingg').slick({
  dots: true,
  infinite: false,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 1,
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
      breakpoint: 800,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 700,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
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
});

  // Client Slider
  // $('.clients').slick({

  //       speed: 10000,
  //       autoplay: true,
  //       autoplaySpeed: 0,
  //       cssEase: 'linear',
  //       slidesToShow: 1,
  //       // slidesToScroll: 1,
  //       variableWidth: true

  //   });
  $('.clientss').slick({
  dots: true,
  infinite: true,

        autoplay: true,
  speed: 300,
  slidesToShow: 8,
  slidesToScroll: 1,
  dots: false,
  responsive: [
    {
      breakpoint: 1240,
      settings: {
        slidesToShow: 6,
        slidesToScroll: 1,
        infinite: true,
        
      }
    },
     {
      breakpoint: 800,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 639,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
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
});

  // Team Slider
  $('.three_cards_componentt').slick({
  dots: true,
  infinite: false,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1240,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
     {
      breakpoint: 800,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 639,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
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
});

  // Hide Header on on scroll down
var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $('.main-header').outerHeight();

$(window).scroll(function(event){
    didScroll = true;
});

setInterval(function() {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 250);

function hasScrolled() {
    var st = $(this).scrollTop();
    
    // Make sure they scroll more than delta
    if(Math.abs(lastScrollTop - st) <= delta)
        return;
    
    // If they scrolled down and are past the navbar, add class .nav-up.
    // This is necessary so you never see what is "behind" the navbar.
    if (st > lastScrollTop && st > navbarHeight){
        // Scroll Down
        $('.main-header').removeClass('nav-down').addClass('nav-up');
    } else {
        // Scroll Up
        if(st + $(window).height() < $(document).height()) {
            $('.main-header').removeClass('nav-up').addClass('nav-down');
        }
    }
    
    lastScrollTop = st;
}

  // Button
  $(function() {  
  $('.primary-btn')
    .on('mouseenter', function(e) {
      var parentOffset = $(this).offset(),
          relX = e.pageX - parentOffset.left,
          relY = e.pageY - parentOffset.top;
      $(this).find('span').css({top:relY, left:relX})
    })
    .on('mouseout', function(e) {
      var parentOffset = $(this).offset(),
          relX = e.pageX - parentOffset.left,
          relY = e.pageY - parentOffset.top;
      $(this).find('span').css({top:relY, left:relX})
    });
  // $('[href=#]').click(function(){return false});
});


  // Bottom to top buttom
  var btn = $('#buttonn');

$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});

 // 3D Cards
 const cards = document.querySelectorAll(".card");
// const onDocumentMouseMoveHandler = (evt) => {
//   evt.preventDefault();

//   requestAnimationFrame(() => {
//     if (!evt.target.closest('.card')) {
//       card.style.transform = 'perspective(1000px) scale(1) rotateX(0) rotateY(0)';
//     }
//   });
// };
// document.addEventListener('mousemove', onDocumentMouseMoveHandler)
cards.forEach((card) => {
  const height = card.clientHeight;
  const width = card.clientWidth;

  const mouseMoveHandler = (evt) => {
    evt.preventDefault();

    requestAnimationFrame(() => {
      const xRotation = -30 * ((evt.layerY - height / 2) / height);
      const yRotation = 20 * ((evt.layerX - width / 2) / width);

      card.style.transform = `perspective(1000px) scale(1.05) rotateX(${xRotation}deg) rotateY(${yRotation}deg)`;
    });
  };

  card.addEventListener("mousemove", mouseMoveHandler);

  card.addEventListener("mouseenter", (evt) => {
    evt.preventDefault();
    card.addEventListener("mousemove", mouseMoveHandler);
  });

  card.addEventListener("mouseout", (evt) => {
    evt.preventDefault();
    card.style.transform = "perspective(1000px) scale(1) rotateX(0) rotateY(0)";
    card.removeEventListener("mousemove", mouseMoveHandler);
  });
  
  card.addEventListener("click", (evt) => {
    evt.preventDefault();
    card.style.animation = "spin 1s ease-in-out";
    setTimeout(() => {      
      card.style.animation = '';
    }, 1000);
  });
});

   // Accordion
  jQuery(".accordion-title").on("click", function() {
      if (jQuery(this).hasClass("active")) {
        jQuery(this).removeClass("active");
        jQuery(this)
          .siblings(".accordion-content")
          .slideUp(200);      
      } else {            
        jQuery(".accordion-title").removeClass("active");
        jQuery(this).addClass("active");
        jQuery(".accordion-content").slideUp(200);
        jQuery(this)
          .siblings(".accordion-content")
          .slideDown(200);
      }
    });


















});


