import { ImageContainer, BaseImage } from '@/components/index';

function App() {
  return (
    <div className="App">
      <h2>Image 컴포넌트 테스트</h2>
      <BaseImage width="430px" height="633px" />
      <ImageContainer width="430px" height="633px" />
    </div>
  );
}

export default App;
