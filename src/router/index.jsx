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
                        loader: async () => {
                            const query = `
                                query Folders {
                                    folders {
                                        id
                                        name
                                        createdAt
                                    }
                                } 
                            `

                            const res = await fetch('http://localhost:4000/', {
                                method: "POST",
                                headers: {
                                    "Content-Type": "application/json",
                                },
                                body: JSON.stringify({
                                    query: query,
                                }),
                            })

                            const { data } = await res.json();
                            return data;
                        },
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
