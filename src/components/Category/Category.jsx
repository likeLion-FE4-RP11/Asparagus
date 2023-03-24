import styled from 'styled-components/macro';
import FirstMask from '@/assets/FirstMask.svg';
import SecondMask from '@/assets/SecondMask.svg';
import ThirdMask from '@/assets/ThirdMask.svg';
import FourthMask from '@/assets/FourthMask.svg';

const ButtonContainer = styled.div`
  display: flex;
	text-align: center;
  weight: 1560px;
  height: 633.51px;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  gap: 30.15px;
  position: relative;
  top: -431px;
  z-index: 2;
  /* margin-left: 180px; */
`


const ButtonContents = styled.button `
  weight: 367.39px;
  height: 510.51px;
  background-color: #FFFFFF;
  cursor: pointer;
  padding: 17.34px;
  margin-top: 123px;
  /* margin-right: 30.15px; */
  align-items: row;
  vertical-align: bottom;
  border-style: solid;
  border-color: #00000080;
  border-width: 1px;
  border-radius: 10px;
  font-size: 35px;
  text-align: left;
  display: block;

  img {
    display: block;
    margin-bottom: 126.51px;
  }
`


export function Category() {
  const handleSelect = (e) => {
      console.log(e.target.innerText);
  };
  return (
    <ButtonContainer>
      <ButtonContents type="button" onClick={handleSelect}>
        <img src={FirstMask} alt="FirstMask" />Daily
      </ButtonContents>
      <ButtonContents type="button" onClick={handleSelect}>
        <img src={SecondMask} alt="SecondMask" />Travel
      </ButtonContents>
      <ButtonContents type="button" onClick={handleSelect}>
        <img src={ThirdMask} alt="ThirdMask" />Food
      </ButtonContents>
      <ButtonContents type="button" onClick={handleSelect}>
        <img src={FourthMask} alt="FourthMask" />Hobby
      </ButtonContents>
    </ButtonContainer>    
  );
}





