import styled from 'styled-components/macro';
import { Swiper, SwiperSlide } from 'swiper/react';


export const StyledSwiper = styled(Swiper)`
  width: 100%;
  height: 100%;
  margin-top: 186px;
  margin-bottom: 147px;
  border-radius: 20px;
`;

export const StyledSwiperSlide = styled(SwiperSlide)`
  display: flex;
  width: 1560px;
  height: 765px;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 18px;
`;

export const StyledSwiperSlideImg = styled.img`
  display: block;
  width: 1560px;
  height: 765px;
  object-fit: cover;
`;