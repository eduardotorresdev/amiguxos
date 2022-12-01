import { ReactNode } from "react";
import { Helmet } from "react-helmet-async";
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
            <Helmet>
                <meta name="theme-color" content={name === 'onca' ? '#171717' : '#ffe2a3'} />
            </Helmet>
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
