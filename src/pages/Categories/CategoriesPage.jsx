import pencilImg from '@/assets/pencil-icon.svg';
import * as S from './CategoriesPage.styled';
import { getColor } from '@/theme/utils';
import { useDocumentTitle } from '@/hooks/useDocumentTitle';
import { useState, useEffect, useLayoutEffect } from 'react';
import { db } from '@/firebase/firestore';
import {
  ToggleButton,
  LikeButton,
  DesignParagraph,
  ImageContainer,
  UseHover,
  TopButton,
} from '@/components';
import {
  collection,
  query,
  where,
  limit,
  onSnapshot,
} from 'firebase/firestore';
import { LightTheme, DarkTheme, GlobalStyles } from '@/theme/theme';
import { ThemeProvider } from 'styled-components';
import { useAuthUser } from '@/contexts/AuthUser';
import { useParams } from 'react-router-dom';

export default function CategoriesPage() {
  useDocumentTitle('Categories');

  const category = useParams().name;

  // 이미지 id, uid, description 불러오기
  const [imageDataArr, setImageDataArr] = useState([]);
  const [imgArr, setImgArr] = useState([]);
  const [descriptionArr, setDescriptionArr] = useState([]);
  const [imgIdArr, setImgIdArr] = useState([]);
  const { authUser } = useAuthUser();

  useLayoutEffect(() => {
    if (authUser) {
      const user_uid = authUser.uid;
      const category_uid = authUser.categories[category];

      const q = query(
        collection(db, 'images'),
        where('uid', '==', user_uid),
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
    }
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

  // 텍스트 편집 기능
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

  // 테마변경
  const [theme, setTheme] = useState('light');

  const setMode = (mode) => {
    window.localStorage.setItem('theme', mode);
    setTheme(mode);
  };

  const themeTogggler = () => {
    theme === 'light' ? setMode('dark') : setMode('light');
  };

  useEffect(() => {
    const localTheme = window.localStorage.getItem('theme');
    localTheme ? setTheme(localTheme) : setMode('light');
  }, []);

  return (
    <ThemeProvider theme={theme === 'light' ? LightTheme : DarkTheme}>
      <GlobalStyles />
      <ToggleButton />
      <S.Themebutton onClick={() => themeTogggler()}>
        {theme === 'dark' ? (
          <svg
            width="50"
            height="54"
            viewBox="0 0 50 54"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 26.9815C1 12.9888 11.9894 1.38308 26.0416 1.00932C17.31 18.5251 28.9568 39.5412 48.2791 41.33C43.6542 48.368 35.779 53 26.7953 53C12.5644 53 1 41.3513 1 26.9815Z"
              stroke="white"
              stroke-width="2"
            />
          </svg>
        ) : (
          <svg
            width="60"
            height="60"
            viewBox="0 0 60 60"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M50.1595 37.7192L49.7202 38.1585V38.7798V49.7202H38.7798H38.1585L37.7192 50.1595L30 57.8787L22.2808 50.1595L21.8415 49.7202H21.2202H10.2798V38.7798V38.1585L9.8405 37.7192L2.12132 30L9.8405 22.2808L10.2798 21.8415V21.2202V10.2798H21.2202H21.8415L22.2808 9.8405L30 2.12132L37.7192 9.8405L38.1585 10.2798H38.7798H49.7202V21.2202V21.8415L50.1595 22.2808L57.8787 30L50.1595 37.7192ZM12.5849 30C12.5849 39.6083 20.3917 47.4151 30 47.4151C39.6083 47.4151 47.4151 39.6083 47.4151 30C47.4151 20.3917 39.6083 12.5849 30 12.5849C20.3917 12.5849 12.5849 20.3917 12.5849 30Z"
              stroke="black"
              stroke-opacity="0.51"
              stroke-width="3"
            />
          </svg>
        )}
      </S.Themebutton>
      <ImageContainer
        width={'1557px'}
        height={'769px'}
        style={{ position: 'relative' }}
        src={imgArr[0]}
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
          src={imgArr[1]}
        />
        <UseHover
          width={'632'}
          height={'525'}
          description={descriptionArr[2]}
          datasetKey={imgIdArr[2]}
          src={imgArr[2]}
        />
      </S.FirstContainer>
      <S.SecondContainer>
        <UseHover
          width={'626'}
          height={'525'}
          description={descriptionArr[3]}
          datasetKey={imgIdArr[3]}
          src={imgArr[3]}
        />
        <UseHover
          width={'900'}
          height={'525'}
          description={descriptionArr[4]}
          datasetKey={imgIdArr[4]}
          src={imgArr[4]}
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
          src={imgArr[5]}
        />
        <UseHover
          width={'430'}
          height={'633'}
          description={descriptionArr[6]}
          datasetKey={imgIdArr[6]}
          src={imgArr[6]}
        />
      </S.ThirdContainet>
      <S.FourthContainet>
        <UseHover
          width={'739'}
          height={'416'}
          description={descriptionArr[7]}
          datasetKey={imgIdArr[7]}
          src={imgArr[7]}
        />
        <UseHover
          width={'789'}
          height={'416'}
          description={descriptionArr[8]}
          datasetKey={imgIdArr[8]}
          src={imgArr[8]}
        />
      </S.FourthContainet>
      <TopButton />
    </ThemeProvider>
  );
}
