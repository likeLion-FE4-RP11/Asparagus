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
  const [descriptionArr, setDescriptionArr] = useState([]);

  const user_uid = 'EHSFq6SN4UfSAyGTw6UH';
  const category_uid = 'J5QsZE01c9QkdO1yzuVB';

  useEffect(() => {
    const getImages = async () => {
      const q = query(
        collection(db, 'images'),
        where('user_uid', '==', user_uid),
        where('category_uid', '==', category_uid),

        limit(10)
      );
      const myImgList = await getDocs(q);

      const imageList = [];
      const descriptionList = [];
      myImgList.docs.map((doc) => {
        imageList.push(doc.data().url);
        descriptionList.push(doc.data().description);
      });

      setDescriptionArr(descriptionList);
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
      </>
      {/* dataset-index에 docs에 있는 img uid를 넣으면 예시) 아래에있음 / 나중에 삭제할때 삭제버튼 누르면 그 이미지의 uid를 가져온다 */}
      <S.FirstContainer>
        <UseHover
          src={imgArr[1]}
          description={descriptionArr[1]}
          width={'894'}
          height={'525'}
        />
        <UseHover
          src={imgArr[2]}
          description={descriptionArr[2]}
          width={'632'}
          height={'525'}
        />
      </S.FirstContainer>
      <S.SecondContainer>
        <UseHover
          src={imgArr[3]}
          description={descriptionArr[3]}
          width={'626'}
          height={'525'}
        />
        <UseHover
          src={imgArr[4]}
          description={descriptionArr[4]}
          width={'900'}
          height={'525'}
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
        />
        <UseHover
          src={imgArr[6]}
          description={descriptionArr[6]}
          width={'430'}
          height={'633'}
        />
      </S.ThirdContainet>
      <S.FourthContainet>
        <UseHover
          src={imgArr[7]}
          description={descriptionArr[7]}
          width={'739'}
          height={'416'}
        />
        <UseHover
          src={imgArr[8]}
          description={descriptionArr[8]}
          width={'789'}
          height={'416'}
        />
      </S.FourthContainet>
    </Container>
  );
}
