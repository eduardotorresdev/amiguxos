import { ReactNode } from "react";
import "./Title.sass";

type TitleProps = {
    desc?: string;
    children: ReactNode;
};

export const Title = ({ desc, children }: TitleProps) => {
    return (
        <h1 className="title">
            {children}
            {desc && <span className="title__desc">{desc}</span>}
        </h1>
    );
};
