import { useDocumentTitle } from '@/hooks/useDocumentTitle';
import pencilImg from '@/assets/pencil-icon.svg';
import { useState } from 'react';
import {
  Container,
  ToggleButton,
  LikeButton,
  DeleteButton,
  DesignParagraph,
  ImageContainer,
  UseHover,
} from '@/components';

import * as S from './CategoriesPage.styled';
import { getColor } from '@/theme/utils';

export default function CategoriesPage() {
  useDocumentTitle('Categories');

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
          width={'1557'}
          height={'769'}
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
            style={{ position: 'absolute', left: '170px', bottom: '50px' }}
          />
        ) : (
          <S.BaseText color={getColor('white')}>{text}</S.BaseText>
        )}
        <LikeButton />
      </>

      <S.FirstContainer>
        <UseHover width={'894'} height={'525'} />
        <UseHover width={'632'} height={'525'} />
        <UseHover width={'626'} height={'525'} />
        <UseHover width={'900'} height={'525'} />
      </S.FirstContainer>
      <DesignParagraph>
        #Snapshot #Golden Bridge #Photographer #America #I want freedom
      </DesignParagraph>
      <S.SecondContainer>
        <UseHover width={'1097'} height={'633'} />
        <UseHover width={'430'} height={'633'} />
        <UseHover width={'739'} height={'416'} />
        <UseHover width={'789'} height={'416'} />
      </S.SecondContainer>
    </Container>
  );
}
