import { createBrowserRouter } from "react-router-dom";
import { Home, ListaPresentes, Onca, Sorteio, SorteioNovo } from "./pages";

export const routes = createBrowserRouter([
    {
        path: "/",
        element: <Home />
    },
    {
        path: "/secreto/novo",
        element: <SorteioNovo />,
        loader: () => ({
            title: 'Secreto',
            name: 'secreto'
        })
    },
    {
        path: "/onca/novo",
        element: <SorteioNovo />,
        loader: () => ({
            title: 'da Onça',
            name: 'onca'
        })
    },
    {
        path: "/secreto/:id/:title",
        element: <Sorteio />,
    },
    {
        path: "/onca/:id/:title",
        element: <Onca />,
    },
    {
        path: "/lista-de-presentes/:id/:title",
        element: <ListaPresentes />,
    },
]);
