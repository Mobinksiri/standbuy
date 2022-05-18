import { Meta } from "../components/styles/Meta";
import "../styles/globals.scss";

function MyApp({ Component, pageProps }) {
   return (
      <>
         <Meta />
         <Component {...pageProps} />
      </>
   );
}

export default MyApp;
