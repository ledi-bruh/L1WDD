import classes from "./Main.module.css";
import { strings } from "../../resources/strings";
import Banner from "../Banner";
import Button from "../Button";
import Services from "../Services";
import Slider from "../Slider";
import quotes from "../../mock/quotes";
import Articles from "../Articles";
import articles from "../../mock/articles";

function Main() {
    return (
        <main className={classes.main}>
            <section id={classes.mainBanner}>
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
            </section>
            <Services />
            <section id={classes.centralBanner1}>
                <Banner
                    title={strings.banner1_title}
                    delimiter={true}
                    description={strings.banner1_description}
                    image={strings.banner1_image}
                    button={
                        <Button
                            text={strings.banner1_button_text}
                            className={classes.centralBannerButton}
                        />
                    }
                    reversed={true}
                />
            </section>
            <section id={classes.centralBanner2}>
                <Banner
                    title={strings.banner2_title}
                    delimiter={true}
                    description={strings.banner2_description}
                    image={strings.banner2_image}
                    button={
                        <Button
                            text={strings.banner2_button_text}
                            className={classes.centralBannerButton}
                        />
                    }
                    reversed={false}
                />
            </section>
            <Slider quotes={quotes} />
            <Articles articles={articles} />
        </main>
    );
}

export default Main;
