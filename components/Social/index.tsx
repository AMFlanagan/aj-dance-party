import styles from "./index.module.scss";

export default () => (
    <div className={styles.Social}>
        <a><img className={styles.SocialIcon} src="/twitter.png" /></a>
        <a><img className={styles.SocialIcon} src="/instagram.png" /></a>
        <a><img className={styles.SocialIcon} src="/youTube.png" /></a>
    </div>
)