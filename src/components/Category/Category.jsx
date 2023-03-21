import {  useRef, useState, useCallback  } from 'react';
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
  align-items: center;
  position: relative;
  top: -431px;
  z-index: 2;
  margin-left: 180px;
`


const ButtonContents = styled.button `
  weight: 367.39px;
  height: 510.51px;
  /* border: none; */
  background-color: #FFFFFF;
  cursor: pointer;
  padding: 17.34px;
  margin-top: 123px;
  margin-right: 30.15px;
  align-items: row;
  vertical-align: bottom;
  border-style: solid;
  border-color: #00000080;
  border-width: 1px;
  border-radius: 10px;
  font-size: 35px;
  text-align: left;

  img {
    display: block;
    margin-bottom: 126.51px;
  }
`


export function Category() {
  // const categories = ['Daily', 'Travel', 'Food', 'Hobby'];
  const handleSelect = (e) => {
      console.log(e.target.innerText);
  };
  return (
    <ButtonContainer>
      <ButtonContents type="button" onClick={(e)=>handleSelect(e)}>
        <img src={FirstMask} />Daily
      </ButtonContents>
      <ButtonContents type="button" onClick={(e)=>handleSelect(e)}>
        <img src={SecondMask} />Travel
      </ButtonContents>
      <ButtonContents type="button" onClick={(e)=>handleSelect(e)}>
        <img src={ThirdMask} />Food
      </ButtonContents>
      <ButtonContents type="button" onClick={(e)=>handleSelect(e)}>
        <img src={FourthMask} />Hobby
      </ButtonContents>
    </ButtonContainer>    
  );
}

  // const renderCategory = (categories) => {
  //   return (
  //     <ul>
  //       {categories.map((category, index) => (
  //         <li key={index}>{category}</li>
  //       ))}
  //     </ul>
  //   );
  // };




