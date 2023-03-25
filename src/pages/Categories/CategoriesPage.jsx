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
        stlye={{ position: 'relative' }}
        src={imgArr[0]}
      ></ImageContainer>
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
          style={{
            position: 'absolute',
            left: '170px',
            bottom: '50px',
          }}
        />
      ) : (
        <S.BaseText color={getColor('white')}>{text}</S.BaseText>
      )}
      <LikeButton />
      <S.FirstContainer>
        <UseHover
          src={imgArr[1]}
          description={descriptionArr[1]}
          width={'894'}
          height={'525'}
          datasetKey={imgIdArr[1]}
        />
        <UseHover
          src={imgArr[2]}
          description={descriptionArr[2]}
          width={'632'}
          height={'525'}
          datasetKey={imgIdArr[2]}
        />
      </S.FirstContainer>
      <S.SecondContainer>
        <UseHover
          src={imgArr[3]}
          description={descriptionArr[3]}
          width={'626'}
          height={'525'}
          datasetKey={imgIdArr[3]}
        />
        <UseHover
          src={imgArr[4]}
          description={descriptionArr[4]}
          width={'900'}
          height={'525'}
          datasetKey={imgIdArr[4]}
        />
      </S.SecondContainer>
      <DesignParagraph>
        #Snapshot #Golden Bridge #Photographer #America #I want freedom
      </DesignParagraph>
      <S.ThirdContainet>
        <UseHover
          src={imgArr[5]}
          description={descriptionArr[5]}
          width={'1097'}
          height={'633'}
          datasetKey={imgIdArr[5]}
        />
        <UseHover
          src={imgArr[6]}
          description={descriptionArr[6]}
          width={'430'}
          height={'633'}
          datasetKey={imgIdArr[6]}
        />
      </S.ThirdContainet>
      <S.FourthContainet>
        <UseHover
          src={imgArr[7]}
          description={descriptionArr[7]}
          width={'739'}
          height={'416'}
          datasetKey={imgIdArr[7]}
        />
        <UseHover
          src={imgArr[8]}
          description={descriptionArr[8]}
          width={'789'}
          height={'416'}
          datasetKey={imgIdArr[8]}
        />
      </S.FourthContainet>
      <TopButton />
    </>
  );
}
