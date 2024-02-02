import { Box } from '@mui/material';

import { Outlet } from 'react-router-dom';
import TopBar from './Components/TopBar';
import SideNavigationPanel from './Components/SideNavigationPanel';
import { SideNavigationPanelData } from './Data/SideNavigationPanelData';

export default function Layout() {
    return (
        <Box className='app' sx={{ display: 'flex' }}>
            <main className='content' style={{ display: 'flex' }}>
                <SideNavigationPanel SideNavigationPanelMenuItems={SideNavigationPanelData.items} drawerWidth={SideNavigationPanelData.width} toolbarHeight={SideNavigationPanelData.toolbarHeight} />

                <Box display='flex' flexDirection='column' width='100%'>
                    <TopBar drawerWidth={SideNavigationPanelData.width} topBarHeight={SideNavigationPanelData.toolbarHeight} />
                    <Box
                        display='flex'
                        flexDirection='column'
                        width='100%'
                        height={`calc(100% - ${SideNavigationPanelData.toolbarHeight}px)`}
                        mt={`${SideNavigationPanelData.toolbarHeight}px`}
                        justifyContent='center'
                        alignItems='center'
                    >
                        <Outlet />
                    </Box>
                </Box>
            </main>
        </Box>
    );
}