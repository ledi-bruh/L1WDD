import { FC, useState } from "react";
import classes from "./Articles.module.css";
import { strings } from "../../resources/strings";
import Delimiter from "../Delimiter";
import ArticleCard from "../ArticleCard";
import Button from "../Button";

interface IArticlesProps {
    articles: IArticleCard[];
}

const Articles: FC<IArticlesProps> = ({ articles }) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        setIsOpen(!isOpen);
    };

    return (
        <section className={classes.articles}>
            <div className={classes.articlesInfo}>
                <h2>{strings.articles_block_title}</h2>
                <Delimiter className={classes.delimiter} />
            </div>
            <div className={classes.articleCards}>
                {articles
                    .slice(0, isOpen ? articles.length : 3)
                    .map((article, i) => (
                        <ArticleCard
                            image={article.image}
                            title={article.title}
                            description={article.description}
                            key={i}
                        />
                    ))}
            </div>
            <Button
                text={
                    isOpen
                        ? strings.articles_block_button_close_text
                        : strings.articles_block_button_open_text
                }
                fill={false}
                className={classes.button}
                onClick={handleClick}
            />
        </section>
    );
};

export default Articles;
