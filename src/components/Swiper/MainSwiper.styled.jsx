import styled from 'styled-components/macro';
import { Swiper, SwiperSlide } from 'swiper/react';

export const StyledSwiper = styled(Swiper)`
  width: 100%;
  height: 100%;
  margin-top: 150px;
  margin-bottom: 150px;
  border-radius: 20px;
  @media (max-width: 768px) {
    margin-top: 60px;
    margin-bottom: 60px;
  }
`;

export const StyledSwiperSlide = styled(SwiperSlide)`
  display: flex;
  width: 1560px;
  height: 765px;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 18px;
  @media (max-width: 768px) {
    height: 100%;
  }
`;

export const StyledSwiperSlideImg = styled.img`
  display: block;
  width: 1560px;
  height: 765px;
  object-fit: cover;
`;
