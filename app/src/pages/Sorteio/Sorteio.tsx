import { Button, Form, Input } from "../../components";
import { useForm, useFieldArray } from "react-hook-form";
import "./Sorteio.sass";
import { Page } from "../../components";
import { useLoaderData, useNavigate } from "react-router-dom";
import { useSorteio } from "../../hooks";

interface SorteioForm {
    title: string;
    date: string;
    participants: {
        name: string;
    }[];
}

export const Sorteio = () => {
    const { create, loading } = useSorteio();
    const navigate = useNavigate();
    const { title, name } = useLoaderData() as {
        title: string;
        name: string;
    };

    const { handleSubmit, control, register } = useForm({
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
            participants: data.participants.map(
                (participant) => participant.name
            ),
        });

        console.log(sorteio);
    };

    return (
        <Page name={name} desc={title}>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Input name="title" label={`Título da brincadeira`} />
                <Input type="date" name="date" label={`Data dos presentes`} />
                <ul className="sorteio__list">
                    {fields.map((field, index) => (
                        <li key={field.id} className="sorteio__item">
                            <Input
                                register={register}
                                name={`participants[${index}].name`}
                                label={`Jogador ${index + 1}`}
                            />
                            {index === 0 ? (
                                <Button
                                    tabIndex={-1}
                                    className="sorteio__add"
                                    onClick={() =>
                                        append({
                                            name: "",
                                        })
                                    }
                                >
                                    +
                                </Button>
                            ) : (
                                <Button
                                    tabIndex={-1}
                                    state="danger"
                                    className="sorteio__add"
                                    onClick={() => remove(index)}
                                >
                                    -
                                </Button>
                            )}
                        </li>
                    ))}
                </ul>
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
