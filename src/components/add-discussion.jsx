import * as React from 'react';
import { Avatar, Box, Button, CardMedia, Container, CssBaseline, Grid,  Link, TextField, Typography } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Outlet } from 'react-router-dom';

import LOGIN_THEME from "../themes/login-theme";
import COLORS from '../constants/colors.js'

import logo from "../assets/logo-temp.png"

import DialogBox from '../components/dialog-box.jsx'

const Discussion = () => {
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
              Add Discussion
            </Typography>

            <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="discussion_title"
                    label="Title"
                    name="discussion_title"
                    autoComplete="discussion_title"
                    autoFocus
                />

                <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="discussion_content"
                    label="Content"
                    name="discussion_content"
                    autoComplete="discussion_content"
                    autoFocus
                />

                <DialogBox/>
            </Box>
          </Box>
        </Container>
      </ThemeProvider>
      <Outlet/>
    </>
  );
};

export default Discussion;