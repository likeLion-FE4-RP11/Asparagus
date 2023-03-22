import { useDocumentTitle } from '@/hooks/useDocumentTitle';
import {
  ImageUploadInput,
  Accordion,
  DeleteButton,
  DescriptionInput,
  SeeMoreButton,
} from '@/components';
import { getColor, getFontSize } from '@/theme/utils';
import { useRef, useState, useEffect } from 'react';
import * as S from './UploadPage.styled';
import { useUploadFiles } from '@/firebase/storage';
import { getCategoryId, addImageItem } from '@/utils';

export default function UploadPage() {
  useDocumentTitle('UploadPage');

  const { fileInputRef, uploadFiles, isLoading, error, urlList } =
    useUploadFiles({
      dirName: 'assets/images',
    });

  const imageDataRef = useRef(initialImageData);
  const formStateRef = useRef(initialFormState);
  const textInputRef = useRef(null);

  // 이미지 파일
  const [file, setFile] = useState(null);
  // 미리보기 이미지
  const [preview, setPreview] = useState(null);

  useEffect(() => {
    if (urlList) {
      imageDataRef.current['url'] = urlList[0];
      console.log(imageDataRef);
    }

    if (error) {
      console.log(error);
    }
  }, [isLoading, error, urlList]);

  const handelSubmit = async (e) => {
    e.preventDefault();
    formStateRef.current['description'] = textInputRef.current.value;
    if (
      formStateRef.current['category_name'] &&
      formStateRef.current['description'] &&
      file
    ) {
      uploadFiles();
      const category_uid = await getCategoryId(
        user_uid,
        formStateRef.current['category_name']
      );
      if (category_uid) {
        console.log(category_uid);
        imageDataRef.current['catagory_uid'] = category_uid;
        imageDataRef.current['description'] = textInputRef.current.value;
        imageDataRef.current['name'] = file.name;
        imageDataRef.current['user_uid'] = user_uid;
        // console.log('업로드 return', await addImageItem(imageDataRef.current));
        // console.log('업로드 완료!!!!!!!');
      }
    }
  };

  console.log(imageDataRef);

  const handleDeleteImage = () => {
    setFile(null);
    setPreview(null);
  };

  const handleDeleteText = () => {
    textInputRef.current.value = '';
  };

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
      <p>파일 업로드 개수: {urlList ? urlList : 0}</p>
      <p>{isLoading ? '로딩중' : '로딩끝!'}</p>
    </S.FlexContainer>
  );
}

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

const deleteButtonStyle = {
  position: 'absolute',
  right: '0',
  marginTop: '2.9375rem',
};

const user_uid = 'EHSFq6SN4UfSAyGTw6UH';
