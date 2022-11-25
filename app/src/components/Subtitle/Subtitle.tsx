import { ReactNode } from "react";
import "./Subtitle.sass";

type SubtitleProps = {
    children: ReactNode;
    className?: string;
};

export const Subtitle = ({ className, children }: SubtitleProps) => (
    <h2 className={`subtitle ${className}`}>
        {children}
    </h2>
);
