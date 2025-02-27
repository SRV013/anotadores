import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "@/pages/home";
import Truco from "@/pages/truco";
import Generala from "@/pages/generala";
import NotFound from "@/pages/404";

const router = createBrowserRouter([
    { path: "/", element: <Home /> },
    { path: "/generala", element: <Generala /> },
    { path: "/truco", element: <Truco /> },
    { path: "*", element: <NotFound /> },
]);

const AppRoutes = () => {
    return (
        <RouterProvider router={router} />
    );
};

export default AppRoutes;
