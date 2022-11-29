import { ReactNode } from "react";
import { Link } from "react-router-dom";
import "./Title.sass";

type TitleProps = {
    desc?: string;
    children: ReactNode;
};

export const Title = ({ desc, children }: TitleProps) => {
    return (
        <h1 className="title">
            <Link to="/" className="title__link">
                {children}
                {desc && <span className="title__desc">{desc}</span>}
            </Link>
        </h1>
    );
};
