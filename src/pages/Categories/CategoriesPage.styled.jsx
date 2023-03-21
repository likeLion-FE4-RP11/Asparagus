import styled from 'styled-components/macro';

export const FirstContainer = styled.section`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 1.2rem;
  padding: 1rem;
  margin-top: 6rem;
  margin-bottom: 8.75rem;
  @media screen and (max-width: 940px) {
    grid-template-columns: 1fr;
    grid-gap: 1.2rem;
  }
`;

export const SecondContainer = styled.section`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 1.2rem;
  padding: 1rem;
  margin-top: 8.75rem;
  margin-bottom: 8.75rem;
  @media screen and (max-width: 940px) {
    grid-template-columns: 1fr;
    grid-gap: 1.2rem;
`;
