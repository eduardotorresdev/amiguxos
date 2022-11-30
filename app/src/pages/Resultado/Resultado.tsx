import { useEffect, useRef, useState } from "react";
import {
    useLoaderData,
    useLocation,
    useNavigate,
    useParams,
} from "react-router-dom";
import {
    Button,
    Form,
    Input,
    Modal,
    Page,
    Subtitle,
    useModal,
} from "../../components";
import { Sorteio, useSorteio } from "../../hooks";
import "./Resultado.sass";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object({
    name: yup.string().required("Campo obrigatório"),
});

export const Resultado = () => {
    const navigate = useNavigate();
    const infoRef = useRef<HTMLDivElement | null>(null);
    const { show, toggle } = useModal();
    const { findFromTo, loading: loadingSorteado } = useSorteio();
    const [sorteado, setSorteado] = useState("");
    const { title, name } = useLoaderData() as {
        title: string;
        name: string;
    };
    const { findById } = useSorteio();
    const [sorteio, setSorteio] = useState<Sorteio | null>(null);
    const { state } = useLocation();
    const { id, title: slug } = useParams();
    const {
        handleSubmit,
        register,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
        defaultValues: {
            name: "",
        },
    });

    useEffect(() => {
        if (state) {
            setSorteio(state);
            return;
        }

        async function find() {
            if (!id) return;

            const sorteio = await findById(name, id);
            if (sorteio) setSorteio(sorteio);
        }
        find();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        if (!sorteio?.type) return;

        if (sorteio.type !== name) {
            navigate(`/${sorteio.type}/${id}/${slug}`, {
                state: sorteio
            });
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [sorteio]);

    const copiarTexto = () => {
        if (!infoRef.current) return;

        const r = document.createRange();
        r.selectNode(infoRef.current);
        window.getSelection()?.removeAllRanges();
        window.getSelection()?.addRange(r);
        try {
            document.execCommand("copy");
            toast.success("Texto copiado com sucesso");
        } catch (err) {
            toast.success("Não foi possível copiar o texto");
        }
    };

    const onSubmit = async (data: { name: string }) => {
        if (!id) return;

        const sorteio = await findFromTo(id, data.name);

        setSorteado(sorteio.to);
        toggle();
    };

    return (
        <Page name={name} desc={title}>
            <Subtitle className="resultado__subtitle">
                {sorteio?.title}
            </Subtitle>
            <span className="reusltado__codigo">
                Código do sorteio:{" "}
                <code className="resultado__hash">
                    #{sorteio?.id.toUpperCase()}
                </code>
            </span>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Input
                    register={register}
                    label="Digite o seu nome/e-mail"
                    name="name"
                    error={errors.name?.message}
                />
                <Button type="submit" loading={loadingSorteado}>
                    Veja quem você tirou
                </Button>
            </Form>
            <div className="resultado__compartilhe">
                <h3 className="resultado__title">
                    Compartilhe:{" "}
                    <Button className="resultado__copy" onClick={copiarTexto}>
                        Copiar texto
                    </Button>
                </h3>
                <div className="resultado__info" ref={infoRef}>
                    Oiii, tudo bom?
                    <br />
                    Veja agora mesmo quem você tirou no nosso amigo{" "}
                    {title.toLowerCase()}:
                    <br />
                    <a
                        href={`${process.env.REACT_APP_PUBLIC_URL}/${name}/${sorteio?.id}/
                        ${sorteio?.slug}`}
                    >
                        {process.env.REACT_APP_PUBLIC_URL}/{name}/{sorteio?.id}/
                        {sorteio?.slug}
                    </a>
                    <h4 className="resultado__title">Participantes</h4>
                    <ul className="resultado__list">
                        {sorteio?.participants.map((participant) => (
                            <li key={participant} className="resultado__item">
                                {participant}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="resultado__qrcode"></div>
            </div>
            <Modal show={show}>
                <div className="resultado__modal">
                    <h2>Parabéns 🎊✨</h2>
                    <p>Você conseguiu tirar o participante</p>
                    <span className="resultado__destaque">{sorteado}</span>
                    <p>
                        Agora vem o grande desafio de escolher o melhor presente
                        para a sua grande amizade
                    </p>
                    <Button onClick={toggle}>Voltar para o sorteio</Button>
                </div>
            </Modal>
        </Page>
    );
};
