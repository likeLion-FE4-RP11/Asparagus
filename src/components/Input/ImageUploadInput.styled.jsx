import styled from 'styled-components/macro';

export const UploadSection = styled.section`
  margin: 0 auto;
  width: 81.40625%;
  height: 50vh;
  border: 2px dashed black;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  position: relative;

  &:hover,
  .dragover {
    opacity: 0.6;
  }
`;

export const Input = styled.input`
  opacity: 0;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;

  &::file-selector-button {
    display: none;
  }
`;

export const DescriptionContainer = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  gap: 30px;
`;

export const UploadLogo = styled.img`
  width: 75px;
  height: 75px;
`;

export const Description = styled.p`
  color: ${(props) => props.color};
  font-size: ${(props) => props.fontSize};
  font-weight: 600;
`;

export const PreviewImage = styled.div`
  display: flex;
  flex-flow: column nowrap;
  gap: 30px;
  justify-content: center;
  align-items: center;

  img {
    height: 20%;
  }
`;
