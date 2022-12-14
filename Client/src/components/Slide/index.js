import { useSelector } from 'react-redux';
import { MdOutlineNavigateNext, MdNavigateBefore } from 'react-icons/md';
import { React } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper';

import getRandomSlideItem from '../../selectors/randomSlide';
import './style.scss';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
// import required modules
import SlideItem from './SlideItem';

function Slide() {
  const product = useSelector((state) => state.products.listProducts);
  // I use the selector function to get a shuffled array
  const shuffledArray = getRandomSlideItem(product);

  const sliderSettings = {
    0: {
      slidesPerView: 1,
      spaceBetween: 30,
    },
    680: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  };

  return (
    <section>
      {/* Slide made with SwiperJS */}

      <Swiper
        loop
        navigation={{
          nextEl: '.slide__button-next',
          prevEl: '.slide__button-prev',
        }}
        breakpoints={sliderSettings}
        spaceBetween={80}
        slidesPerView={3}
        grabCursor
        modules={[Pagination, Navigation]}
        className="mySwiper0"

      >
        {/* For each element of the suffled array, I create a slide */}
        {shuffledArray.map((shuffledProduct) => (
          <SwiperSlide
            key={shuffledProduct.id}
            className="swiper-slide"
          >
            <SlideItem
              {...shuffledProduct}
              className="swiper-slide__slide"
            />
          </SwiperSlide>
        ))}
      </Swiper>
      {/* bouton de slider  */}
      <button
        type="button"
        className="slide__button slide__button-prev"
      >
        <MdNavigateBefore
          className="slide__button--icon"
          style={{ color: '#ADC178', fontSize: '6em' }}
        />
      </button>
      <button
        type="button"
        className="slide__button slide__button-next"
      >
        <MdOutlineNavigateNext
          className="slide__button--icon"
          style={{ color: '#ADC178', fontSize: '6em' }}
        />
      </button>

    </section>
  );
}

export default Slide;
