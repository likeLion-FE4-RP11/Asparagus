import { Autoplay, Pagination } from 'swiper';
import * as S from './MainSwiper.styled';

// Import Swiper Styles
import 'swiper/css';
import 'swiper/css/pagination';
import {
  collection,
  getDocs,
  query,
  where,
  limit,
  orderBy,
} from 'firebase/firestore';
import { useState, useEffect } from 'react';
import { db } from '@/firebase/firestore';
import { useAuthUser } from '@/contexts/AuthUser';

const sample_user_uid = 'EHSFq6SN4UfSAyGTw6UH';

/* Component ---------------------------------------------------------------- */
export function MainSwiper() {
  const [imgArr, setImgArr] = useState([]);
  const [descriptionArr, setDescriptionArr] = useState([]);
  const { authUser } = useAuthUser();

  useEffect(() => {
    const getImages = async () => {
      const q = query(
        collection(db, 'images'),
        orderBy('createAt', 'desc'),
        where('uid', 'in', [authUser.uid, sample_user_uid]),
        limit(10)
      );
      const myImgList = await getDocs(q);

      const imageList = [];
      const descriptionList = [];
      myImgList.docs.map((doc) => {
        imageList.push(doc.data().url);
        descriptionList.push(doc.data().description);
      });

      setImgArr(imageList);
      setDescriptionArr(descriptionList);
    };

    const getSampleImages = async () => {
      const q = query(
        collection(db, 'images'),
        where('uid', '==', sample_user_uid),
        limit(10)
      );
      const myImgList = await getDocs(q);

      const imageList = [];
      const descriptionList = [];
      myImgList.docs.map((doc) => {
        imageList.push(doc.data().url);
        descriptionList.push(doc.data().description);
      });

      setImgArr(imageList);
      setDescriptionArr(descriptionList);
    };

    if (authUser) {
      getImages();
    } else {
      getSampleImages();
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
      speed={1800}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      modules={[Autoplay, Pagination]}
      spaceBetween={20}
      slidesPerView={1}
    >
      {imgArr.map((url, index) => {
        return (
          <S.StyledSwiperSlide key={url}>
            <img src={url} alt={descriptionArr[index]} />
          </S.StyledSwiperSlide>
        );
      })}
    </S.StyledSwiper>
  );
}
