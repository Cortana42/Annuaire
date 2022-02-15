import "../styles/globals.css";
import { InfoContextProvider } from "../components/InfoContext";

function MyApp({ Component, pageProps }) {
  return (
    <InfoContextProvider>
      <Component {...pageProps} />
    </InfoContextProvider>
  );
}

export default MyApp;
