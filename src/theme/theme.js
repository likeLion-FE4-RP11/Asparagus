import { createGlobalStyle } from 'styled-components';

export const LightTheme = {
  body: '#ffffff',
  hdColor: '#f2e9e4',
  fontColor: '#333333',
};

export const DarkTheme = {
  body: '#1e2330',
  hdColor: '#121724',
  fontColor: '#ffffff',
};

export const GlobalStyles = createGlobalStyle`
background-color : ${(props) => props.theme.hdColor};
  body {
    background-color : ${(props) => props.theme.body};
    font-color : ${(props) => props.theme.fontColor};
  }
`;
