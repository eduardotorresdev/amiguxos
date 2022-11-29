import { ReactNode, useState } from "react";
import ReactDOM from "react-dom";
import "./Modal.sass";

type ModalProps = {
    children: ReactNode;
    show: boolean;
};

export const Modal = ({ children, show }: ModalProps) => {
    return ReactDOM.createPortal(
        <div className={`modal ${show && "modal--show"}`}>
            <div className="modal__dialog">{children}</div>
        </div>,
        document.body
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
