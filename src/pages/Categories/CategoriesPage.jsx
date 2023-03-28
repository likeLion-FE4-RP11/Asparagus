import * as S from './CategoriesPage.styled';
import { useDocumentTitle } from '@/hooks/useDocumentTitle';
import { getColor } from '@/theme/utils';
import { useState, useEffect, useLayoutEffect } from 'react';
import { db } from '@/firebase/firestore';
import {
  ToggleButton,
  LikeButton,
  DesignParagraph,
  ImageContainer,
  UseHover,
  TopButton,
  MainSwiper,
} from '@/components';
import {
  collection,
  query,
  where,
  limit,
  onSnapshot,
} from 'firebase/firestore';
import { LightTheme, DarkTheme, GlobalStyles } from '@/theme/theme';
import { ThemeContext, ThemeProvider } from 'styled-components';
import pencilImg from '@/assets/pencil-icon.svg';
import Dark from '@/assets/Dark.svg';
import Light from '@/assets/Light.svg';
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

  // context api 테마 변경
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
    <ThemeContext.Provider>
      <ThemeProvider theme={theme === 'light' ? LightTheme : DarkTheme}>
        <GlobalStyles />
        <ToggleButton />
        <S.Themebutton onClick={() => themeTogggler()}>
          {theme === 'dark' ? (
            <img src={Dark} alt="다크모드 활성화" />
          ) : (
            <img src={Light} alt="라이트모드 활성화" />
          )}
        </S.Themebutton>
        <MainSwiper />
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
          #Snapshot #Camera #Photographer #America #I want freedom
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
    </ThemeContext.Provider>
  );
}
