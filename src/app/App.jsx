import { useState } from 'react';
import '@/components/Swiper/Swiper';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import { AllSwiper } from '@/components/Swiper/Swiper';
import { ButtonToggle, ImageContainer, BaseImage, TopButton, TopButtonTest, DesignParagraph, DeleteButton, CategoryTitle} from '@/components/index';
import {LikeButton} from '@/components/index'

function App() {
  const travelParagraph =
    '#Snapshot #Golden Gate Bridge | #phtographer #America #i want freedom';
  const [isToggled, setIsToggled] = useState(false);

  return (
    <div>
      <Header />
      <ButtonToggle
      isToggled={isToggled}
      onToggle={() => setIsToggled(!isToggled)}/>
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
      <Footer />
      <LikeButton />
    </div>
  );
}

export default App;
