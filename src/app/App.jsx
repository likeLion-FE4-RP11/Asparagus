import { useState } from 'react';
import { ButtonToggle, ImageContainer, BaseImage, TopButton, TopButtonTest, DesignParagraph, DeleteButton } from '@/components/index';
import Header from '@/components/Header/Header';
import '@/components/Swiper/Swiper';
import { AllSwiper } from '@/components/Swiper/Swiper';
import Footer from '@/components/Footer/Footer';

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
      <Footer />
    </div>
  );
}

export default App;
