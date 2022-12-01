import { RouterProvider } from "react-router-dom";
import { routes } from "../../routes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.sass";
import { HelmetProvider } from "react-helmet-async";
import ReactGA from "react-ga4";
import { useEffect } from "react";

export const App = () => {
    useEffect(() => {
        ReactGA.send({
            hitType: "pageview",
            page: window.location.pathname + window.location.search,
        });
    }, []);

    return (
        <div className="app">
            <HelmetProvider>
                <RouterProvider router={routes} />
                <ToastContainer />
            </HelmetProvider>
        </div>
    );
};
