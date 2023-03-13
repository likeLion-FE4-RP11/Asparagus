import './App.css';
import { ImageContainer } from '@/components/index';

function App() {
  return (
    <div className="App">
      <h2>Image 컴포넌트 테스트</h2>
      <ImageContainer />
      <ImageContainer width="430px" height="633px" />
    </div>
  );
}

export default App;
