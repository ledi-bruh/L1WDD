import { FC, useState } from "react";
import classes from "./NavMenu.module.css";

interface INavMenuProps {
    links: string[];
    firstActiveLink?: string;
}

const NavMenu: FC<INavMenuProps> = ({ links, firstActiveLink }) => {
    const [activeButton, setActiveButton] = useState(
        firstActiveLink || links[0]
    );

    return (
        <nav className={classes.navMenu}>
            {links.map((key: string) => (
                <button
                    className={`${classes.navLink} ${
                        key === activeButton ? classes.activeLink : ""
                    }`}
                    type="button"
                    key={key}
                    onClick={() => setActiveButton(key)}
                >
                    {key}
                </button>
            ))}
        </nav>
    );
};

export default NavMenu;
