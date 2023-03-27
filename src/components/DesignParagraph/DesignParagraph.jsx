import PropTypes from 'prop-types';
import { getColor } from '@/theme/utils';
import styled from 'styled-components/macro';

const ParagraphSection = styled.section`
  margin: 0 auto;
  font-size: 43px;
  word-break: normal;
  width: 70%;
  text-align: center;
  margin-bottom: 120px;
`;

const Paragraph = styled.p`
  color: ${(props) => props.theme.fontColor};
`;

export function DesignParagraph({ children }) {
  return (
    <ParagraphSection>
      <Paragraph>{children}</Paragraph>
    </ParagraphSection>
  );
}

DesignParagraph.defualtProps = {
  children: '디자인 문구를 넣는 곳입니다. ',
};

DesignParagraph.propTypes = {
  children: PropTypes.node,
};
