import styled from 'styled-components/macro';

export const Container = styled.section`
  background: flex;
  position: relative;
  flex-direction: column;
  justify-content: center;
  border-radius: 4px;
  border: 1px solid silver;
  width: 486.93px;
`;

export const Header = styled.section`
  display: flex;
  align-items: center;
  height: 106.24px;
  padding: 27px 35px 27px 35px;
  font-size: 35.41px;
  font-weight: 600;
`;

export const Button = styled.button`
  display: flex;
  flex-flow: row;
  align-items: center;
  border: none;
  background-color: transparent;
  position: absolute;
  right: 35px;
  cursor: pointer;
`;

export const ContentsWrapper = styled.section`
  height: 0;
  width: 100%;
  overflow: hidden;
  transition: height 0.35s ease;
`;

export const Contents = styled.section`
  font-size: 35.41px;
  padding: 4px 8px;

  ul {
    display: flex;
    flex-direction: column;
    height: fit-content;
    width: 100%;
    padding: 0;
    margin: 0;
  }

  li {
    display: flex;
    flex-flow: column nowrap;
    align-items: flex-start;
    height: 50px;
    padding-left: 10px;
    list-style: none;
    background-color: #ffffff;
    margin: 26.56px 0;
    position: relative;
    cursor: pointer;
  }

  li::after {
    content: '';
    display: block;
    width: 100%;
    height: 1px;
    background-color: #999999;
    position: absolute;
    top: 66.56px;
    left: 0;
  }

  li:hover {
    height: 100%;
    background-color: ${(props) => props.bgColor};
  }
`;
