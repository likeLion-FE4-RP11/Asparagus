import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper';
import styled from 'styled-components/macro';

// Import Swiper Styles
import 'swiper/css';
import 'swiper/css/pagination';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { useState, useEffect } from 'react'
import { db } from '@/firebase/firestore';

const StyledSwiper = styled(Swiper)`
  width: 1560px;
  height: 765px;
  margin-top: 186px;
  margin-bottom: 147px;
`;

const StyledSwiperSlide = styled(SwiperSlide)`
  display: flex;
  width: 1560px;
  height: 765px;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 18px;
  background: red;
`;
const StyledSwiperSlideImg = styled.img`
  display: block;
  width: 1560px;
  height: 765px;
  object-fit: cover;
`;

/* Component ---------------------------------------------------------------- */

export function MainSwiper() {
  const baseImgArr = ['https://firebasestorage.googleapis.com/v0/b/i-s-gallery.appspot.com/o/assets%2Fsample%2Fdaily-5.webp?alt=media&token=9d5eb52c-49f8-4d87-a89f-12fd5ba020f1','https://firebasestorage.googleapis.com/v0/b/i-s-gallery.appspot.com/o/assets%2Fsample%2Ffood-5.webp?alt=media&token=db9b6256-a352-40b6-961e-6e58733cbe5b','https://firebasestorage.googleapis.com/v0/b/i-s-gallery.appspot.com/o/assets%2Fsample%2Fhobby-5.webp?alt=media&token=fefa8041-d833-48d2-ad8c-9b8c766e6bb7','https://firebasestorage.googleapis.com/v0/b/i-s-gallery.appspot.com/o/assets%2Fsample%2Ftravel-5.webp?alt=media&token=331ef1ea-7592-4519-b1f2-e3acaa9865d7']
  
  const imgArr = []
  // props 로 이미지 url 받기

  useEffect(()=>{
    const getImages = async () =>{
      const q = query(
        collection(db, 'images'),
        where('user_uid',"==","EHSFq6SN4UfSAyGTw6UH")
      )
      const myImgList = await getDocs(q)
      myImgList.docs.map((doc)=>imgArr.push(doc.data().url))
    }
    getImages()
  },[])

  console.log('주소 값',imgArr)

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
      
      {imgArr ? imgArr.map((slide, index) => {
        return (
          <StyledSwiperSlide key={slide}>
            <img src={slide}/>
          </StyledSwiperSlide>
        );
      }) : baseImgArr.map((slide, index) => {
        return (
          <StyledSwiperSlide key={slide}>
            <img src={slide}/>
          </StyledSwiperSlide>
        );
      }) }
      
    </StyledSwiper>
  );
}
