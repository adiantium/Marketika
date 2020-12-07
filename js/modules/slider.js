import {
  tns
} from "/node_modules/tiny-slider/src/tiny-slider";

function slider() {

  const boxSlider = document.querySelector('.section-price__box');
  console.log(boxSlider);
  console.log('dasds');

  $('section-price__box').slick({
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 2
  });

}
export default slider;