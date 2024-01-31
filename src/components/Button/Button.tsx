import { FC } from "react";
import classes from "./Button.module.css";
import clsx from "clsx";

interface IButtonProps {
    text?: string;
    fill?: boolean;
    className?: string;
    onClick?: () => void;
}

const Button: FC<IButtonProps> = ({
    text = "",
    fill = true,
    className,
    onClick = () => {},
}) => {
    return (
        <button
            className={clsx(
                className,
                classes.button,
                fill ? classes.filled : classes.unfilled
            )}
            onClick={onClick}
        >
            {text}
        </button>
    );
};

export default Button;
