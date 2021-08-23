import "../styles/globals.css";
import { AppWrapper } from "../context/context.js";
import Layout from "../components/Layout.js";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <AppWrapper>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </AppWrapper>
    </>
  );
}

export default MyApp;
