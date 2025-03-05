import { Box, Typography } from '@mui/material';
import UserMenu from '../component/UserMenu';
export default function Home() {
    return <>
        <Typography variant="h4" color="initial">Note app</Typography>
        <Box sx={{ display: 'flex', justifyContent: 'right', mb: '10px' }}>
            <UserMenu />
        </Box>
    </>
}