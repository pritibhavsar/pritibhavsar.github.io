import Swiper from 'swiper';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const testimonialSwiper = new Swiper('.testimonial-carousel', {
  modules: [Navigation],

  slidesPerView: 1,
  spaceBetween: 30,

  // Navigation arrows
  navigation: {
    nextEl: '.testimonial-button-next',
    prevEl: '.testimonial-button-prev',
  },

  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    1280: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
});

const useCaseSwiper = new Swiper('.usecase-carousel', {
  modules: [Navigation, Autoplay],
  slidesPerView: 1,
  spaceBetween: 24,
  loop: true,
  speed: 700,
  autoplay: {
    delay: 3200,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  },
  navigation: {
    nextEl: '.usecase-button-next',
    prevEl: '.usecase-button-prev',
  },
});
