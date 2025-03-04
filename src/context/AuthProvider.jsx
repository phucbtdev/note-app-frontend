import { createContext, useState, ReactNode } from 'react';
import { getAuth } from 'firebase/auth'
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const navigate = useNavigate();
    const auth = getAuth();

    //Khi login, logout, refesh thi se run callback nay
    useEffect(() => {
        const unsubcrirbed = auth.onIdTokenChanged(async (user) => {
            if (user?.uid) {
                setUser(user);
                const accessToken = await user.getIdToken();
                localStorage.setItem('accessToken', accessToken);
                return
            }

            setUser(null)
            localStorage.clear()
            navigate('/login')
        })

        return () => unsubcrirbed()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [auth])

    return (
        <AuthContext.Provider value={{ user, setUser }}>
            {children}
        </AuthContext.Provider>
    );
}

