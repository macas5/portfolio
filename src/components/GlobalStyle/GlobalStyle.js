import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    transition: all 0.50s linear;
  }
  
  .shadow {
    box-shadow: ${({ theme }) => theme.shadow};
  }
  
  .active {
    background: ${({ theme }) => theme.active};
  }`