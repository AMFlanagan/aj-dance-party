import * as React from "react";
// import Account from "components/Account";
import Logo from "../Logo";
import Nav from "../Nav";

import styles from "./index.module.scss";

export default () => {
  return (
    <div className={styles.Header}>
      <Logo />
      <Nav />
    </div>
  );
};
