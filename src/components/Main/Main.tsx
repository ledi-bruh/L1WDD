import classes from "./Main.module.css";
import { strings } from "../../resources/strings";
import Banner from "../Banner";
import Button from "../Button";
import Services from "../Services";

function Main() {
    return (
        <main>
            <Banner
                title={strings.main_banner_title}
                delimiter={false}
                description={strings.main_banner_description}
                image={strings.main_banner_image}
                button={
                    <Button
                        text={strings.main_banner_button_text}
                        className={classes.mainBannerButton}
                    />
                }
            />
            <Services />
        </main>
    );
}

export default Main;
