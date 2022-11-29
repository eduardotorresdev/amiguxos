import { ReactNode } from "react";
import "./Form.sass";

type FormProps = {
    children?: ReactNode;
    className?: string;
    onSubmit?: () => {};
};

export const Form = ({ children, className, onSubmit }: FormProps) => {
    return (
        <form className={`form ${className}`} onSubmit={onSubmit}>
            {children}
        </form>
    );
};
