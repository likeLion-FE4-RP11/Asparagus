import * as S from './HomePage.styled';
import { useDocumentTitle } from '@/hooks/useDocumentTitle';
import { useState, useEffect } from 'react';
import { db } from '@/firebase/firestore';
import {
  MainSwiper,
  SeeMoreButton,
  SeeMoreImg,
  TopButton,
  CategoryTitle,
  Category,
  RecentImageTitle,
} from '@/components';
import { useState, useEffect } from 'react';
import {
  collection,
  getDocs,
  query,
  where,
  limit,
  orderBy,
} from 'firebase/firestore';
import { db } from '@/firebase/firestore';
import * as S from './HomePage.styled';

export default function HomePage() {
  useDocumentTitle('HomePage');
  const [imgArr, setImgArr] = useState([]);
  const [moreImgArr, setMoreImgArr] = useState([]);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const getImages = async () => {
      const q = query(
        collection(db, 'images'),
        where('user_uid', '==', 'EHSFq6SN4UfSAyGTw6UH'),
        orderBy('createAt', 'desc'), //최신순으로 정렬
        limit(3)
      );
      const myImgList = await getDocs(q);

      const imageList = [];
      myImgList.docs.map((doc) => imageList.push(doc.data().url));

      imageList.sort(() => Math.random() - 0.5);
      setImgArr(imageList);
    };

    getImages();

    const getCategories = async () => {
      const q = query(
        collection(db, 'categories'),
        where('isAllow', '==', true),
        where('user_uid', '!=', 'EHSFq6SN4UfSAyGTw6UH'),
        limit(3)
      );

      const querySnapshot = await getDocs(q);
      const categoryList = [];
      querySnapshot.docs.map((doc) => {
        categoryList.push(doc.id);
      });

      const moreImgListPromises = categoryList.map((item) => {
        const q2 = query(
          collection(db, 'images'),
          where('category_uid', '==', item)
        );
        return getDocs(q2).then(({ docs }) => {
          return docs.map((doc) => doc.data().url);
        });
      });
      Promise.all(moreImgListPromises).then((datas) => {
        const urls = datas.reduce((urls, data) => [...urls, data[0]], []);
        setMoreImgArr(urls);
      });
    };

    getCategories();
  }, []);

  return (
    <>
      <MainSwiper />
      <CategoryTitle title={'C A T E G O R Y'} />
      <Category />
      <RecentImageTitle title={'R E C E N T\u00A0\u00A0\u00A0 I M A G E'} />

      <S.MainSection>
        <SeeMoreImg src={imgArr[0]} />
        <SeeMoreImg src={imgArr[1]} />
        <SeeMoreImg src={imgArr[2]} />
      </S.MainSection>

      <SeeMoreButton
        onClick={() => {
          setVisible(!visible);
        }}
        style={{ marginTop: '160px', marginBottom: '90px' }}
      ></SeeMoreButton>

      <S.SeeMoreSection>
        {visible &&
          moreImgArr &&
          moreImgArr.map((url) => <SeeMoreImg key={url} src={url} />)}
      </S.SeeMoreSection>

      <TopButton />
    </>
  );
}
