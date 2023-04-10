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
`;

const StyledLink = styled(Link)`
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  height: 100%;
  background-color: #ffffff;
  cursor: pointer;
  padding: 1rem;
  border: 1px solid rgba(0, 0, 0, 0.5);
  border-width: 1px;
  border-radius: 10px;

  img {
    display: block;
    margin-bottom: 4rem;
    @media (max-width: 768px) {
      margin-bottom: 10px;
    }
  }
`;

const CategoryTitle = styled.span`
  text-align: left;
  font-size: 2rem;
  display: block;
  @media (max-width: 768px) {
    text-align: center;
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
            <CategoryTitle>{category}</CategoryTitle>
          </StyledLink>
        );
      })}
    </ButtonContainer>
  );
}
