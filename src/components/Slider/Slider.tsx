import { FC, useState } from "react";
import classes from "./Slider.module.css";
import { strings } from "../../resources/strings";
import Delimiter from "../Delimiter";
import clsx from "clsx";

interface ISliderProps {
    quotes: IPersonQuote[];
}

const Slider: FC<ISliderProps> = ({ quotes }) => {
    const [currentQuote, setCurrentQuote] = useState(0);
    const maxQuoteIndex = quotes.length - 1;

    const handleLeftArrowClick = () => {
        setCurrentQuote(Math.max(currentQuote - 1, 0));
    };

    const handleRightArrowClick = () => {
        setCurrentQuote(Math.min(currentQuote + 1, maxQuoteIndex));
    };

    return (
        <section className={classes.slider}>
            <div className={classes.sliderArea}>
                <p className={classes.sliderTitle}>{strings.slider_title}</p>
                <Delimiter className={classes.delimiter} />
                {maxQuoteIndex >= 0 && (
                    <div className={classes.personQuoteContainer}>
                        <div className={classes.personBlock}>
                            <div className={classes.personImage}>
                                <img
                                    src={quotes[currentQuote].image}
                                    alt="PersonImage"
                                    className={classes.image}
                                />
                            </div>
                            <div className={classes.aboutPerson}>
                                <p>{quotes[currentQuote].name}</p>
                                <p>{quotes[currentQuote].description}</p>
                            </div>
                        </div>
                        <p className={classes.quote}>
                            {quotes[currentQuote].quote}
                        </p>
                    </div>
                )}
            </div>
            <div className={classes.sliderStatusArea}>
                <img
                    src={strings.left_arrow}
                    alt="LeftArrow"
                    onClick={handleLeftArrowClick}
                    className={clsx(
                        classes.arrow,
                        currentQuote === 0 && classes.inactive
                    )}
                />
                <div className={classes.sliderStatusPoints}>
                    {quotes.map((_, i) => (
                        <img
                            src={strings.point}
                            alt="StatusPoint"
                            className={clsx(
                                classes.point,
                                i === currentQuote && classes.currentPoint
                            )}
                        />
                    ))}
                </div>
                <img
                    src={strings.right_arrow}
                    alt="RightArrow"
                    onClick={handleRightArrowClick}
                    className={clsx(
                        classes.arrow,
                        currentQuote === maxQuoteIndex && classes.inactive
                    )}
                />
            </div>
        </section>
    );
};

export default Slider;
