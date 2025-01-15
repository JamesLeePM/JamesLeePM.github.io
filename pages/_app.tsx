import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import Header from "../components/Header";
import { store } from "../store";
import "../styles/globals.scss";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <div className="layout">
        <Header />
        <main>
          <Component {...pageProps} />
        </main>
      </div>
    </Provider>
  );
}
