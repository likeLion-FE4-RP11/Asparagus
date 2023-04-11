import styled from 'styled-components/macro';
import PropTypes from 'prop-types';

const CategoryTitleContainer = styled.div`
  display: block;
  padding: 50px 0;
  text-align: center;
  margin-top: 200px;
  width: 100%;
  @media (max-width: 768px) {
    padding: 25px 0;
  }
`;

const CategoryContents = styled.h3`
  color: #4e4c4c;
  /* display: inline-block; */
  font-size: 2rem;
  font-weight: 500;
`;

export function CategoryTitle({ title }) {
  return (
    <CategoryTitleContainer>
      <CategoryContents>{title}</CategoryContents>
    </CategoryTitleContainer>
  );
}

CategoryTitle.propTypes = {
  title: PropTypes.string,
};
