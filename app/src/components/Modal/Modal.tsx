import { ReactNode, useState } from "react";
import "./Modal.sass";

type ModalProps = {
    children: ReactNode;
    show: boolean;
};

export const Modal = ({ children, show }: ModalProps) => {
    return (
        <div className={`modal ${show && "modal--show"}`}>
            <div className="modal__dialog">{children}</div>
        </div>
    );
};

export const useModal = () => {
    const [show, setShow] = useState(false);

    const toggle = (state?: boolean) => {
        setShow((show) =>
            state === undefined || typeof state !== "boolean" ? !show : state
        );
    };

    return {
        show,
        toggle,
    };
};
