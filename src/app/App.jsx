import '@/components/Swiper/Swiper';
import Footer from '@/components/Footer/Footer';
import { AllSwiper } from '@/components/Swiper/Swiper';
import {
  ToggleButton,
  ImageContainer,
  BaseImage,
  TopButton,
  TopButtonTest,
  DesignParagraph,
  DeleteButton,
  CategoryTitle,
  Header,
  UseHover,
} from '@/components/index';
import LikeButton from '@/components/LikeButton/LikeButton';

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
      <Footer />
      <LikeButton />
      <UseHover
        initial={{ width: '0%', opacity: 0 }}
        whileHover={{ width: '100%', opacity: 0.8 }}
        transition={{ type: 'spring', bounce: 0.2 }}
      />
    </div>
  );
}

export default App;
