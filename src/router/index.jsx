import {
    createBrowserRouter,
    Outlet,
} from "react-router-dom";

import AuthProvider from "../context/AuthProvider.jsx"
import Login from "../pages/Login.jsx";
import Home from "../pages/Home.jsx";
import ErrorPage from "../pages/ErrorPage.jsx";

import ProtectedRoute from './ProtectedRoute.jsx'
import NoteList from "../component/NoteList.jsx";
import Note from "../component/Note.jsx";

// eslint-disable-next-line react-refresh/only-export-components
const AuthLayout = () => {
    return <AuthProvider><Outlet></Outlet></AuthProvider>
}

const router = createBrowserRouter([
    {
        element: <AuthLayout />,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                element: <Login />,
                path: "/login",
            },
            {
                element: <ProtectedRoute></ProtectedRoute>,
                children: [
                    {
                        element: <Home />,
                        path: "/",
                        children: [
                            {
                                element: <NoteList />,
                                path: "folders/:folderId",
                                children: [
                                    {
                                        element: <Note />,
                                        path: "note/:noteId",
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
        ]
    },
]);

export default router
