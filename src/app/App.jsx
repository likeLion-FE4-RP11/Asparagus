import Header from '@/components/Header/Header';
import '@/components/Swiper/Swiper';
import { AllSwiper } from '@/components/Swiper/Swiper';
import Footer from '@/components/Footer/Footer';

function App() {
  return (
    <div>
      <Header />
      <h1>Test Swiper</h1>
      <AllSwiper></AllSwiper>
      <Footer />
    </div>
  );
}

export default App;
