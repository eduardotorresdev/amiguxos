import { createBrowserRouter } from "react-router-dom";
import { Home, ListaPresentes, Resultado, Sorteio } from "./pages";

export const routes = createBrowserRouter([
    {
        path: "/",
        element: <Home />
    },
    {
        path: "/secreto/novo",
        element: <Sorteio />,
        loader: () => ({
            title: 'Secreto',
            name: 'secreto'
        })
    },
    {
        path: "/onca/novo",
        element: <Sorteio />,
        loader: () => ({
            title: 'da Onça',
            name: 'onca'
        })
    },
    {
        path: "/secreto/:id/:title",
        element: <Resultado />,
        loader: () => ({
            title: 'Secreto',
            name: 'secreto'
        })
    },
    {
        path: "/onca/:id/:title",
        element: <Resultado />,
        loader: () => ({
            title: 'da Onça',
            name: 'onca'
        })
    },
    {
        path: "/lista-de-presentes/:id/:title",
        element: <ListaPresentes />,
    },
]);
