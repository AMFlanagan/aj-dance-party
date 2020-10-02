import * as React from "react";

import styles from "./index.module.scss";
import Link from "next/link";

export default () => {
  return (
    <div className={styles.LogoContainer}>
      <Link href="/">
        <a>
          <img className={styles.Logo} src="/aj-logo.png" />
        </a>
      </Link>
    </div>
  );
};
