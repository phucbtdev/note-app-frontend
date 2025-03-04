import {
    createBrowserRouter,
    Outlet,
} from "react-router-dom";

import Login from "../pages/Login/Login.jsx";
import Home from "../pages/Home/Home.jsx";
import AuthProvider from "../context/AuthProvider.jsx"

// eslint-disable-next-line react-refresh/only-export-components
const AuthLayout = () => {
    return <AuthProvider><Outlet></Outlet></AuthProvider>
}

const router = createBrowserRouter([
    {
        element: <AuthLayout />,
        children: [
            {
                path: "/login",
                element: <Login />,
            },
            {
                path: "/home",
                element: <Home />,
            },
        ],
    },
]);

export default router
