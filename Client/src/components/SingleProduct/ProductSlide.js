import React, { useRef, useState } from "react";
import PropTypes from 'prop-types';

import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import "./style.scss";

// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper";

function ProductSlide({product}) {
  const { image, nom } = product
  const imageArray = image
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <div className="singleProduct__div">
    <Swiper
      style={{
        "--swiper-navigation-color": "#fff",
        "--swiper-pagination-color": "#fff",
      }}
      loop={true}
      slidesPerView={1}
      thumbs={{ swiper: thumbsSwiper }}
      modules={[FreeMode, Navigation, Thumbs]}
      className="singleProduct__swiper--2"
    >
    {imageArray.map((image, index)=> 
      <SwiperSlide
      key={index}
      className="singleProduct__swiper--2__slide">
       <Zoom>
          <img
            src={image}
            alt={nom}
            className="singleProduct__swiper--img"  
          />
      </Zoom> 
      </SwiperSlide>
    )}
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        loop={false}
        spaceBetween={10}
        slidesPerView={3}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="singleProduct__swiper"
      >
          {imageArray.map((image, index)=> 
      <SwiperSlide 
      key={index}
      className="singleProduct__swiper__slide">
        <img src={image} alt={nom} className="singleProduct__swiper--img"/>
      </SwiperSlide>
    )}
      </Swiper>
</div>
);
    };

// ProductSlide.propTypes = {
//   nom: PropTypes.string.isRequired,
//   image : PropTypes.arrayOf(
//       PropTypes.string
//   ).isRequired
  
// }
export default ProductSlide
