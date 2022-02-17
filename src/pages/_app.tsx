import type { AppProps } from 'next/app'
import { DevsProvider } from '../hooks/useDevs';
import { ModalProvider } from '../hooks/useModal';

import GlobalStyle from '../styles/global';

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
