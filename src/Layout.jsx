import { Box } from '@mui/material';
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { Outlet } from 'react-router-dom';
import { ColorModeContext, useMode } from "./theme";
import TopBar from './Components/TopBar';
import SideNavigationPanel from './Components/SideNavigationPanel';
import { SideNavigationPanelData } from './Data/SideNavigationPanelData';

export default function Layout() {

    const [theme, colorMode] = useMode();

    return (
        <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <Box className='app' sx={{ display: 'flex' }}>
                    <main className='content' style={{ display: 'flex' }}>
                        <SideNavigationPanel SideNavigationPanelMenuItems={SideNavigationPanelData.items} drawerWidth={SideNavigationPanelData.width} toolbarHeight={SideNavigationPanelData.toolbarHeight} />
                        <TopBar drawerWidth={SideNavigationPanelData.width} topBarHeight={SideNavigationPanelData.toolbarHeight} />
                        <Box
                            display='flex'
                            width={`calc(100% - ${SideNavigationPanelData.width}px)`}
                            // ml={`${SideNavigationPanelData.width}px`}
                            height={`calc(100% - ${SideNavigationPanelData.toolbarHeight}px)`}
                            mt={`${SideNavigationPanelData.toolbarHeight}px`}
                            justifyContent='center'
                            alignItems='center'
                        >
                            <Outlet />
                        </Box>
                    </main>
                </Box>
            </ThemeProvider>
        </ColorModeContext.Provider>
    );
}