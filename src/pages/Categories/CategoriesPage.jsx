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
      <ImageContainer width={1557} height={769} />
    </Container>
  );
}
