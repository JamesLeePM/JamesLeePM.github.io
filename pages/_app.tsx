import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import RootLayout from "../Layout/RootLayout";
import { store } from "../store";
import "../styles/globals.scss";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <Provider store={store}>
      <RootLayout>
        <Component {...pageProps} />
      </RootLayout>
    </Provider>
  );
};

export default App;
