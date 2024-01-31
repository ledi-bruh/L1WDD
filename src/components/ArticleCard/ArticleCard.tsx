import { FC } from "react";
import classes from "./ArticleCard.module.css";
import { strings } from "../../resources/strings";

const ArticleCard: FC<IArticleCard> = ({ image, title, description }) => {
    return (
        <div className={classes.articleCard}>
            <img
                src={image}
                alt="ArticleImage"
                className={classes.articleImage}
            />
            <div className={classes.articleInfo}>
                <h3 className={classes.title}>{title}</h3>
                <p className={classes.description}>{description}</p>
                <button className={classes.button}>
                    <p>{strings.article_card_button_text}</p>
                    <img src={strings.right_arrow} alt="RightArrow" />
                </button>
            </div>
        </div>
    );
};

export default ArticleCard;
