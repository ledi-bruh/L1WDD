import classes from "./Services.module.css";
import { strings } from "../../resources/strings";
import Delimiter from "../Delimiter";
import ServiceCard from "../ServiceCard";
import Button from "../Button";

function Services() {
    return (
        <section className={classes.services}>
            <div className={classes.servicesInfo}>
                <h2>{strings.services_block_title}</h2>
                <Delimiter className={classes.delimiter} />
                <p>{strings.services_block_description}</p>
            </div>
            <div className={classes.serviceCards}>
                <img
                    className={classes.area1}
                    alt="decor"
                    src={strings.area1}
                />
                <img
                    className={classes.dots2}
                    alt="decor"
                    src={strings.dots2}
                />
                <ServiceCard
                    image={strings.service1_image}
                    title={strings.service1_title}
                    description={strings.service1_description}
                />
                <ServiceCard
                    image={strings.service2_image}
                    title={strings.service2_title}
                    description={strings.service2_description}
                />
                <ServiceCard
                    image={strings.service3_image}
                    title={strings.service3_title}
                    description={strings.service3_description}
                />
                <ServiceCard
                    image={strings.service4_image}
                    title={strings.service4_title}
                    description={strings.service4_description}
                />
                <ServiceCard
                    image={strings.service5_image}
                    title={strings.service5_title}
                    description={strings.service5_description}
                />
                <ServiceCard
                    image={strings.service6_image}
                    title={strings.service6_title}
                    description={strings.service6_description}
                />
            </div>
            <Button
                text={strings.services_block_button_text}
                fill={false}
                className={classes.button}
            />
        </section>
    );
}

export default Services;
