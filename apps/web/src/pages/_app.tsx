import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import store from 'state';
// import { ModalProvider  } from '@pancakeswap/uikit';
import Providers from '../Providers';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Providers store={store}>
      {/* <ResetCSS /> */}
      <Component {...pageProps} />
    </Providers>
  );
}
