import { ReactNode } from "react";
import "./Button.sass";

type ButtonProps = {
    type?: "button" | "submit";
    className?: string,
    tabIndex?: number,
    fluid?: boolean;
    state?: 'primary'|'secondary'|'danger';
    onClick?: () => void;
    children: ReactNode;
};

export const Button = ({
    type = "button",
    fluid,
    tabIndex,
    className,
    state = 'primary',
    onClick,
    children,
}: ButtonProps) => (
    <button
        tabIndex={tabIndex}
        type={type}
        onClick={onClick}
        className={`button button--${state} ${className} ${fluid && "button--fluid"}`}
    >
        {children}
    </button>
);
