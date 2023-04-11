import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper';
import styled from 'styled-components/macro';

// Import Swiper Styles
import 'swiper/css';
import 'swiper/css/pagination';

const StyledSwiper = styled(Swiper)`
  width: 100%;
  height: 100%;
`;

const StyledSwiperSlide = styled(SwiperSlide)`
  display: flex;
  height: 300px;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 18px;
`;
const StyledSwiperSlideImg = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

/* Component ---------------------------------------------------------------- */

export function AllSwiper() {
  // props 로 이미지 url 받기
  const slides = ['slide1', 'slide2', 'slide3', 'slide4'];

  return (
    <StyledSwiper
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
          <StyledSwiperSlide key={slide}>{slides[index]}</StyledSwiperSlide>
        );
      })}
    </StyledSwiper>
  );
}
