import { Route, Routes } from 'react-router-dom';
import { UserContextProvider } from './Context/UserContext';
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

import { ColorModeContext, useMode } from "./theme";
import Layout from './Layout';
import { AppRoutes } from './Data/AppRoutes';
import Missing from './Pages/Missing/Missing';
import Login from './Pages/Login/Login';


export default function App() {
  let routes = [];
  Object.keys(AppRoutes).forEach((name) => {
    routes.push(AppRoutes[name]);
  });

  const [theme, colorMode] = useMode();

  return (
    <UserContextProvider>
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Routes>
            <Route path='/' element={<Login />} />
            <Route path='/*' element={<Layout />}>
              {routes.map((route) => (
                <Route key={route} path={route.path.substr(1)} element={route.component} />
              ))}
              <Route path='*' element={<Missing />} />
            </Route>
          </Routes>
        </ThemeProvider>
      </ColorModeContext.Provider>
    </UserContextProvider>
  );
}
