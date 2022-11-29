import { RouterProvider } from "react-router-dom";
import { routes } from "../../routes";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./App.sass";

export const App = () => {
    return (
        <div className="app">
            <RouterProvider router={routes} />
            <ToastContainer />
        </div>
    );
};
