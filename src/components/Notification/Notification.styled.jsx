import styled from 'styled-components/macro';

export const NotificationWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 50%;
  z-index: 10000;
  width: 100%;
`;

export const AnimateBox = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  background-color: rgba(255, 255, 255, 0.7);
  width: 600px;
  height: 700px;
  border-radius: 50px;
  backdrop-filter: blur(5px);
  box-shadow: 1px 10px 10px -4px rgba(0, 0, 0, 0.1);
  cursor: pointer;
`;

export const NotificationLogo = styled.img`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 30px;
  width: 278px;
  height: 278px;
`;

export const NotificationTitle = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px 0 0 0;
  font-size: 50px;
  color: ${(props) => props.color};
  font-weight: bold;
`;

export const NotificationContent = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 40px 0 0 0;
  font-size: 32px;
  font-weight: 400;
  color: ${(props) => props.color};
  line-height: 50px;
`;
