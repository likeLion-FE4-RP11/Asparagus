import './App.css';
import { DesignParagraph } from '@/components/index';

function App() {
  const travelParagraph =
    '#Snapshot #Golden Gate Bridge | #phtographer #America #i want freedom';
  return (
    <>
      <DesignParagraph>{travelParagraph}</DesignParagraph>
    </>
  );
}

export default App;
