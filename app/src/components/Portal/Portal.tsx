import { ReactNode, useEffect, useState } from "react";
import { createPortal } from "react-dom";

const portalElement = document.querySelector("#portal") as HTMLElement;

while (portalElement.hasChildNodes()) {
    if (portalElement.firstChild)
        portalElement.removeChild(portalElement.firstChild);
}

export const Portal = ({ children }: { children: ReactNode }) => {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);

        return () => setMounted(false);
    }, []);

    return mounted
        ? createPortal(
                children,
                document.querySelector("#portal") as HTMLElement
        )
        : null;
};
