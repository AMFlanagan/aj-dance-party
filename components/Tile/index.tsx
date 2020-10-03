import JoinUs from "../Icons/JoinUs";
import styles from "./index.module.scss";

interface IProps {
    color: string;
    icon: any;
    heading: string;
    text: string;
}

export default (props: IProps) => {
    return (
        <div className={styles.Tile}>
            <div className={styles.Icon}>
                {props.icon}
            </div>
            <div className={styles.Wrapper} style={{ color: props.color }}>
                <div className={styles.Heading}>{props.heading}</div>
                <div className={styles.Text}>{props.text}</div>
            </div>
        </div>
    )
}