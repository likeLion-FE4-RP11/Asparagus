import { useDocumentTitle } from '@/hooks/useDocumentTitle';
import pencilImg from '@/assets/pencil-icon.svg';
import { useState, useEffect } from 'react';
import { collection, query, where, getDocs, limit } from 'firebase/firestore';
import { db } from '@/firebase/firestore';
import {
  Container,
  ToggleButton,
  LikeButton,
  DesignParagraph,
  ImageContainer,
  UseHover,
} from '@/components';

import * as S from './CategoriesPage.styled';
import { getColor } from '@/theme/utils';

export default function CategoriesPage() {
  useDocumentTitle('Categories');

  const [imgArr, setImgArr] = useState([]);

  useEffect(() => {
    const getImages = async () => {
      const q = query(
        collection(db, 'images'),
        where('user_uid', '==', 'CPBJoxBg5OYeielSBFcWUSuDpF23'),
        limit(10)
      );
      const myImgList = await getDocs(q);

      const imageList = [];
      myImgList.docs.map((doc) => imageList.push(doc.data().url));

      setImgArr(imageList);
    };

    getImages();
  }, []);

  console.log(imgArr);

  const [text, setText] = useState('I traveled here with my friends!');
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
    <Container>
      <ToggleButton />
      <>
        <ImageContainer
          width={'1557px'}
          height={'769px'}
          stlye={{ position: 'relative' }}
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
      </>
      {/* dataset-index에 docs에 있는 img uid를 넣으면 예시) 아래에있음 / 나중에 삭제할때 삭제버튼 누르면 그 이미지의 uid를 가져온다 */}
      <S.FirstContainer>
        <UseHover box1 width={'894'} height={'525'} />
        <UseHover box2 width={'632'} height={'525'} />
      </S.FirstContainer>
      <S.SecondContainer>
        <UseHover box3 width={'626'} height={'525'} />
        <UseHover box4 width={'900'} height={'525'} />
      </S.SecondContainer>
      <DesignParagraph>
        #Snapshot #Golden Bridge #Photographer #America #I want freedom
      </DesignParagraph>
      <S.ThirdContainet>
        <UseHover width={'1097'} height={'633'} />
        <UseHover width={'430'} height={'633'} />
      </S.ThirdContainet>
      <S.FourthContainet>
        <UseHover width={'739'} height={'416'} />
        <UseHover width={'789'} height={'416'} />
      </S.FourthContainet>
    </Container>
  );
}
