import styled from 'styled-components/macro';
import PropTypes from 'prop-types';

const CategoryTitleContainer = styled.div`
  text-align: center;
  display: block;
  padding: 50px 0;
  margin-top: 30px;
  width: 100%;
  height: 100%;
  position: relative;
  z-index: 1;
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
