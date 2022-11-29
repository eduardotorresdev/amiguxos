import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { Button, Input, Modal, Title } from "../../components";
import "./Busca.sass";

type BuscaProps = {
    show: boolean;
    data: {
        title: string;
        name: string;
    };
    toggle: () => void;
};

export const Busca = ({ show, toggle, data }: BuscaProps) => {
    const {register, setValue } = useForm();

    useEffect(() => {
        if(show === false) {
            setValue('codigo', null);
        }
    }, [show, setValue]);

    return (
        <Modal show={show}>
            <Title desc={data.title}>Amiguxos</Title>
            <Input
                register={register}
                name="codigo"
                style={{ fontSize: "2rem" }}
                maxLength={4}
                uppercase
                label="Digite aqui o código do sorteio:"
            />
            <div className="modal__actions">
                <Button state="third" onClick={toggle}>
                    Voltar
                </Button>
                <Button>Consultar sorteio</Button>
            </div>
        </Modal>
    );
};
