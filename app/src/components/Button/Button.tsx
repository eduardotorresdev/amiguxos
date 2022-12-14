import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { Loader } from "../Loader/Loader";
import "./Button.sass";

type ButtonProps = {
    type?: "button" | "submit";
    className?: string;
    tabIndex?: number;
    loading?: boolean;
    to?: string;
    fluid?: boolean;
    skeleton?: boolean;
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
    skeleton,
    loading,
}: ButtonProps) =>
    to ? (
        <Link
            to={to}
            className={`button button--${state} ${className} ${
                fluid && "button--fluid"
            } ${skeleton && 'button--skeleton'}`}
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
            } ${loading && "button--loading"}
            ${skeleton && 'button--skeleton'}`}
        >
            {children}
            <div className="button__loader">
                <Loader />
            </div>
        </button>
    );
