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
  const inputRef = useRef(null);

  // 이미지 파일
  const [file, setFile] = useState(null);
  // 미리보기 이미지
  const [preview, setPreview] = useState(null);

  const onFileDrop = (e) => {
    // 파일 확장자 유효성검사 필요함 (png, jpg만 가능하게)
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      // 파일 로드가 완료되었을 때 함수 호출
      setPreview(reader.result);
    };
    setFile(file);
  };

  const handelUpload = useCallback(() => {
    console.log('업로드 버튼 클릭');
  }, []);

  const resetInputFile = () => {
    setFile(null);
    setPreview(null);
  };

  // const resetInputText = () => {
  //   // inputRef.current.value = null;
  //   // inputRef.current = '';
  //   console.log(inputRef.current.value);
  //   console.log('삭제 버튼 클릭2');
  // };

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
        <ImageUploadInput
          file={file}
          preview={preview}
          onFileDrop={onFileDrop}
          ref={fileInputRef}
        />
        <DeleteButton style={deleteButtonStyle} onClick={resetInputFile} />
        <Accordion style={{ margin: '2.9375rem 0 6.25rem 0' }} />
      </S.ImageSection>

      <S.DescriptionSection>
        <S.DescriptionTitle
          color={getColor('secondary')}
          fontSize={getFontSize('3xl')}
        >
          Enter image description
        </S.DescriptionTitle>
        <DescriptionInput ref={inputRef} />
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
