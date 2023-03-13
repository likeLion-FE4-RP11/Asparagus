import React, { useState } from 'react';
import ButtonToggle from '@/components/Button/ButtonToggle';

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
