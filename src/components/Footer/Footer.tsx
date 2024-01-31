import classes from "./Footer.module.css";
import { strings } from "../../resources/strings";

function Footer() {
    return (
        <footer className={classes.footer}>
            <div className={classes.column}>
                <div className={classes.company}>
                    <img
                        src={strings.company_logo_inv}
                        alt="HealthCareLogo"
                        className={classes.companyLogo}
                    />
                    <span className={classes.companyName}>HealthCare</span>
                </div>
                <p className={classes.info}>
                    HealthCare provides progressive, and affordable healthcare,
                    accessible on mobile and online for everyone
                </p>
                <p className={classes.copyright}>©HealthCare PTY LTD 2023. All rights reserved</p>
            </div>
            <div className={classes.column}>
                <span className={classes.title}>Company</span>
                <a href="##" className={classes.link}>About</a>
                <a href="##" className={classes.link}>Testimonials</a>
                <a href="##" className={classes.link}>Find a doctor</a>
                <a href="##" className={classes.link}>Apps</a>
            </div>
            <div className={classes.column}>
                <span className={classes.title}>Region</span>
                <a href="##" className={classes.link}>Indonesia</a>
                <a href="##" className={classes.link}>Singapore</a>
                <a href="##" className={classes.link}>Hongkong</a>
                <a href="##" className={classes.link}>Canada</a>
            </div>
            <div className={classes.column}>
                <span className={classes.title}>Help</span>
                <a href="##" className={classes.link}>Help center</a>
                <a href="##" className={classes.link}>Contact support</a>
                <a href="##" className={classes.link}>Instructions</a>
                <a href="##" className={classes.link}>How it works</a>
            </div>
            <img className={classes.dots7} alt="decor" src={strings.dots7} />
            <img className={classes.dots8} alt="decor" src={strings.dots8} />
        </footer>
    );
}

export default Footer;
