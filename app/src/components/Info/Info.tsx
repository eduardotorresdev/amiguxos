import "./Info.sass";
import { ReactComponent as Github } from "../../images/github.svg";

export const Info = () => {
    return (
        <div className="info">
            <a href="https://github.com/eduardotorresdev/amiguxos" className="info__github">
                <Github />
            </a>
            <div className="info__text">
                Você gostou de utilizar o aplicativo livre e gratuito? Mande um
                cafézinho para o{" "}
                <a href="https://github.com/eduardotorresdev">desenvolvedor</a>,
                Mande um pix
            </div>
        </div>
    );
};
