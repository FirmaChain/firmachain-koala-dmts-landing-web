import type { AppProps } from 'next/app';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import '../styles/globals.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import useViewport from '../hooks/useViewport';

const theme = {};

const GlobalStyle = createGlobalStyle`
`;

export default function App({ Component, pageProps }: AppProps) {
  useViewport();

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
