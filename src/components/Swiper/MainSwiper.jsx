import { Autoplay, Pagination } from 'swiper';
import * as S from './MainSwiper.styled';

// Import Swiper Styles
import 'swiper/css';
import 'swiper/css/pagination';
import { BaseImage } from '@/components';
import { collection, getDocs, query, where, limit } from 'firebase/firestore';
import { useState, useEffect } from 'react';
import { db } from '@/firebase/firestore';
import { useAuthUser } from '@/contexts/AuthUser';

/* Component ---------------------------------------------------------------- */

export function MainSwiper() {
  // const baseImgArr = [
  //   'https://firebasestorage.googleapis.com/v0/b/i-s-gallery.appspot.com/o/assets%2Fsample%2Fdaily-5.webp?alt=media&token=9d5eb52c-49f8-4d87-a89f-12fd5ba020f1',
  //   'https://firebasestorage.googleapis.com/v0/b/i-s-gallery.appspot.com/o/assets%2Fsample%2Ffood-5.webp?alt=media&token=db9b6256-a352-40b6-961e-6e58733cbe5b',
  //   'https://firebasestorage.googleapis.com/v0/b/i-s-gallery.appspot.com/o/assets%2Fsample%2Fhobby-5.webp?alt=media&token=fefa8041-d833-48d2-ad8c-9b8c766e6bb7',
  //   'https://firebasestorage.googleapis.com/v0/b/i-s-gallery.appspot.com/o/assets%2Fsample%2Ftravel-5.webp?alt=media&token=331ef1ea-7592-4519-b1f2-e3acaa9865d7',
  // ];
  const baseImgArr = [1, 2, 3, 4];

  const [imgArr, setImgArr] = useState([]);
  const { authUser } = useAuthUser();

  useEffect(() => {
    if (authUser) {
      const getImages = async () => {
        const q = query(
          collection(db, 'images'),
          where('uid', '==', authUser.uid),
          limit(10)
        );
        const myImgList = await getDocs(q);

        const imageList = [];
        myImgList.docs.map((doc) => imageList.push(doc.data().url));

        setImgArr(imageList);
      };

      getImages();
    }
  }, []);

  return (
    <S.StyledSwiper
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
    >
      {imgArr.length > 0
        ? imgArr.map((url) => {
            return (
              <S.StyledSwiperSlide key={url}>
                <img src={url} alt="기본 이미지" />
              </S.StyledSwiperSlide>
            );
          })
        : baseImgArr.map((url, index) => {
            return (
              <S.StyledSwiperSlide key={index}>
                <BaseImage />
              </S.StyledSwiperSlide>
            );
          })}
    </S.StyledSwiper>
  );
}
