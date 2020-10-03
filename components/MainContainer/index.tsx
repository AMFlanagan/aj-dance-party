import * as React from "react";

import styles from "./index.module.scss";

interface IProps {
    children?: any;
}

export default (props: IProps) => {
    return (
        <div className={styles.Content}>
            {props.children}
        </div>
    )
}