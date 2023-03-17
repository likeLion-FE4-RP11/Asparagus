import { useState } from 'react';
import {
  Footer,
  Header,
  AllSwiper,
  ToggleButton,
  ImageContainer,
  BaseImage,
  TopButton,
  TopButtonTest,
  DesignParagraph,
  DeleteButton,
  CategoryTitle,
  SeeMoreButton,
  LikeButton,
  ImageUploadInput,
} from '@/components/index';

function App() {
  const travelParagraph =
    '#Snapshot #Golden Gate Bridge | #phtographer #America #i want freedom';

  return (
    <div>
      <Header />
      <ToggleButton />
      <h1>Test Swiper</h1>
      <AllSwiper></AllSwiper>
      <h2>Image 컴포넌트 테스트</h2>
      <BaseImage width="430px" height="633px" />
      <ImageContainer width="430px" height="633px" />
      <TopButtonTest />
      <TopButton />
      <DesignParagraph>{travelParagraph}</DesignParagraph>
      <DeleteButton>Delete</DeleteButton>
      <CategoryTitle title="카테고리 타이틀 입력하는 곳" />
      <ImageUploadInput />
      <Footer />
      <LikeButton />
      <SeeMoreButton />
    </div>
  );
}

export default App;
