import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';

// Import Swiper Styles
import 'swiper/css';
import 'swiper/css/pagination';

import styles from '@/components/Swiper/Pagination.module.css';

export function AllSwiper() {
  return (
    <Swiper
      className={styles.Swiper}
      pagination={{
        dynamicBullets: true,
        clickable: true,
        bulletElement: 'button',
      }}
      modules={[Pagination]}
      spaceBetween={20}
      slidesPerView={1}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide className={styles.SwiperSlide}>Test 1</SwiperSlide>
      <SwiperSlide className={styles.SwiperSlide}>Slide 2</SwiperSlide>
      <SwiperSlide className={styles.SwiperSlide}>Slide 3</SwiperSlide>
      <SwiperSlide className={styles.SwiperSlide}>Slide 4</SwiperSlide>
      <SwiperSlide className={styles.SwiperSlide}>Slide 5</SwiperSlide>
      <SwiperSlide className={styles.SwiperSlide}>Slide 6</SwiperSlide>
      <SwiperSlide className={styles.SwiperSlide}>Slide 7</SwiperSlide>
    </Swiper>
  );
}
