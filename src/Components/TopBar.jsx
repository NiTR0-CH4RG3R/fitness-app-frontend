import { useState } from 'react';
import { Paper, IconButton, Box } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { ColorModeContext } from '../theme';
import { useContext } from 'react';

import { ArrowBack, Notifications, Brightness4, AccountCircle } from '@mui/icons-material';

export default function TopBar({ drawerWidth = 254, topBarHeight = 80 }) {
    const colorMode = useContext(ColorModeContext);
    const theme = useTheme();
    // [TODO] : Implement back button
    const [backButtonVisible, setBackButtonVisible] = useState(false);

    return (
        <Paper
            elevation={4}
            sx={{
                backgroundColor: theme.palette.mode === 'dark' ? 'background.paper' : 'primary.main',
                position: 'fixed',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: backButtonVisible ? 'space-between' : 'flex-end',
                width: `calc(100% - ${drawerWidth}px)`,
                height: topBarHeight,
                p: 2,
            }}
        >

            {/* Back Button */}
            <IconButton type='button' sx={{ color: 'grey.50', p: 1, display: (!backButtonVisible && 'none') }}>
                <ArrowBack />
            </IconButton>

            {/* Right side icons */}
            <Box display='flex' alignItems='center'>
                <IconButton type='button' sx={{ color: 'grey.50', p: 1 }}>
                    <Notifications />
                </IconButton>
                <IconButton type='button' sx={{ color: 'grey.50', p: 1 }} onClick={colorMode.toggleColorMode}>
                    <Brightness4 />
                </IconButton>
                <IconButton type='button' sx={{ color: 'grey.50', p: 1 }}>
                    <AccountCircle />
                </IconButton>
            </Box>
        </Paper>
    );
}