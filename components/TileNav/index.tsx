import React from "react";
import Artists from "../Icons/Artists";
import Events from "../Icons/Events";
import JoinUs from "../Icons/JoinUs";
import Tile from "../Tile";

import styles from "./index.module.scss";

const NavElements = [
    {
        icon: <Events height="200px" width="200px" fill="#ffe400" />,
        heading: "Upcoming Events",
        text: "See What's coming up.",
        color: "#ffe400",
    },
    {
        icon: <Artists height="200px" width="200px" fill="#ff652f" />,
        heading: "Our Artists",
        text: "Look at all our Artists.",
        color: "#ff652f",
    },
    {
        icon: <JoinUs height="200px" width="200px" fill="#14a76c" />,
        heading: "Join the Community",
        text: "Feel like joining the cause, well you can't, fuck you.",
        color: "#14a76c ",
    },
];

export default () => {
    return (
        <div className={styles.TileNav}>
            {NavElements.map((element, i) => (
                <Tile
                    key={i}
                    icon={element.icon}
                    heading={element.heading}
                    text={element.text}
                    color={element.color}
                />
            ))}
        </div>
    );
}