import { FC } from "react";
import clsx from "clsx";
import classes from "./Delimiter.module.css";

interface IDelimiterProps {
    className?: string;
}

const Delimiter: FC<IDelimiterProps> = ({ className }) => {
    return <hr className={clsx(classes.delimiter, className)} />;
};

export default Delimiter;
