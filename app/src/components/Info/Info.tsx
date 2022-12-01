import "./Info.sass";
import { ReactComponent as Github } from "../../images/github.svg";

export const Info = () => {
    return (
        <div className="info">
            <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/eduardotorresdev/amiguxos"
                className="info__github"
            >
                <Github />
            </a>
            <div className="info__text">
                Você gostou de utilizar o aplicativo livre e gratuito? Mande um
                cafézinho para o desenvolvedor,{" "}
                <a
                    target="blank"
                    rel="noreferrer"
                    href="https://nubank.com.br/pagar/123enm/FnIvPBCQuB"
                >
                    Mande um pix
                </a>
            </div>
        </div>
    );
};
