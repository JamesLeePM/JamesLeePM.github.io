import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { store } from "../store";
import RootLayout from "../Layout/RootLayout";
import Modal from "../components/Modal";
import "../styles/globals.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/global.scss";
import "../styles/Contact.module.scss";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <RootLayout>
        <Component {...pageProps} />
        <Modal />
      </RootLayout>
    </Provider>
  );
}

export default MyApp;
