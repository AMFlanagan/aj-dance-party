import React, { Component } from 'react';
import Link from 'next/link';

import styles from './index.module.scss';

export default () => {
    return (
        <React.Fragment>
            <button
                className={styles.sideNavIcon}
            // onClick={() => dispatch(toggleSideNavBar())}
            >
                <div>Open</div>
            </button>
            <ul className={styles.Navbar}>
                <li className={styles.NavItem}>
                    <Link href="/">
                        <a className={styles.Link}>AJ's House</a>
                    </Link>
                </li>
                <li className={styles.NavItem}>
                    <Link href="/events">
                        <a className={styles.Link}>Events</a>
                    </Link>
                </li>
                <li className={styles.NavItem}>
                    <Link href="/about">
                        <a className={styles.Link}>About</a>
                    </Link>
                </li>
                <li className={styles.NavItem}>
                    <Link href="/contact">
                        <a className={styles.Link}>Contact</a>
                    </Link>
                </li>
            </ul>
        </React.Fragment>
    )
}