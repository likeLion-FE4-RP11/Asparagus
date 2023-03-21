import { useDocumentTitle } from '@/hooks/useDocumentTitle';
import {
  Container,
  ToggleButton,
  CategoryTitle,
  LikeButton,
  DeleteButton,
  DesignParagraph,
  ImageContainer,
  UseHover,
} from '@/components';

import { getColor, getFontSize } from '@/theme/utils';
import * as S from './CategoriesPage.styled';

export default function CategoriesPage() {
  useDocumentTitle('Categories');

  return (
    <Container>
      <ToggleButton />
      <ImageContainer width={'1557'} height={'769'} />
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
