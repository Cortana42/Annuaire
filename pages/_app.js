import { InfoContextProvider } from "../components/InfoContext";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <InfoContextProvider>
      <Component {...pageProps} />
    </InfoContextProvider>
  );
}

export default MyApp;
