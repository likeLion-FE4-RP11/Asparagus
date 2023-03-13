import { useState } from 'react';
import { ButtonToggle } from '@/components/index';

function App() {
  const [isToggled, setIsToggled] = useState(false);
  return (
    <ButtonToggle
      isToggled={isToggled}
      onToggle={() => setIsToggled(!isToggled)}
    />
  );
}

export default App;
