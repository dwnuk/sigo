import {
  gsap
} from "gsap";




const headWrapper = document.querySelector('.header__wrapper');
const headArrow = document.querySelector('.header__arrow');
const headTxt = document.querySelector('.header-txt');
const headHead = document.querySelector('.header-heading');


gsap.to(headWrapper, {
  delay: 1.3,
  height: 'auto',
});

var part1 = gsap.timeline();
part1.from(headArrow, {
  delay: .5,
  duration: .75,
  position: 'absolute',
  bottom: '15px',
  ease: "power3.out",
  left: 0,
  y: 0,
  height: '45px',
  width: '45px'
});
part1.to(headArrow, {
  duration: 0,
  position: 'static',
  y: 0,

});


var part2 = gsap.timeline();
part2.to(headTxt, {
  delay: 1.25,
  duration: .25,
  opacity: 1,
  scale: 1,
});
part2.to(headHead, {
  scale: 1,
  duration: .25,
});


