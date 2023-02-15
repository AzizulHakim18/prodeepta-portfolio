import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main/Main";
import About from "../Pages/About/About";
import Publication from "../Pages/About/AboutHeader/Publication";
import Skills from "../Pages/About/AboutHeader/Skills";
import WorkExp from "../Pages/About/AboutHeader/WorkExp";
import ContactMe from "../Pages/ContactMe/ContactMe";
import Home from "../Pages/Home/Home";
import Photography from "../Pages/Photography/Photography";
import Error from "./Error";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement: <Error></Error>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/about",
                element: <About></About>,
                children: [
                    {
                        path: '/about/workexperiences',
                        element: <WorkExp></WorkExp>
                    },
                    {
                        path: '/about/publication',
                        element: <Publication></Publication>
                    },
                    {
                        path: '/about/skills',
                        element: <Skills></Skills>
                    },
                ]
            },
            {
                path: "/photography",
                element: <Photography></Photography>
            },
            {
                path: "/contactme",
                element: <ContactMe></ContactMe>
            },
        ]
    }
])