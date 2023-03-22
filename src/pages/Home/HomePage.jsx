import { useDocumentTitle } from '@/hooks/useDocumentTitle';
import {
  MainSwiper, 
  SeeMoreButton, 
  SeeMoreImg,
  TopButton,
  CategoryTitle,
  Category,
  RecentImageTitle,
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
    <RecentImageTitle title="R E C E N T&nbsp;&nbsp;&nbsp;&nbsp;I M A G E" />
    <SeeMoreImg />
    <SeeMoreButton
        onClick={handelUpload}
        style={{marginTop: '130px', marginBottom: '130px' }}
      >
      </SeeMoreButton>
    <SeeMoreImg />
    <TopButton />
    </>
}
