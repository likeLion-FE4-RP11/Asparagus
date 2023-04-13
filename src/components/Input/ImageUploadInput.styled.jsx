import styled from 'styled-components/macro';

export const UploadSection = styled.section`
  margin: 0 auto;
  width: 100%;
  height: 31.25rem;
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

  &:focus-within {
    box-shadow: 0 0 10px 3px rgba(147, 8, 246, 0.556);
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
  gap: 1.875rem;
`;

export const UploadLogo = styled.img`
  width: 3.75rem;
  height: 3.75rem;
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
