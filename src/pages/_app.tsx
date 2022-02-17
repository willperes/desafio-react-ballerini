import type { AppProps } from 'next/app'
import { DevsProvider } from '../hooks/useDevs';
import { ModalProvider } from '../hooks/useModal';

import GlobalStyle from '../styles/global';

import NProgress from 'nprogress';
import '../styles/nprogress.css';
import { Router } from 'next/router';

Router.events.on('routeChangeStart', () => {
  NProgress.start();
})

Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <DevsProvider>
      <ModalProvider>
        <Component {...pageProps} />
        <GlobalStyle />
      </ModalProvider>
    </DevsProvider>
  );
}

export default MyApp
