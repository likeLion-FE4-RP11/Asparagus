import PropTypes from 'prop-types';
import { getColor } from '@/theme/utils';
import styled from 'styled-components/macro';

const ParagraphSection = styled.section`
  margin: 0 auto;
  font-size: 43px;
  word-break: normal;
  width: 60%;
  text-align: center;
  background-color: aquamarine;
`;

export function DesignParagraph({ children }) {
  // toggle button state 받기
  const tempIsDark = false;

  return (
    <ParagraphSection>
      <p
        style={{
          color: tempIsDark ? getColor('white') : getColor('secondary'),
        }}
      >
        {children}
      </p>
    </ParagraphSection>
  );
}

DesignParagraph.defualtProps = {
  children: '디자인 문구를 넣는 곳입니다. ',
};

DesignParagraph.propTypes = {
  children: PropTypes.node,
};
