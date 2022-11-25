import { Button, Title } from "../../components";
import './Home.sass';

export const Home = () => {
    return (
        <main className="home">
            <Title>Amiguxos</Title>

            <ul className="home__list">
                <li className="home__item">
                    <Button fluid>Amigo secreto</Button>
                </li>
                <li className="home__item">
                    <Button fluid>Amigo da onça</Button>
                </li>
                <li className="home__item">
                    <Button fluid>Lista de presentes</Button>
                </li>
            </ul>
        </main>
    );
};
