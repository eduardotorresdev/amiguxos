import { forwardRef, ReactNode } from "react";
import "./Panel.sass";

type PanelProps = {
    children: ReactNode;
    className?: string;
    skeleton?: boolean;
};

export const Panel = forwardRef<HTMLDivElement, PanelProps>(
    ({ className, skeleton, children }, ref) => (
        <div
            ref={ref}
            className={`panel ${className} ${skeleton && "panel--skeleton"}`}
        >
            #{children}
        </div>
    )
);
