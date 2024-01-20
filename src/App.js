import React from 'react';
import { Box } from '@mui/material';
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { Route, Routes } from 'react-router-dom';

import { ColorModeContext, useMode } from "./theme";

import TopBar from './Components/TopBar';
import SideNavigationPanel from './Components/SideNavigationPanel';

import { AppRoutes } from './Data/AppRoutes';
import { SideNavigationPanelData } from './Data/SideNavigationPanelData';

function App() {
  const [theme, colorMode] = useMode();

  let routes = [];
  Object.keys(AppRoutes).forEach((name) => {
    routes.push(AppRoutes[name]);
  });

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Box className='app' sx={{ display: 'flex' }}>
          <main className='content' style={{ display: 'flex' }}>
            <TopBar drawerWidth={SideNavigationPanelData.width} />
            <SideNavigationPanel SideNavigationPanelMenuItems={SideNavigationPanelData.items} drawerWidth={SideNavigationPanelData.width} />
            <Routes>
              {routes.map((route, index) => (
                <Route key={index} path={route.path} element={route.component} />
              ))}
            </Routes>
          </main>
        </Box>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
