import styled from 'styled-components/macro';

export const FlexContainer = styled.section`
  width: 100%;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.h3`
  width: 100%;
  font-size: ${(props) => props.fontSize};
  font-weight: 700;
  color: ${(props) => props.color};
`;

export const ImageSection = styled.section`
  position: relative;
  width: 100%;
`;

export const ImageTitle = styled(Title)`
  margin: 13.4375rem 0 2.5625rem 0;
`;

export const DescriptionSection = styled.section`
  position: relative;
  width: 100%;
  margin-bottom: 13.4375rem;
`;

export const DescriptionTitle = styled(Title)`
  margin-bottom: 3.2175rem;
`;

export const SubSection = styled.div`
  width: 100%;
  margin-top: 2.9375rem;
  margin-bottom: 6.25rem;
  display: flex;
  flex-flow: row-reverse nowrap;
  justify-content: space-between;
`;

export const Test = styled.div`
  width: 100%;
`;
