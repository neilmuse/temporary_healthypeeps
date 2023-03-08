import * as React from 'react';
import { Avatar, Box, Button, CardMedia, Container, CssBaseline, Grid,  Link, TextField, Typography } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Outlet } from 'react-router-dom';

import LOGIN_THEME from "../themes/login-theme";
import COLORS from '../constants/colors.js'

import logo from "../assets/logo-temp.png"

const Signup = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
    <>
      <ThemeProvider theme={LOGIN_THEME}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >

            <CardMedia
              component="img"
              height="140"
              image={logo}
              alt="temporary logo"
            />

            <Typography variant="title">
              Create An Account
            </Typography>

            <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="first_name"
                    label="First Name"
                    name="first_name"
                    autoComplete="first_name"
                    autoFocus
                />

                <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="last_name"
                    label="Last Name"
                    name="last_name"
                    autoComplete="last_name"
                    autoFocus
                />

                <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    autoFocus
                />

              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />

                <TextField
                    margin="normal"
                    required
                    fullWidth
                    name="repeat-password"
                    label="Repeat Password"
                    type="repeat-password"
                    id="repeat-password"
                    autoComplete="repeat-password"
                />

                <Button
                type="submit"
                fullWidth
                variant="outlined"
                >
                    Register
                </Button>

              <Grid container>
                <Grid item>
                  <Link href="#" variant="body2">
                    {"Already have an account? Sign In"}
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Container>
      </ThemeProvider>
      <Outlet/>
    </>
  );
};

export default Signup;