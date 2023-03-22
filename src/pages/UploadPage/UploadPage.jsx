import { useDocumentTitle } from '@/hooks/useDocumentTitle';
import {
  ImageUploadInput,
  Accordion,
  DeleteButton,
  DescriptionInput,
  SeeMoreButton,
} from '@/components';
import { getColor, getFontSize } from '@/theme/utils';
import { useCallback, useRef, useEffect } from 'react';
import * as S from './UploadPage.styled';
import { useUploadFiles } from '@/firebase/storage';

const initialFormState = {
  category_name: '',
  description: '',
};

// imageData
const initialImageData = {
  catagory_uid: '',
  description: '',
  name: '',
  url: '',
  user_uid: '',
};

export default function UploadPage() {
  useDocumentTitle('UploadPage');

  const { fileInputRef, uploadFiles } = useUploadFiles();
  const formStateRef = useRef(initialFormState);
  const textInputRef = useRef(null);

  const handelSubmit = (e) => {
    e.preventDefault();
    formStateRef.current['description'] = textInputRef.current.value;
    console.log(formStateRef.current);
  };

  const handleDeleteImage = () => {
    fileInputRef.current.initFilePreview();
  };

  const handleDeleteText = () => {
    textInputRef.current.value = '';
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
        <DeleteButton style={deleteButtonStyle} onClick={handleDeleteImage} />
        <Accordion
          style={{ margin: '2.9375rem 0 6.25rem 0' }}
          ref={formStateRef}
        />
      </S.ImageSection>

      <S.DescriptionSection>
        <S.DescriptionTitle
          color={getColor('secondary')}
          fontSize={getFontSize('3xl')}
        >
          Enter image description
        </S.DescriptionTitle>
        <DescriptionInput ref={textInputRef} />
        <DeleteButton style={deleteButtonStyle} onClick={handleDeleteText} />
      </S.DescriptionSection>

      <SeeMoreButton
        onClick={handelSubmit}
        style={{ marginBottom: '9.9375rem' }}
      >
        upload
      </SeeMoreButton>
    </S.FlexContainer>
  );
}

// 데이터 가공하는 함수 만들기
