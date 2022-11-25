import { Button, Input } from "../../components";
import { useForm, useFieldArray } from "react-hook-form";
import "./Sorteio.sass";
import { Page } from "../../components";
import { useLoaderData, useNavigate } from "react-router-dom";

export const Sorteio = () => {
    const navigate = useNavigate();
    const { title, name } = useLoaderData() as {
        title: string;
        name: string;
    };

    const { control, register } = useForm({
        defaultValues: {
            jogadores: [{ name: "" }],
        },
    });
    const { fields, append, remove } = useFieldArray({
        control, // control props comes from useForm (optional: if you are using FormContext)
        name: "jogadores", // unique name for your Field Array,
    });

    return (
        <Page name={name} desc={title}>
            <Input name="title" label={`Título da brincadeira`}/>
            <ul className="sorteio__list">
                {fields.map((field, index) => (
                    <li key={field.id} className="sorteio__item">
                        <Input
                            register={register}
                            name={`jogadore[${index}].name`}
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
                <Button onClick={() => navigate(-1)} state="third">Voltar</Button>
                <Button className="sorteio__action">Realizar sorteio</Button>
            </div>
        </Page>
    );
};
