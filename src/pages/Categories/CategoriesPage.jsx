import * as S from './CategoriesPage.styled';
import { useDocumentTitle } from '@/hooks/useDocumentTitle';
import { getColor } from '@/theme/utils';
import { useState, useEffect, useLayoutEffect } from 'react';
import {
  ToggleButton,
  LikeButton,
  DesignParagraph,
  UseHover,
  TopButton,
} from '@/components';
import { LightTheme, DarkTheme, GlobalStyles } from '@/theme/theme';
import { ThemeContext, ThemeProvider } from 'styled-components';
import pencilImg from '@/assets/pencil-icon.svg';
import Dark from '@/assets/Dark.svg';
import Light from '@/assets/Light.svg';
import { useAuthUser } from '@/contexts/AuthUser';
import { useParams } from 'react-router-dom';
import { onChangeCategoryList } from '@/utils/utils';
import { db } from '@/firebase/firestore';
import {
  collection,
  query,
  where,
  getDocs,
  limit,
  onSnapshot,
  doc,
  getDoc,
  updateDoc,
} from 'firebase/firestore';

export default function CategoriesPage() {
  useDocumentTitle('Categories');

  const category = useParams().name;

  const [imageDataArr, setImageDataArr] = useState([]);
  const [imgArr, setImgArr] = useState([]);
  const [descriptionArr, setDescriptionArr] = useState([]);
  const [imgIdArr, setImgIdArr] = useState([]);
  const { authUser } = useAuthUser();

  let user_uid = '';
  let category_uid = '';

  const sample_user_uid = 'EHSFq6SN4UfSAyGTw6UH';
  const sample_category_uid = {
    Daily: 'HWon7XsmCqht8pum7PZf',
    Travel: 'J5QsZE01c9QkdO1yzuVB',
    Food: 'ARtP9pAr025AGEpyWqXT',
    Hobby: 'skbzLrlxEL9f1BNlHyWt',
  };

  useLayoutEffect(() => {
    if (authUser) {
      user_uid = authUser.uid;
      category_uid = authUser.categories[category];
      onChangeCategoryList(setImageDataArr, user_uid, category_uid);
    } else {
      user_uid = sample_user_uid;
      category_uid = sample_category_uid[category];
      onChangeCategoryList(setImageDataArr, user_uid, category_uid);
    }
  }, [authUser]);
  console.log(imageDataArr);
  console.log(authUser);

  useEffect(() => {
    const idList = [];
    const imageList = [];
    const descriptionList = [];
    // const isAllow = [];
    if (imageDataArr) {
      imageDataArr.map(({ id, data }) => {
        idList.push(id);
        descriptionList.push(data.description);
        imageList.push(data.url);
        // isAllow.push(data.url);
      });

      setDescriptionArr(descriptionList);
      setImgArr(imageList);
      setImgIdArr(idList);
      // setIsAllow(isAllow);
    }
  }, [imageDataArr]);

  console.log(imgArr);
  console.log(imgIdArr);

  // 토글버튼 클릭시 false가 된 사진만 보이게 하기
  // const [isAllow, setIsAllow] = useState([]);
  // useEffect(() => {
  //   if (isAllow === false) {
  //     const q = query(
  //       collection(db, 'categories'),
  //       where('categories', '==', sample_category_uid),
  //       where('isAllow', '==', false),
  //       limit(10)
  //     );
  //     const unsubscribe = onSnapshot(q, (querySnapshot) => {
  //       const data = [];
  //       querySnapshot.forEach((doc) => {
  //         data.push({ id: doc.id, data: doc.data() });
  //       });
  //       setImageDataArr(data);
  //     });
  //     return () => {
  //       unsubscribe();
  //     };
  //   }
  // }, []);
  // console.log(imageDataArr);

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
        <ToggleButton category_uid={category_uid} />
        <S.Themebutton onClick={() => themeTogggler()}>
          {theme === 'dark' ? (
            <img src={Dark} alt="다크모드 활성화" />
          ) : (
            <img src={Light} alt="라이트모드 활성화" />
          )}
        </S.Themebutton>
        <S.categoryMainContainer
          width={'1557px'}
          height={'769px'}
          src={imgArr[0]}
        >
          <S.ImageTitle color={getColor('white')}>{category}</S.ImageTitle>
          <S.testContainer>
            <img
              src={pencilImg}
              onDoubleClick={handleDoubleClick}
              alt="대표 사진 내용 편집하기"
            />
          </S.testContainer>

          {isEditable ? (
            <S.ChangeInput
              type="text"
              value={text}
              onChange={handleChange}
              onKeyDown={handleKeyDown}
            />
          ) : (
            <S.BaseText color={getColor('white')}>{text}</S.BaseText>
          )}
          <LikeButton category_uid={category_uid} />
        </S.categoryMainContainer>

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
