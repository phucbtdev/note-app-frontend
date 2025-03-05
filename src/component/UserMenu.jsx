import React, { useContext, useState } from 'react';
import { AuthContext } from '../context/AuthProvider';
import { Avatar, Box, Typography, Menu, MenuItem } from '@mui/material';

export default function UserMenu() {
    const { user } = useContext(AuthContext);

    const [anchorEl, setAnchorEl] = useState(null);

    const open = Boolean(anchorEl);

    const handleLogout = () => {
        user.auth.signOut();
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleClick = (e) => {
        setAnchorEl(e.currentTarget);
    };
    return (
        <>
            <Box sx={{ display: 'flex', cursor: 'pointer' }} onClick={handleClick}>
                <Typography >{user?.displayName}</Typography>
                <Avatar alt='avatar' src={user.photoURL} sx={{ width: 24, height: 24, marginLeft: '5px' }}></Avatar>
            </Box>
            <Menu
                id='basic-menu'
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
            >
                <MenuItem onClick={handleLogout}>Logout</MenuItem>
            </Menu>

        </>
    );
}