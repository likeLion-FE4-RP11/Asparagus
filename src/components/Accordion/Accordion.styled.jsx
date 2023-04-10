import styled from 'styled-components/macro';

export const Container = styled.section`
  background: flex;
  position: relative;
  flex-direction: column;
  justify-content: center;
  border-radius: 4px;
  border: 1px solid silver;
  width: 300px;
`;

export const Header = styled.section`
  display: flex;
  align-items: center;
  height: 65px;
  padding: 0 35px 0 25px;
  font-size: 20px;
  font-weight: 600;
`;

export const Button = styled.button`
  display: flex;
  flex-flow: row;
  align-items: center;
  border: none;
  background-color: transparent;
  position: absolute;
  right: 10px;
  cursor: pointer;

  img {
    width: 40px;
  }
`;

export const ContentsWrapper = styled.section`
  height: 0;
  width: 100%;
  overflow: hidden;
  transition: height 0.35s ease;
`;

export const Contents = styled.section`
  font-size: 20px;
  padding: 0 25px;

  ul {
    display: flex;
    flex-direction: column;
    width: 100%;
    padding-bottom: 10px;
  }

  li {
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: flex-start;
    height: 50px;
    background-color: #ffffff;
    margin-top: 10px;
    position: relative;
    cursor: pointer;
  }

  li::after {
    content: '';
    width: 100%;
    border-bottom: solid 1px #999999;
    left: 0;
  }

  li:hover {
    background-color: ${(props) => props.bgColor};
  }
`;
