import "../../styles/globals.css";
import type { AppProps } from "next/app";
import { ContextProvider } from "../hooks/useContext";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ContextProvider>
      <Component {...pageProps} />
    </ContextProvider>
  );
}

export default MyApp;
