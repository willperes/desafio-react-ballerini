import type { AppProps } from 'next/app'
import { DevsProvider } from '../src/hooks/useDevs';
import { ModalProvider } from '../src/hooks/useModal';

import GlobalStyle from '../src/styles/global';

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
