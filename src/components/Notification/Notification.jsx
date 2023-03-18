import { getColor } from '@/theme/utils';
import ImageLockIcon from '@/assets/lock-icon.svg';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useRef } from 'react';
import * as S from './Notification.styled';
// import { createPortal } from 'react-dom';

// const notificationContainer = document.getElementById('notificationContainer');
// 포탈생성 후 버튼 클릭시 notification 안떠서 포탈 생성은 보류.

export function Notification() {
  // 모달창 상태 만들기
  const [modal, setModal] = useState(true);
  // Ref 객체 생성
  const outside = useRef();

  return (
    <>
      {/* 접근하고 싶은 태그에 ref속성 주기 */}
      {modal && (
        <S.NotificationWrap
          ref={outside}
          onClick={(e) => {
            {
              /* current는 접근하고 싶은 DOM를 가리킨다. 클릭한 요소가 outside.current가 맞다면 Notification이 꺼진다. */
            }
            if (e.target == outside.current) setModal(false);
          }}
        >
          <AnimatePresence>
            <motion.div
              initial={{ opacity: 0.2 }}
              whileInView={{
                opacity: 1,
                rotate: [0, 360],
                borderRadius: ['20%', '50%'],
                transition: { delay: 0.05 },
              }}
              whileHover={{
                scale: 1.2,
                transition: { type: 'spring', stiffness: 400, damping: 10 },
              }}
            >
              <S.AnimateBox>
                <S.NotificationLogo src={ImageLockIcon} alt="비공개잠금화면" />
                <S.NotificationTitle color={getColor('content')}>
                  It's private now
                </S.NotificationTitle>
                <S.NotificationContent color={getColor('content')}>
                  Press the toggle button<br></br>again to make it public
                </S.NotificationContent>
              </S.AnimateBox>
            </motion.div>
          </AnimatePresence>
        </S.NotificationWrap>
      )}
    </>
  );
}
