import { Button, Typography } from '@mui/material'
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider';
import { useNavigate } from 'react-router-dom';
function Login() {
    const auth = getAuth();
    const { user } = useContext(AuthContext)
    const navigate = useNavigate()
    const handlLoginGoogle = async () => {
        const prodvider = new GoogleAuthProvider();

        const res = await signInWithPopup(auth, prodvider);
        console.log({ res })
    }

    if (user?.uid) {
        navigate('/home')
    }
    return <>
        <Typography>Welcome to Note app </Typography>
        <Button sx={{ marginTop: '10px' }} onClick={handlLoginGoogle} variant='outlined'>Login with Google</Button>
    </>;
}

export default Login