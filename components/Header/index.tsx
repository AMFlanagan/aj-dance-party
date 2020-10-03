import * as React from "react";
import Logo from "../Logo";
import Nav from "../Nav";
import Social from "../Social";

import styles from "./index.module.scss";

export default () => {
  return (
    <div className={styles.Header}>
      <Logo />
      <Nav />
      <Social />
    </div>
  );
};
