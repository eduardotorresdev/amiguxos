import { ReactNode } from "react";
import "./Subtitle.sass";

type SubtitleProps = {
    children: ReactNode;
    className?: string;
    skeleton?: boolean;
};

export const Subtitle = ({ className, skeleton, children }: SubtitleProps) => (
    <h2 className={`subtitle ${className} ${skeleton && 'subtitle--skeleton'}`}>
        {children}
    </h2>
);
