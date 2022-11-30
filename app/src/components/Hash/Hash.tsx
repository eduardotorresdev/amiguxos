import { ReactNode } from "react";
import "./Hash.sass";

type HashProps = {
    children: ReactNode;
    className?: string;
    skeleton?: boolean;
};

export const Hash = ({ className, skeleton, children }: HashProps) => (
    <code className={`hash ${className} ${skeleton && "hash--skeleton"}`}>
        #{children}
    </code>
);
