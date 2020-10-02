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
        <link rel="shortcut icon" href="/favicon.ico?=v1" type="image/x-icon" />
      </Head>
      <Div100vh className={styles.Container}>
        <Header />
        <div className={styles.PageContainer}>
          <Component {...pageProps} />
        </div>
      </Div100vh>
    </React.Fragment>
  );
}

export default MyApp
