import PropTypes from 'prop-types';
import { getColor } from '@/theme/utils';
import styled from 'styled-components/macro';

const ParagraphSection = styled.section`
  margin: 0 auto;
  font-size: 1.8rem;
  text-align: center;
  margin-bottom: 100px;

  @media screen and (max-width: 940px) {
    font-size: 2rem;
    word-wrap: normal;
  }
`;

const Paragraph = styled.h3`
  color: ${(props) => props.theme.fontColor};
  white-space: nomal;
  line-height: 1.7;
  display: inline-block;
  width: 500px;
`;

export function DesignParagraph({ children }) {
  return (
    <ParagraphSection>
      <Paragraph tabIndex={0}>{children}</Paragraph>
    </ParagraphSection>
  );
}

DesignParagraph.defualtProps = {
  children: '디자인 문구를 넣는 곳입니다. ',
};

DesignParagraph.propTypes = {
  children: PropTypes.node,
};
