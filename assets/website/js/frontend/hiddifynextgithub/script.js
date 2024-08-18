(function ($) {

  "use strict";

  var countdownTimer = function() {
    function getTimeRemaining(endtime) {
      const total = Date.parse(endtime) - Date.parse(new Date());
      const seconds = Math.floor((total / 1000) % 60);
      const minutes = Math.floor((total / 1000 / 60) % 60);
      const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
      const days = Math.floor(total / (1000 * 60 * 60 * 24));
      return {
        total,
        days,
        hours,
        minutes,
        seconds
      };
    }

    function initializeClock(id, endtime) {
      const clock = document.getElementById(id);
      const daysSpan = clock.querySelector('.days');
      const hoursSpan = clock.querySelector('.hours');
      const minutesSpan = clock.querySelector('.minutes');
      const secondsSpan = clock.querySelector('.seconds');

      function updateClock() {
        const t = getTimeRemaining(endtime);
        daysSpan.innerHTML = t.days;
        hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
        minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
        secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);
        if (t.total <= 0) {
          clearInterval(timeinterval);
        }
      }
      updateClock();
      const timeinterval = setInterval(updateClock, 1000);
    }

    $('#countdown-clock').each(function(){
      const deadline = new Date(Date.parse(new Date()) + 28 * 24 * 60 * 60 * 1000);
      initializeClock('countdown-clock', deadline);
    });
  }

  var initScrollSpy = function() {
    
    /** Scroll Spy */
    const links = document.querySelectorAll(".scrollspy-link a");
    const sections = document.querySelectorAll(".scrollspy-section");
    const indicator = document.querySelector(".scrollspy-indicator");

    /*
    links.forEach((link) => {
      link.onclick = () => {
        sections.forEach((section) => {
          if (link.dataset.target === section.id) {
            document.documentElement.scrollTop = section.offsetTop;
          }
        });
      };
    });
    */

    window.onscroll = () => scrollspy();
    window.onload = () => scrollspy();
    window.onresize = () => scrollspy();

    const scrollspy = () => {
      const pageYPosition = document.documentElement.scrollTop || document.body.scrollTop;
      sections.forEach((section) => {
        const sectionYPosition = section.offsetTop;

        if (pageYPosition > sectionYPosition - 20) { // - 160 - 150
          links.forEach((link) => {
            // console.log(link.dataset.target + '===' + section.id);
            if (link.dataset.target === section.id) {
              indicator.style.left = `${link.closest('.scrollspy-link').offsetLeft}px`;
              indicator.style.width = `${link.closest('.scrollspy-link').offsetWidth}px`;
            }
          });
        }
      });
    };

    scrollspy();
  }

  var initSlider = function () {

    $('.swiper').each(function(){

      var swiper = new Swiper(".review-swiper", {
        slidesPerView: 3,
        spaceBetween: 30,
        freemode: true,
        pagination: {
          el: "#testimonials .swiper-pagination",
          clickable: true,
        },
        breakpoints: {
          0: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          767: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1299: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
        },
      });
  
      var swiper = new Swiper(".product-swiper", {
        slidesPerView: 3,
        spaceBetween: 30,
        pagination: {
          el: "#our-products .swiper-pagination",
          clickable: true,
        },
        breakpoints: {
          0: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          575: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1299: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
        },
      });
  
      var swiper = new Swiper(".product-slideshow", {
        slidesPerView: 1,
        spaceBetween: 20,
        pagination: {
          el: ".product-slideshow .swiper-pagination",
          clickable: true,
        },
        breakpoints: {
          0: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          575: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          1299: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
        },
      });

    });

  };

  var initScrollNav = function () {
    var scroll = $(window).scrollTop();
    var textColor = $('.site-header').data("text-color");
    
    if (scroll >= 200) {
      $('.site-header.position-fixed').addClass("bg-white").removeClass("text-white").addClass("text-dark");
    } else {
      $('.site-header.position-fixed').removeClass("bg-white").removeClass("text-dark").addClass("text-"+textColor);
    }
  }

  // init jarallax parallax
  var initJarallax = function() {
    jarallax(document.querySelectorAll(".jarallax"));

    jarallax(document.querySelectorAll(".jarallax-keep-img"), {
      keepImg: true,
    });
  }

  $(window).scroll(function () {
    initScrollNav();
  });

  $(document).ready(function () {

    $(".youtube").colorbox({
      iframe: true,
      innerWidth: 960,
      innerHeight: 585
    });

    // document ready
    $(document).ready(function () {
      initScrollNav();
      initScrollSpy();
      initSlider();
      countdownTimer();
      initJarallax();

      AOS.init({
        duration: 1200,
        once: true,
      })
    }); // document ready

  }); // End of a document

})(jQuery);