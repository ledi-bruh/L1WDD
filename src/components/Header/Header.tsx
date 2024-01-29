import classes from "./Header.module.css";
import NavMenu from "../NavMenu";
import { strings } from "../../resources/strings";

function Header() {
    const navLinks: string[] = [
        "Home",
        "Find a doctor",
        "Apps",
        "Testimonials",
        "About us",
    ];

    return (
        <header className={classes.header}>
            <div className={classes.logo}>
                <img src={strings.company_logo} alt="HealthCareLogo" />
                <span className={classes.companyName}>HealthCare</span>
            </div>
            <NavMenu links={navLinks}></NavMenu>
        </header>
    );
}

export default Header;
