import Splide from '@splidejs/splide';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';

const trusted = new Splide( '.trusted_slider', {
  type   : 'loop',
  drag   : 'free',
  focus  : 'center',
  autoStart: true,
  arrows: false,
  pagination: false,
  autoWidth: true,
  autoScroll: {
    speed: .5,
  },
} );

trusted.mount( {AutoScroll} );