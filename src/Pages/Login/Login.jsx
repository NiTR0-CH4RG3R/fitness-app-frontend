import { useState } from "react";

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useNavigate, useLocation } from "react-router-dom";
import useAuthServices from "../../services/useAuthService";

export default function Login() {
  const authService = useAuthServices();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.from || '/';

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function login(e) {
    e.preventDefault();
    try {
      authService.login(email, password);
      navigate(from, { replace: true });
    }
    catch (error) {
      console.log(error)
    }
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

        <Typography variant='body2' sx={{ mt: 4 }}>
          Don't have an account?
          <Button onClick={(e) => {
            e.preventDefault();
            navigate('/register', { replace: true });
          }} sx={{ ml: 1 }}> Register </Button>
        </Typography>

      </Box>
    </Box>
  );
}