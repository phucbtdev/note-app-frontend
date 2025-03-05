import { Box, Typography, Grid } from '@mui/material';
import { Outlet } from 'react-router-dom';

import UserMenu from '../component/UserMenu';
import FolderList from '../component/FolderList';

export default function Home() {
    const folders = [
        { id: '1', folderName: 'Plan for next week' },
        { id: '2', folderName: 'Plan for next week2' }
    ]

    return <>
        <Typography variant="h4" color="initial">Note app</Typography>
        <Box sx={{ display: 'flex', justifyContent: 'right', mb: '10px' }}>
            <UserMenu />
        </Box>
        <Grid container sx={{ boxShadow: '0 0 15px 0 rgb(193 193 193 / 60%)' }}>
            <Grid item xs={3}>
                <Box sx={{ height: '50vh' }}>
                    <FolderList folders={folders}></FolderList>
                </Box>
            </Grid>
            <Grid item xs={9}>
                <Outlet></Outlet>
            </Grid>
        </Grid>
    </>
}
