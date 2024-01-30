import { FC } from "react";
import clsx from "clsx";
import classes from "./Banner.module.css";
import Delimiter from "../Delimiter";

interface IBannerProps {
    title: string;
    description: string;
    delimiter?: boolean;
    image: string;
    button?: JSX.Element;
    reversed?: boolean;
}

const Banner: FC<IBannerProps> = ({
    title,
    delimiter = true,
    description,
    image,
    button,
    reversed = false,
}) => {
    return (
        <div className={clsx(classes.banner, reversed && classes.reversed)}>
            <div className={classes.bannerInfo}>
                <h2 className={classes.bannerTitle}>{title}</h2>
                {delimiter && <Delimiter className={classes.delimiter} />}
                <p className={classes.bannerDescription}>{description}</p>
                {button}
            </div>
            <img
                src={image}
                alt="BannerImage"
                className={classes.bannerImage}
            ></img>
        </div>
    );
};

export default Banner;
