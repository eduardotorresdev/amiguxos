import "./Input.sass";
import { UseFormRegister } from 'react-hook-form'

type InputProps = {
    name: string;
    label: string;
    register?: UseFormRegister<any>;
};

export const Input = ({ name, label }: InputProps) => (
    <div className="input">
        <label htmlFor={name} className="input__label">
            {label}
        </label>
        <input type="text" id={name} name={name} className="input__field" />
    </div>
);
