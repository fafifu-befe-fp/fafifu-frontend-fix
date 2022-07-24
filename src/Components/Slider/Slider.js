import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import './Slider.css'
import { Pagination } from "swiper";

const Slider = () => {
  return (
    <>
      <Swiper
        height={500}
        slidesPerView={2}
        centeredSlides={true}
        spaceBetween={-70}
        grabCursor={true}
        loop={true}
        autoplay={true}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          320:{
            slidesPerView: 1,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 2,
            spaceBetween: -30,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide><img src="../../img/slider1.png" alt="imgbanner1" border="0" className="img-fluid"/></SwiperSlide>
        <SwiperSlide><img src="../../img/slider1.png" alt="imgbanner1" border="0" className="img-fluid"/></SwiperSlide>
        <SwiperSlide><img src="../../img/slider1.png" alt="imgbanner1" border="0" className="img-fluid"/></SwiperSlide>
      </Swiper>
    </>
  )
}

export default Slider