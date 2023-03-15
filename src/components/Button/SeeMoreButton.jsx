import { useState } from 'react';

import { SeeMoreImg } from '@/components/index';

export function SeeMoreButton() {
  const [modal, setModal] = useState(false);

  const handleSeeMore = () => {
    setModal(!modal);
  };

  return (
    <div>
      <button onClick={handleSeeMore}>테스트</button>
      {modal == true ? <SeeMoreImg /> : null}
    </div>
  );
}
