import { ReactNode } from "react";
import { Info } from "../Info/Info";
import { Title } from "../Title/Title";
import "./Page.sass";

type PageProps = {
    name: string;
    desc?: string;
    children: ReactNode;
};

export const Page = ({ name, desc, children }: PageProps) => {
    return (
        <main className={`page page--${name}`}>
            <div className="page__container">
                <div className="page__content">
                    <Title desc={desc}>Amiguxos ✨</Title>
                    {children}
                </div>
            </div>
            <Info />
        </main>
    );
};
