import { FC } from "react";
import classes from "./ServiceCard.module.css";

interface IServiceCard {
    image: string;
    title: string;
    description: string;
}

const ServiceCard: FC<IServiceCard> = (props: IServiceCard) => {
    const { image, title, description } = props;

    return (
        <div className={classes.serviceCard}>
            <div className={classes.serviceImageBlock}>
                <img src={image} alt="ServiceLogo"></img>
            </div>
            <div className={classes.serviceInfo}>
                <h3 className={classes.serviceTitle}>{title}</h3>
                <p className={classes.serviceDescription}>{description}</p>
            </div>
        </div>
    );
};

export default ServiceCard;
