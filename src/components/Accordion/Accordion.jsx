import { useRef, useState, useCallback } from 'react';
import * as S from './Accordion.styled';
import ArrowDown from '@/assets/arrow-down.svg';
import ArrowUp from '@/assets/arrow-up.svg';

export function Accordion() {
  const parentRef = useRef(null);
  const childRef = useRef(null);
  const categories = ['Daily', 'Travel', 'Food', 'Hobby'];
  const [isCollapse, setIsCollapse] = useState(false);

  const handleButtonClick = useCallback(
    (event) => {
      event.stopPropagation();
      if (parentRef.current === null || childRef.current === null) {
        return;
      }
      if (parentRef.current.clientHeight > 0) {
        parentRef.current.style.height = '0';
      } else {
        parentRef.current.style.height = `${childRef.current.clientHeight}px`;
      }
      setIsCollapse(!isCollapse);
    },
    [isCollapse]
  );

  const parentRefHeight = parentRef.current?.style.height ?? '0px';
  const buttonText =
    parentRefHeight === '0px' ? (
      <img src={ArrowDown} alt="열기" />
    ) : (
      <img src={ArrowUp} alt="닫기" />
    );

  const handleSelect = (e) => {
    if (e.target.nodeName === 'LI') {
      console.log(e.target.innerText);
    }
  };

  return (
    <S.Container>
      <S.Header>
        Category options
        <S.Button type="button" onClick={handleButtonClick}>
          {buttonText}
        </S.Button>
      </S.Header>
      <S.ContentsWrapper ref={parentRef}>
        <S.Contents ref={childRef} onClick={handleSelect}>
          {renderCategory(categories)}
        </S.Contents>
      </S.ContentsWrapper>
    </S.Container>
  );
}

const renderCategory = (categories) => {
  return (
    <ul>
      {categories.map((category, index) => (
        <li key={index}>{category}</li>
      ))}
    </ul>
  );
};
