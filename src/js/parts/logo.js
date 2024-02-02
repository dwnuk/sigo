import {
  gsap
} from "gsap";

import {
  ScrollTrigger
} from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const logo = document.querySelector('.logo');
const logoS = document.querySelector('.logo-s');
const logoI = document.querySelector('.logo-i');
const logoG = document.querySelector('.logo-g');
const logoOstudio = document.querySelector('.logo-ostudio');






window.addEventListener("scroll", function () {
  var scrollPosition = window.scrollY;

  // Define the scroll threshold
  var scrollThreshold = 0;



  // Change color when scrolling down
  if (scrollPosition > scrollThreshold) {


    // gsap.to(logo, {
    //  height: '42px',
    // });



    gsap.to(logoI, {
      opacity: 0,
      y: -100,
      maxWidth: '0',

      duration: .25,
    });

    gsap.to(logoOstudio, {
      opacity: 0,
      maxWidth: '0',
      duration: .5,
    });


  } else if (scrollPosition == scrollThreshold) {
    // Change color back when scrolling up
    gsap.to(logoI, {
      opacity: 1,
      y: 0,

      maxWidth: '100%',
      duration: 1,
    });



    gsap.to(logoOstudio, {
      opacity: 1,
      maxWidth: '100%',
      duration: 1,
    });
  }
});