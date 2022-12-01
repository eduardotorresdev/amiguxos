import { RouterProvider } from "react-router-dom";
import { routes } from "../../routes";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./App.sass";
import ReactGA from "react-ga4";

ReactGA.initialize("G-9XRQKY03F8");

export const App = () => {
    return (
        <div className="app">
            <RouterProvider router={routes} />
            <ToastContainer />
        </div>
    );
};
