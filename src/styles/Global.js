import Colors from './Colors'
import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  html {
    font-size: 62.5%;
    font-family: 'Playfair Display', serif;
    scroll-behavior: smooth;
  }

  body {
    font-size: 1.4rem;
    margin: 0;
    padding: 0;
    border: 0;

    a {
      text-decoration: none;
      color: ${Colors.WHITE};
    }
  }
`
