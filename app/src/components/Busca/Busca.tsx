import { useEffect } from "react";
import { Button, Form, Input, Modal, Title } from "../../components";
import { useSorteio } from "../../hooks";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import "./Busca.sass";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

type BuscaProps = {
    show: boolean;
    data: {
        title: string;
        name: string;
    };
    toggle: () => void;
};

const schema = yup.object({
    id: yup.string().required("Campo obrigatório"),
});

export const Busca = ({ show, toggle, data }: BuscaProps) => {
    const navigate = useNavigate();
    const { findById, loading } = useSorteio();
    const {
        handleSubmit,
        register,
        setValue,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
        defaultValues: {
            id: "",
        },
    });

    useEffect(() => {
        if (show === false) {
            setValue("id", "");
        }
    }, [show, setValue]);

    const onSubmit = async (form: { id: string }) => {
        if (form.id === "") return;

        try {
            const sorteio = await findById(data.name, form.id.toLowerCase());

            if(!sorteio) return;

            navigate(`/${data.name}/${sorteio.id}/${sorteio.slug}`, {
                state: sorteio,
            });
        } catch (e: any) {
            console.log(e)
            toast.error(e.message || "Ocorreu um erro ao consultar o sorteio solicitado");
        }
    };

    return (
        <Modal show={show}>
            <Title desc={data.title}>Amiguxos</Title>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Input
                    register={register}
                    name="id"
                    style={{ fontSize: "2rem" }}
                    maxLength={4}
                    uppercase
                    error={errors.id?.message}
                    label="Digite aqui o código do sorteio:"
                />
                <div className="modal__actions">
                    <Button state="third" onClick={toggle}>
                        Voltar
                    </Button>
                    <Button type="submit" loading={loading}>
                        Consultar sorteio
                    </Button>
                </div>
            </Form>
        </Modal>
    );
};
