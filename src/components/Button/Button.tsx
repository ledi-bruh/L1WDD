import { FC } from "react";
import classes from "./Button.module.css";
import clsx from "clsx";

interface IButtonProps {
    text?: string;
    fill?: boolean;
    className?: string;
}

const Button: FC<IButtonProps> = ({ text = "", fill = true, className }) => {
    return (
        <button
            className={clsx(
                className,
                classes.button,
                fill ? classes.filled : classes.unfilled
            )}
        >
            {text}
        </button>
    );
};

export default Button;
