import { RouterProvider } from "react-router-dom";
import { routes } from "../../routes";
import "./App.sass";

export const App = () => {
    return (
        <div className="app">
            <RouterProvider router={routes} />
        </div>
    );
};
