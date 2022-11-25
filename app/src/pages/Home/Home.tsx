import { Button, Page } from "../../components";
import "./Home.sass";

export const Home = () => {
    return (
        <Page name="home">
            <ul className="home__list">
                <li className="home__item">
                    <Button fluid>Amigo secreto 🔒</Button>
                    <Button to="/secreto/novo" state="secondary">+</Button>
                </li>
                <li className="home__item">
                    <Button fluid>Amigo da onça 🐆</Button>
                    <Button to="/onca/novo" state="secondary">+</Button>
                </li>
                <li className="home__item">
                    <Button fluid>Lista de presentes 🎁</Button>
                    <Button state="secondary">+</Button>
                </li>
            </ul>
        </Page>
    );
};
