import { useDocumentTitle } from '@/hooks/useDocumentTitle';
import {
  ImageUploadInput,
  Accordion,
  DeleteButton,
  DescriptionInput,
  SeeMoreButton,
} from '@/components';

import { getColor, getFontSize } from '@/theme/utils';
import { useCallback } from 'react';
import * as S from './UploadPage.styled';

export default function UploadPage() {
  useDocumentTitle('UploadPage');

  const handelUpload = useCallback(() => {
    console.log('업로드 버튼 클릭');
  }, []);

  const deleteButtonStyle = {
    position: 'absolute',
    right: '0',
    marginTop: '2.9375rem',
  };

  return (
    <S.FlexContainer>
      <S.ImageSection>
        <S.ImageTitle color={getColor('content')} fontSize={getFontSize('4xl')}>
          My own exhibition
        </S.ImageTitle>
        <ImageUploadInput />
        <DeleteButton style={deleteButtonStyle} />
        <Accordion style={{ margin: '2.9375rem 0 6.25rem 0' }} />
      </S.ImageSection>

      <S.DescriptionSection>
        <S.DescriptionTitle
          color={getColor('secondary')}
          fontSize={getFontSize('3xl')}
        >
          Enter image description
        </S.DescriptionTitle>
        <DescriptionInput />
        <DeleteButton style={deleteButtonStyle} />
      </S.DescriptionSection>

      <SeeMoreButton
        onClick={handelUpload}
        style={{ marginBottom: '9.9375rem' }}
      >
        upload
      </SeeMoreButton>
    </S.FlexContainer>
  );
}
