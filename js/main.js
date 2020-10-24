/* logo hide on scroll */
var maxVisibleOffset = 105;
var logo = document.getElementById("smalogo");
window.onscroll = function() {
	var currOffset = window.pageYOffset;
	if(currOffset > maxVisibleOffset) {
		if(logo.style.height !== "4.5vh")
			logo.style.height = "4.5vh"
	}
	else if(currOffset < maxVisibleOffset) {
		if(logo.style.height !== "0")
			logo.style.height = "0";
	}
}

/* tabs */
function showTab(tabNumId) {
	/* needs update */
	var tabsList = [document.getElementById('web-window'), 
		document.getElementById('mobile-window')];
	tabsList.forEach(function(item, index) {
		if(index === tabNumId) {
			tabsList[index].className = tabsList[index].className.replace(" tab-hidden", " tab-show");
			tabsList[index].style.display = 'block';
		} else {
			tabsList[index].class = tabsList[index].className.replace(" tab-show", " tab-hidden");
			tabsList[index].style.display = 'none';
		}
	});
}




$(document).ready(function () {
  $(window).scroll(function () {


    // scroll-up button show/hide script
    if (this.scrollY > 500) {
      $('.scroll-up-btn').addClass("show");
    } else {
      $('.scroll-up-btn').removeClass("show");
    }
  });

  // slide-up script
  $('.scroll-up-btn').click(function () {
    $('html').animate({ scrollTop: 0 });
    // // removing smooth scroll on slide-up button click
    // $('html').css("scrollBehavior", "auto");
  });


  // owl carousel script
  $('.carousel').owlCarousel({
    margin: 20,
    loop: true,
    autoplayTimeOut: 2000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
        nav: false
      },
      600: {
        items: 2,
        nav: false
      },
      1000: {
        items: 3,
        nav: false
      }
    }
  });
});
