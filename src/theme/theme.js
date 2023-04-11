import { createGlobalStyle } from 'styled-components';

export const LightTheme = {
  body: '#ffffff',
  hdColor: '#f2e9e4',
  fontColor: '#333333',
  icon: '#333333',
};

export const DarkTheme = {
  body: '#1e2330',
  hdColor: '#121724',
  fontColor: '#ffffff',
  icon: '#ffffff',
};

export const GlobalStyles = createGlobalStyle`
  body {
    background-color : ${(props) => props.theme.body};
    font-color : ${(props) => props.theme.fontColor};
    transition : all .5s linear;
  }
  .header {
    background-color : ${(props) => props.theme.hdColor};
    transition : all .5s linear;
    
  }
  .nav-1, .nav-2, .nav-3, .nav-4, .nav-5 {
    color : ${(props) => props.theme.fontColor};
    transition : all .5s linear;
  }
`;
