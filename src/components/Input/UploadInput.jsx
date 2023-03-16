import styled from 'styled-components/macro';
import { A11yHidden } from '@/components/index';
import { useState, useEffect } from 'react';

const UploadSection = styled.section`
  background-color: beige;
  width: 81.40625%;
  height: 20vh;
`;

const Input = styled.input`
  background-color: azure;
  &::file-selector-button {
    display: none;
  }
`;

export function UploadInput() {
  // 연결 시 form에 넣을 상태
  const [file, setFile] = useState();

  useEffect(() => {
    console.log(file);
  }, [file]);

  const handleInput = async (e) => {
    setFile(e.target.files[0]);
  };

  return (
    <UploadSection>
      <A11yHidden as="label" htmlFor="uploadInput">
        이미지 업로드
      </A11yHidden>
      <Input type="file" id="uploadInput" onChange={handleInput} />
    </UploadSection>
  );
}
