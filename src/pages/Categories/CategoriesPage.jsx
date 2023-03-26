import { useDocumentTitle } from '@/hooks/useDocumentTitle';
import pencilImg from '@/assets/pencil-icon.svg';
import { useState, useEffect, useLayoutEffect } from 'react';
import {
  collection,
  query,
  where,
  getDocs,
  limit,
  onSnapshot,
} from 'firebase/firestore';

import { db } from '@/firebase/firestore';
import {
  ToggleButton,
  LikeButton,
  DesignParagraph,
  ImageContainer,
  UseHover,
  TopButton,
} from '@/components';

import * as S from './CategoriesPage.styled';
import { getColor } from '@/theme/utils';

export default function CategoriesPage() {
  useDocumentTitle('Categories');

  const [imageDataArr, setImageDataArr] = useState([]);

  const [imgArr, setImgArr] = useState([]);
  const [descriptionArr, setDescriptionArr] = useState([]);
  const [imgIdArr, setImgIdArr] = useState([]);

  const user_uid = 'EHSFq6SN4UfSAyGTw6UH';
  const category_uid = 'J5QsZE01c9QkdO1yzuVB';

  useLayoutEffect(() => {
    const q = query(
      collection(db, 'images'),
      where('user_uid', '==', user_uid),
      where('category_uid', '==', category_uid),
      limit(10)
    );

    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const data = [];

      querySnapshot.forEach((doc) => {
        data.push({ id: doc.id, data: doc.data() });
      });

      setImageDataArr(data);
    });

    return () => {
      console.log('onSnapshot 이벤트 구독 해지');
      unsubscribe();
    };
  }, []);

  useEffect(() => {
    const idList = [];
    const imageList = [];
    const descriptionList = [];
    imageDataArr.map(({ id, data }) => {
      idList.push(id);
      imageList.push(data.url);
      descriptionList.push(data.description);
    });

    setDescriptionArr(descriptionList);
    setImgArr(imageList);
    setImgIdArr(idList);
  }, [imageDataArr]);

  console.log(imgArr);
  console.log(imgIdArr);

  const [text, setText] = useState('I Love Traveled here with my friends!');
  const [isEditable, setIsEditable] = useState(false);

  const handleDoubleClick = () => {
    setIsEditable(true);
  };

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      setIsEditable(false);
    }
  };

  return (
    <>
      <ToggleButton />
      <ImageContainer
        width={'1557px'}
        height={'769px'}
        style={{ position: 'relative' }}
        img={imgArr[0]}
      ></ImageContainer>
      <S.TextContainer>
        <S.ImageTitle color={getColor('white')}>Travel</S.ImageTitle>
        <S.ImageLogo
          src={pencilImg}
          onDoubleClick={handleDoubleClick}
          alt="대표 사진 내용 편집하기"
        />
        {isEditable ? (
          <input
            type="text"
            value={text}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
          />
        ) : (
          <S.BaseText color={getColor('white')}>{text}</S.BaseText>
        )}
        <LikeButton />
      </S.TextContainer>
      <S.FirstContainer>
        <UseHover
          width={'894'}
          height={'525'}
          description={descriptionArr[1]}
          datasetKey={imgIdArr[1]}
          img={imgArr[1]}
        />
        <UseHover
          width={'632'}
          height={'525'}
          description={descriptionArr[2]}
          datasetKey={imgIdArr[2]}
          img={imgArr[2]}
        />
      </S.FirstContainer>
      <S.SecondContainer>
        <UseHover
          width={'626'}
          height={'525'}
          description={descriptionArr[3]}
          datasetKey={imgIdArr[3]}
          img={imgArr[3]}
        />
        <UseHover
          width={'900'}
          height={'525'}
          description={descriptionArr[4]}
          datasetKey={imgIdArr[4]}
          img={imgArr[4]}
        />
      </S.SecondContainer>
      <DesignParagraph>
        #Snapshot #Golden Bridge #Photographer #America #I want freedom
      </DesignParagraph>
      <S.ThirdContainet>
        <UseHover
          width={'1097'}
          height={'633'}
          description={descriptionArr[5]}
          datasetKey={imgIdArr[5]}
          img={imgArr[5]}
        />
        <UseHover
          width={'430'}
          height={'633'}
          description={descriptionArr[6]}
          datasetKey={imgIdArr[6]}
          img={imgArr[6]}
        />
      </S.ThirdContainet>
      <S.FourthContainet>
        <UseHover
          width={'739'}
          height={'416'}
          description={descriptionArr[7]}
          datasetKey={imgIdArr[7]}
          img={imgArr[7]}
        />
        <UseHover
          width={'789'}
          height={'416'}
          description={descriptionArr[8]}
          datasetKey={imgIdArr[8]}
          img={imgArr[8]}
        />
      </S.FourthContainet>
      <TopButton />
    </>
  );
}
