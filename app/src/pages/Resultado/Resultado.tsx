import { useLoaderData } from "react-router-dom";
import { Button, Input, Page, Subtitle } from "../../components";
import "./Resultado.sass";

export const Resultado = () => {
    const { title, name } = useLoaderData() as {
        title: string;
        name: string;
    };

    return (
        <Page name={name} desc={title}>
            <Subtitle className="resultado__subtitle">Ano Novo 2023 <code>#4SDI</code></Subtitle>
            <Input label="Digite o seu nome/e-mail" name="jogador" />
            <Button>Veja quem você tirou</Button>
            <div className="resultado__compartilhe">
                <h3 className="resultado__title">Compartilhe: <Button className="resultado__copy">Copiar texto</Button></h3>
                <div className="resultado__info">
                    Oiii, tudo bom?
                    <br />
                    Veja agora mesmo quem você tirou no nosso amigo da onça:<br/>
                    <a href="http://google.com">http://localhost:3000/onca/dsdi/ano-novo-2023</a>
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
        </Page>
    );
};
