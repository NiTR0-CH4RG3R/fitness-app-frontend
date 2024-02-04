import { useState } from "react";

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useNavigate, Link, useLocation } from "react-router-dom";
import { useAuthContext } from "../../Auth/Auth";
import { AppRoutes } from "../../Data/AppRoutes";
import axios from '../../api/axios';

const LOGIN_URL = '/login'

export default function Login() {
  const { setAuth } = useAuthContext();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.from || '/';

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');



  async function login(e) {
    e.preventDefault();

    try {
      const response = await axios.post(LOGIN_URL,
        JSON.stringify({ email, password }),
        {
          headers: {
            'Content-Type': 'application/json'
          },
          withCredentials: true
        }
      );

      const user = response?.data?.id;
      const accessToken = response?.data?.accessToken;
      const roles = response?.data?.roles;

      setAuth({ user, email, accessToken, roles });
      navigate(from, { replace: true });
    }
    catch (error) {
      if (!error?.response) {
        console.log('Network Error');
        return;
      }

      switch (error?.response?.status) {
        case 401:
          console.log('Unauthorized');
          break;
        case 403:
          console.log('Forbidden');
          break;
        case 404:
          console.log('Not Found');
          break;
        default:
          console.log('Unknown Error');
      }
    }

    navigate(AppRoutes.dashboard.path)
  }

  function reset(e) {
    e.preventDefault();
    setEmail('');
    setPassword('');
    console.log('reset');
  }

  return (
    <Box
      display='flex'
      width='100%'
      height='100%'
      justifyContent='center'
      alignItems='center'>

      <Box
        component='form'
        display='flex'
        flexDirection='column'
        minWidth={400}
        width='40%'
        height='100%'
        justifyContent='center'
        alignItems='center'
        p={7}
        onSubmit={login}
        onReset={reset}
      >
        <Typography variant='h4' sx={{ mb: 4 }}> LOGIN </Typography>

        <TextField
          label='Email'
          variant='filled'
          type='email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          sx={{
            width: '100%',
            mb: 4,
          }}
        />

        <TextField
          label='Password'
          variant='filled'
          type='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          sx={{
            width: '100%',
            mb: 4,
          }}
        />

        <Box display='flex' width='100%' flexDirection='row' justifyContent='flex-end'>
          <Button type='reset' variant='outlined' color='error' sx={{ mr: 2 }}> Clear </Button>
          <Button type='submit' variant='contained' color='info'> Login </Button>
        </Box>

      </Box>
    </Box>
  );
}