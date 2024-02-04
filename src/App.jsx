import { Route, Routes } from 'react-router-dom';
import { AuthProvider } from './Auth/Auth';
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

import { ColorModeContext, useMode } from "./theme";
import Layout from './Layout';
import { AppRoutes } from './Data/AppRoutes';
import Missing from './Pages/Missing/Missing';
import Login from './Pages/Login/Login';
import RequireAuth from './Auth/RequireAuth';
import Unauthorized from './Pages/Unauthorized/Unauthorized';
import RegisterGenerated from './Pages/Login/RegisterGenerated';


export default function App() {
  let routes = [];
  Object.keys(AppRoutes).forEach((name) => {
    routes.push(AppRoutes[name]);
  });

  const [theme, colorMode] = useMode();

  return (
    <AuthProvider>
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Routes>
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<RegisterGenerated />} />
            <Route path='/unauthorized' element={<Unauthorized />} />
            {/* <Route element={<RequireAuth />} > */}
            <Route path='/*' element={<Layout />}>
              {routes.map((route) => (
                <Route key={route} path={route.path.substr(1)} element={route.component} />
              ))}
              <Route path='*' element={<Missing />} />
            </Route>
            {/* </Route> */}
          </Routes>
        </ThemeProvider>
      </ColorModeContext.Provider>
    </AuthProvider>
  );
}
