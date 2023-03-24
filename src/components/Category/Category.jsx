import styled from 'styled-components/macro';
import FirstMask from '@/assets/FirstMask.svg';
import SecondMask from '@/assets/SecondMask.svg';
import ThirdMask from '@/assets/ThirdMask.svg';
import FourthMask from '@/assets/FourthMask.svg';

const ButtonContainer = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  gap: 1.8844rem;
  padding: 0 1.8844rem;
  height: 31.906875rem;
  position: relative;
  top: -431px;
  z-index: 2;
  margin: 0 auto;
`;

const ButtonContents = styled.button`
  height: 100%;
  background-color: #ffffff;
  cursor: pointer;
  padding: 17.34px;
  margin-top: 7.6875rem;
  border: 1px solid rgba(0, 0, 0, 0.5);
  border-width: 1px;
  border-radius: 10px;
  font-size: 35px;
  text-align: left;

  img {
    display: block;
    margin-bottom: 4rem;
  }
`;

export function Category() {
  const handleSelect = (e) => {
    console.log(e.target.innerText);
  };
  return (
    <ButtonContainer>
      <ButtonContents type="button" onClick={handleSelect}>
        <img src={FirstMask} alt="FirstMask" />
        Daily
      </ButtonContents>
      <ButtonContents type="button" onClick={handleSelect}>
        <img src={SecondMask} alt="SecondMask" />
        Travel
      </ButtonContents>
      <ButtonContents type="button" onClick={handleSelect}>
        <img src={ThirdMask} alt="ThirdMask" />
        Food
      </ButtonContents>
      <ButtonContents type="button" onClick={handleSelect}>
        <img src={FourthMask} alt="FourthMask" />
        Hobby
      </ButtonContents>
    </ButtonContainer>
  );
}




