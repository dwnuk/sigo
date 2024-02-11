import Splide from '@splidejs/splide';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';

var arrow = new Splide( '.header__arrow__slider', {
  type   : 'fade',
 rewind: true,
 arrows: false,
  pagination: false,
  autoplay: true,
  perPage: 1,
  speed: 2000,
  pauseOnHover: false,


} );

arrow.mount();

const trusted = new Splide( '.trusted_slider', {
  type   : 'loop',
  drag   : 'free',
  focus  : 'center',

  arrows: false,
  pagination: false,
  autoWidth: true,
  autoScroll: {
    speed: 1,
  },
} );

trusted.mount( { AutoScroll } );


