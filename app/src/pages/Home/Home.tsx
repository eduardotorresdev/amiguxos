import { useState } from "react";
import { Busca, Button, Page, useModal, Portal } from "../../components";
import "./Home.sass";

export const Home = () => {
    const { show, toggle } = useModal();
    const [data, setData] = useState({
        name: "onca",
        title: "da onça",
    });

    const toggleData = (props: { name: string; title: string }) => {
        setData(props);
        toggle();
    };

    return (
        <Page name="home">
            <ul className="home__list">
                <li className="home__item">
                    <Button
                        fluid
                        onClick={() =>
                            toggleData({ title: "Secreto", name: "secreto" })
                        }
                    >
                        Amigo secreto 🔒
                    </Button>
                    <Button to="/secreto/novo" state="secondary">
                        +
                    </Button>
                </li>
                <li className="home__item">
                    <Button
                        fluid
                        onClick={() =>
                            toggleData({ title: "da Onça", name: "onca" })
                        }
                    >
                        Amigo da onça 🐆
                    </Button>
                    <Button to="/onca/novo" state="secondary">
                        +
                    </Button>
                </li>
                {/* <li className="home__item">
                    <Button fluid>Lista de presentes 🎁</Button>
                    <Button state="secondary">+</Button>
                </li> */}
            </ul>
            <Portal>
                <Busca show={show} toggle={toggle} data={data} />
            </Portal>
        </Page>
    );
};
