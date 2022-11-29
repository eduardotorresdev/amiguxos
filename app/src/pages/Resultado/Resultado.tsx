import { useLoaderData } from "react-router-dom";
import {
    Button,
    Input,
    Modal,
    Page,
    Subtitle,
    useModal,
} from "../../components";
import "./Resultado.sass";

export const Resultado = () => {
    const { show, toggle } = useModal();
    const { title, name } = useLoaderData() as {
        title: string;
        name: string;
    };

    return (
        <Page name={name} desc={title}>
            <Subtitle className="resultado__subtitle">
                Ano Novo 2023 <code>#4SDI</code>
            </Subtitle>
            <Input label="Digite o seu nome/e-mail" name="jogador" />
            <Button onClick={toggle}>Veja quem você tirou</Button>
            <div className="resultado__compartilhe">
                <h3 className="resultado__title">
                    Compartilhe:{" "}
                    <Button className="resultado__copy">Copiar texto</Button>
                </h3>
                <div className="resultado__info">
                    Oiii, tudo bom?
                    <br />
                    Veja agora mesmo quem você tirou no nosso amigo da onça:
                    <br />
                    <a href="http://google.com">
                        http://localhost:3000/onca/dsdi/ano-novo-2023
                    </a>
                    <h4 className="resultado__title">Participantes</h4>
                    <ul className="resultado__list">
                        <li className="resultado__item">Eduardo</li>
                        <li className="resultado__item">Iandara</li>
                        <li className="resultado__item">Hillary</li>
                        <li className="resultado__item">Valdemir</li>
                        <li className="resultado__item">Karlla</li>
                        <li className="resultado__item">Lucas</li>
                    </ul>
                </div>
                <div className="resultado__qrcode"></div>
            </div>
            <Modal show={show}>
                <div className="resultado__modal">
                    <h2>Parabéns 🎊✨</h2>
                    <p>Você conseguiu tirar o participante</p>
                    <span className="resultado__destaque">Eduardo</span>
                    <p>
                        Agora vem o grande desafio de escolher o melhor presente
                        para a sua grande amizade
                    </p>
                    <Button onClick={toggle}>
                        Voltar para o sorteio
                    </Button>
                </div>
            </Modal>
        </Page>
    );
};
