import * as S from './UploadPage.styled';
import { useDocumentTitle } from '@/hooks/useDocumentTitle';
import { getColor, getFontSize } from '@/theme/utils';
import { getCategoryId, addImageItem } from '@/utils';
import { useRef, useState, useEffect } from 'react';
import {
  ImageUploadInput,
  Accordion,
  DeleteButton,
  DescriptionInput,
  SeeMoreButton,
} from '@/components';
import { useUploadFiles } from '@/firebase/storage';
import { useAuthUser } from '@/contexts/AuthUser';

export default function UploadPage() {
  useDocumentTitle('UploadPage');
  const { authUser } = useAuthUser();

  const { fileInputRef, uploadFiles, isLoading, error, urlList } =
    useUploadFiles({
      dirName: 'assets/images',
    });

  const imageDataRef = useRef(initialImageData);
  const formStateRef = useRef(initialFormState);
  const textInputRef = useRef(null);

  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);

  useEffect(() => {
    if (urlList) {
      imageDataRef.current['url'] = urlList[0];
    }

    if (error) {
      console.log(error);
    }
  }, [isLoading, error, urlList]);

  const handelSubmit = async (e) => {
    e.preventDefault();

    if (imageDataRef.current['url'] === undefined) {
      return alert('이미지가 이미 업로드 되었습니다.');
    }

    if (authUser) {
      // console.log(authUser);
      const user_uid = authUser.uid;
      formStateRef.current['description'] = textInputRef.current.value;
      if (
        formStateRef.current['category_name'] &&
        formStateRef.current['description'] &&
        file
      ) {
        await uploadFiles();
        const category_uid = await getCategoryId(
          user_uid,
          formStateRef.current['category_name']
        );
        console.log('카테고리 아이디', category_uid);
        if (category_uid) {
          imageDataRef.current['category_uid'] = category_uid;
          imageDataRef.current['description'] = textInputRef.current.value;
          imageDataRef.current['name'] = file.name;
          imageDataRef.current['uid'] = user_uid;
          await addImageItem(imageDataRef.current);
          console.log('업로드 완료!');
        }
      }
    }
  };

  const handleDeleteImage = () => {
    setFile(null);
    setPreview(null);
  };

  const handleDeleteText = () => {
    textInputRef.current.value = '';
  };

  const onFileDrop = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
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
      <p>파일 업로드 개수: {urlList ? urlList.length : 0}</p>
      <p>{isLoading ? '로딩중' : '로딩끝!'}</p>
    </S.FlexContainer>
  );
}

const initialFormState = {
  category_name: '',
  description: '',
};

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
