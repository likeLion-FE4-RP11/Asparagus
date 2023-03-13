import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper';

// Import Swiper Styles
import 'swiper/css';
import 'swiper/css/pagination';

import Styles from '@/components/Swiper/Pagination.module.css';

export function AllSwiper() {
  // props 로 이미지 url 받기
  const slides = ['slide1', 'slide2', 'slide3', 'slide4'];

  return (
    <Swiper
      className={Styles.Swiper}
      loop={true}
      pagination={{
        dynamicBullets: true,
        clickable: true,
        bulletElement: 'button',
      }}
      speed={1000}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      modules={[Autoplay, Pagination]}
      spaceBetween={20}
      slidesPerView={1}
      // onSlideChange={() => console.log('slide change')}
      // onSwiper={(swiper) => console.log(swiper)}
    >
      {slides.map((slide, index) => {
        return (
          <SwiperSlide key={slide} className={Styles.SwiperSlide}>
            {slides[index]}
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}
