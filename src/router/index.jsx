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

import { folderLoader } from "../utils/folderUtil.js";
import { notesLoader } from "../utils/notesUtil.js";
import { noteLoader } from "../utils/noteUtil.js";

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
                        loader: folderLoader,
                        children: [
                            {
                                element: <NoteList />,
                                path: "folders/:folderId",
                                loader: notesLoader,
                                children: [
                                    {
                                        element: <Note />,
                                        path: "note/:noteId",
                                        loader: noteLoader
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
