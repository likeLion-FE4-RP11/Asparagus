import Header from '@/components/Header/Header';
import '@/components/Swiper/Swiper';
import { AllSwiper } from '@/components/Swiper/Swiper';
import { ImageContainer, BaseImage } from '@/components/index';
import Footer from '@/components/Footer/Footer';;
import { TopButton, TopButtonTest } from '@/components/index';

function App() {
  return(
  <div>
    <Header />
    <h1>Test Swiper</h1>
    <AllSwiper></AllSwiper>
    <h2>Image 컴포넌트 테스트</h2>
    <BaseImage width="430px" height="633px" />
    <ImageContainer width="430px" height="633px" />
    <TopButtonTest />
      <TopButton />
    <Footer />
  </div>)
}

export default App;
