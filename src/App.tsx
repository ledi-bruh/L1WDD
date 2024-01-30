import classes from "./App.module.css";
import { strings } from "./resources/strings";
import Header from "./components/Header";
import Banner from "./components/Banner";
import Button from "./components/Button";
import Services from "./components/Services";

function App() {
    return (
        <>
            <Header></Header>
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
        </>
    );
}

export default App;
