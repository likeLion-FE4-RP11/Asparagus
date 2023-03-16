import styled from 'styled-components/macro';

const CategoryTitleContainer = styled.div`
  background: #f2e9e4;
  text-align: center;
  display: block;
  margin: 0;
  padding: 0;
  width: 100vw;
  height: 160px;
`;

const CategoryContents = styled.h3`
  color: #4e4c4c;
  /* display: inline-block; */
  font-size: 40px;
  font-weight: 700;
  line-height: 160px;
  letter-spacing: 40;
`;

export function CategoryTitle({ title }) {
  return (
    <CategoryTitleContainer>
      <CategoryContents>{title}</CategoryContents>
    </CategoryTitleContainer>
  );
}
