import { ReactNode } from "react";
import { Link } from "react-router-dom";
import "./Button.sass";

type ButtonProps = {
    type?: "button" | "submit";
    className?: string;
    tabIndex?: number;
    to?: string;
    fluid?: boolean;
    state?: "primary" | "secondary" | "danger" | "third";
    onClick?: () => void;
    children: ReactNode;
};

export const Button = ({
    type = "button",
    fluid,
    tabIndex,
    to,
    className,
    state = "primary",
    onClick,
    children,
}: ButtonProps) =>
    to ? (
        <Link
            to={to}
            className={`button button--${state} ${className} ${
                fluid && "button--fluid"
            }`}
            tabIndex={tabIndex}
        >
            {children}
        </Link>
    ) : (
        <button
            tabIndex={tabIndex}
            type={type}
            onClick={onClick}
            className={`button button--${state} ${className} ${
                fluid && "button--fluid"
            }`}
        >
            {children}
        </button>
    );
