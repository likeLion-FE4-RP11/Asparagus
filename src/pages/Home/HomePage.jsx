import { useDocumentTitle } from '@/hooks/useDocumentTitle';
import {
  MainSwiper, 
  SeeMoreButton, 
  SeeMoreImg,
  TopButton,
  CategoryTitle,
  Category,
} from '@/components'
import { useCallback, useRef, useState } from 'react';
import styled from 'styled-components/macro';


// export const mainContainer = styled.section`
//   max-width: 1920px;
// `;

export default function HomePage() {
  useDocumentTitle('HomePage');

  const handelUpload = useCallback(() => {
    console.log('업로드 버튼 클릭');
  }, []);



  return <>
    <MainSwiper/>
    <CategoryTitle title="C A T E G O R Y" />
    <Category />
    <TopButton />
    </>
}