import { Button, Form, Input } from "../../components";
import { useForm, useFieldArray } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import "./Sorteio.sass";
import { Page } from "../../components";
import { useLoaderData, useNavigate } from "react-router-dom";
import { useSorteio } from "../../hooks";
import * as yup from "yup";
import ReactGA from "react-ga4";

interface SorteioForm {
    title: string;
    date: string;
    participants: {
        name: string;
    }[];
}

const schema = yup.object({
    title: yup.string().required("Campo obrigatório"),
    date: yup.string().required("Campo obrigatório"),
    participants: yup.array().of(
        yup.object({
            name: yup.string().required("Campo obrigatório"),
        })
    ),
});

export const Sorteio = () => {
    ReactGA.send("pageview");
    const { create, loading } = useSorteio();
    const navigate = useNavigate();
    const { title, name } = useLoaderData() as {
        title: string;
        name: string;
    };

    const {
        handleSubmit,
        control,
        register,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
        defaultValues: {
            title: "",
            date: "",
            participants: [{ name: "" }],
        },
    });
    const { fields, append, remove } = useFieldArray({
        control,
        name: "participants",
    });

    const onSubmit = async (data: SorteioForm) => {
        const sorteio = await create({
            ...data,
            type: name,
            participants: data.participants.map(
                (participant) => participant.name
            ),
        });

        navigate(`/${name}/${sorteio.id}/${sorteio.slug}`, {
            state: sorteio
        });
    };
    
    return (
        <Page name={name} desc={title}>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Input
                    register={register}
                    name="title"
                    error={errors.title?.message}
                    label={`Título da brincadeira`}
                />
                <Input
                    register={register}
                    type="date"
                    error={errors.date?.message}
                    name="date"
                    label={`Data dos presentes`}
                />
                <ul className="sorteio__list">
                    {fields.map((field, index) => (
                        <li key={field.id} className="sorteio__item">
                            <Input
                                register={register}
                                error={
                                    errors.participants &&
                                    errors.participants[index]?.name?.message
                                }
                                name={`participants[${index}].name`}
                                label={`Jogador ${index + 1}`}
                            />
                            <Button
                                tabIndex={-1}
                                state="danger"
                                className="sorteio__remove"
                                onClick={() => remove(index)}
                            >
                                -
                            </Button>
                        </li>
                    ))}
                </ul>
                <Button
                    tabIndex={-1}
                    state="secondary"
                    className="sorteio__add"
                    onClick={() =>
                        append({
                            name: "",
                        })
                    }
                >
                    Adicionar jogador +
                </Button>
                <div className="sorteio__actions">
                    <Button onClick={() => navigate(-1)} state="third">
                        Voltar
                    </Button>
                    <Button
                        type="submit"
                        loading={loading}
                        className="sorteio__action"
                    >
                        Realizar sorteio
                    </Button>
                </div>
            </Form>
        </Page>
    );
};
