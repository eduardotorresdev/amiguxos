import "./Input.sass";
import { UseFormRegister } from "react-hook-form";

type InputProps = {
    type?: 'text'|'number'|'date',
    name: string;
    label: string;
    style?: any;
    uppercase?: boolean;
    maxLength?: number;
    register?: UseFormRegister<any>;
};

export const Input = ({
    register,
    type = 'text',
    name,
    style,
    uppercase,
    maxLength,
    label,
}: InputProps) => (
    <div className="input">
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
        />
    </div>
);
