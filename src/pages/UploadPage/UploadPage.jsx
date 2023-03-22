import { useDocumentTitle } from '@/hooks/useDocumentTitle';
import {
  ImageUploadInput,
  Accordion,
  DeleteButton,
  DescriptionInput,
  SeeMoreButton,
} from '@/components';

import { getColor, getFontSize } from '@/theme/utils';
import { useCallback, useRef, useState } from 'react';
import * as S from './UploadPage.styled';
import { useUploadFiles } from '@/firebase/storage';

export default function UploadPage() {
  useDocumentTitle('UploadPage');

  const { fileInputRef, uploadFiles } = useUploadFiles();

  const handelUpload = useCallback(() => {
    console.log('업로드 버튼 클릭');
  }, []);

  const handleDelete = () => {
    fileInputRef.current.initFilePreview();
  };

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
        <ImageUploadInput ref={fileInputRef} />
        <DeleteButton style={deleteButtonStyle} onClick={handleDelete} />
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
