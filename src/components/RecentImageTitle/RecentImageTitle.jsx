import styled from 'styled-components/macro';
import PropTypes from 'prop-types';


const RecentImageContents = styled.h3`
  color: #4e4c4c;
  /* display: inline-block; */
  font-size: 40px;
  font-weight: 700;
  line-height: 160px;
  text-align: center;
  margin-top: -411px;
  /* width: 100vw; */
`;



export function RecentImageTitle({ title }) {
  return (
      <RecentImageContents>{title}</RecentImageContents>
  );
}

RecentImageTitle.propTypes = {
  title: PropTypes.string,
};
