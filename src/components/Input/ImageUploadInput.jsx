import { A11yHidden } from '@/components/index';
import {
  useState,
  useRef,
  forwardRef,
  useId,
  useImperativeHandle,
} from 'react';
import ImageUploadIcon from '@/assets/imageUpload-icon.svg';
import { getColor, getFontSize } from '@/theme/utils';
import * as S from './ImageUploadInput.styled';
import PropTypes from 'prop-types';

// upload form에서 fileInputRef를 전달받아서 input에 ref를 할당해야함 (useUploadFile() 사용법)
export const ImageUploadInput = forwardRef(function UploadInput(
  _,
  fileInputRef
) {
  const id = useId();

  // 이미지 파일
  const [file, setFile] = useState(null);
  // 미리보기 이미지
  const [preview, setPreview] = useState(null);

  const wrapperRef = useRef(null);

  // DOM에 접근할 때: side effect -> useEffect에서 실행하도록 리팩토링 필요
  const onDragEnter = () => wrapperRef.current.classList.add('dragover');
  const onDragLeave = () => wrapperRef.current.classList.remove('dragover');
  const onDrop = () => wrapperRef.current.classList.remove('dragover');

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

  useImperativeHandle(fileInputRef, () => ({
    initFilePreview,
  }));

  const initFilePreview = () => {
    setFile(null);
    setPreview(null);
  };

  return (
    <S.UploadSection
      onDragEnter={onDragEnter}
      onDragLeave={onDragLeave}
      onDrop={onDrop}
      tabIndex="0"
    >
      {file ? (
        <S.PreviewImage>
          <img src={preview} alt="미리보기 이미지" />
          <p>{file.name}</p>
        </S.PreviewImage>
      ) : (
        <S.DescriptionContainer ref={wrapperRef}>
          <S.UploadLogo src={ImageUploadIcon} alt="이미지 업로드" />
          <S.Description
            color={getColor('gray/200')}
            fontSize={getFontSize('2xl')}
          >
            please put image here
          </S.Description>
        </S.DescriptionContainer>
      )}

      <A11yHidden as="label" htmlFor={id}>
        이미지 파일 업로드
      </A11yHidden>
      <S.Input ref={fileInputRef} type="file" id={id} onChange={onFileDrop} />
    </S.UploadSection>
  );
});

ImageUploadInput.propTypes = {
  file: PropTypes.object,
  preview: PropTypes.string,
  onFileDrop: PropTypes.func,
};
