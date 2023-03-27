import styled from 'styled-components/macro';
import FirstMask from '@/assets/FirstMask.svg';
import SecondMask from '@/assets/SecondMask.svg';
import ThirdMask from '@/assets/ThirdMask.svg';
import FourthMask from '@/assets/FourthMask.svg';
import { Link } from 'react-router-dom';

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

const StyledLink = styled(Link)`
  display: block;
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

const categories = ['Daily', 'Travel', 'Food', 'Hobby'];
const sources = [FirstMask, SecondMask, ThirdMask, FourthMask];
const descriptions = ['FirstMask', 'SecondMask', 'ThirdMask', 'FourthMask'];

export function Category() {
  return (
    <ButtonContainer>
      {categories.map((category, index) => {
        return (
          <StyledLink to={`/categories/${category}`} key={category}>
            <img src={sources[index]} alt={descriptions[index]} />
            {category}
          </StyledLink>
        );
      })}
    </ButtonContainer>
  );
}
