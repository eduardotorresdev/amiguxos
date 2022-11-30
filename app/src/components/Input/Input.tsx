import "./Input.sass";
import { UseFormRegister } from "react-hook-form";

type InputProps = {
    type?: "text" | "number" | "date";
    name: string;
    label: string;
    style?: any;
    uppercase?: boolean;
    maxLength?: number;
    register?: UseFormRegister<any>;
    error?: string;
    helper?: string;
    skeleton?: boolean;
};

export const Input = ({
    register,
    type = "text",
    name,
    style,
    uppercase,
    maxLength,
    label,
    error,
    skeleton,
    helper,
}: InputProps) => (
    <div className={`input ${skeleton && 'input--skeleton'}`}>
        <label htmlFor={name} className="input__label">
            {label}
        </label>
        <input
            {...(register && { ...register(name) })}
            type={type}
            style={style}
            id={name}
            maxLength={maxLength}
            name={name}
            className={`input__field ${uppercase && "input__field--uppercase"}`}
            autoComplete="off"
        />
        {helper && <span className="input__helper">{helper}</span>}
        {error && <span className="input__error">{error}</span>}
    </div>
);
