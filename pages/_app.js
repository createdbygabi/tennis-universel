import "../styles/globals.css";
import { appWithTranslation } from "next-i18next";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

function App({ Component, pageProps }) {
  return (
    <>
      <Navigation />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default appWithTranslation(App);
