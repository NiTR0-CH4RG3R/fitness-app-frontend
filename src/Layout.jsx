import { Box } from '@mui/material';

import { Outlet } from 'react-router-dom';
import TopBar from './Components/TopBar';
import SideNavigationPanel from './Components/SideNavigationPanel';
import { SideNavigationPanelData } from './Data/SideNavigationPanelData';

export default function Layout() {
    return (
        <Box
            className='app'
            width='100vw'
            height='100vh'
        >
            <main
                className='content'
                style={{
                    display: 'flex',
                    width: '100%',
                    height: '100%',
                }}
            >
                <SideNavigationPanel SideNavigationPanelMenuItems={SideNavigationPanelData.items} drawerWidth={SideNavigationPanelData.width} toolbarHeight={SideNavigationPanelData.toolbarHeight} />

                <Box
                    display='flex'
                    flexDirection='column'
                    width='100%'
                    height='100%'
                >
                    <TopBar
                        drawerWidth={SideNavigationPanelData.width}
                        topBarHeight={SideNavigationPanelData.toolbarHeight}
                    />
                    <Box
                        width='100%'
                        height={`calc(100% - ${SideNavigationPanelData.toolbarHeight}px)`}
                        overflow='auto'
                    >
                        <Box
                            display='flex'
                            flexDirection='column'
                            width='100%'
                            alignItems='center'
                            p={7}
                        >
                            <Outlet />
                        </Box>
                    </Box>
                </Box>
            </main>
        </Box>
    );
}