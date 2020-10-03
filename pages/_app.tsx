import * as React from "react";
import Head from "next/head";
import Header from "../components/Header";
import Div100vh from "react-div-100vh";

import styles from "./app.module.scss";
import "./app.scss";

function MyApp({ Component, pageProps }) {
  return (
    <React.Fragment>
      <Head>
        <title>AJ's Dance Party</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="shortcut icon" href="/aj-logo.png" type="image/x-icon" />
      </Head>
      <Div100vh className={styles.Container}>
        <Header />
        <div className={styles.PageContainer}>
          <Component {...pageProps} />
        </div>
      </Div100vh>
      {/* Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a> */}
    </React.Fragment>
  );
}

export default MyApp
