import styled from 'styled-components/macro';
import PropTypes from 'prop-types';

const CategoryTitleContainer = styled.div`
  background: #f2e9e4;
  text-align: center;
  display: block;
  padding: 0;
  height: 474px;
  position: relative;
  z-index: 1;
`;

const CategoryContents = styled.h3`
  color: #4e4c4c;
  /* display: inline-block; */
  font-size: 40px;
  font-weight: 700;
  line-height: 160px;
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
