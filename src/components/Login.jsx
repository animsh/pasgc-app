import * as React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import CircularProgress from "@mui/material/CircularProgress";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useState, useEffect } from "react";
import { loginUser } from "../helper";
import { Snackbar, Alert } from '@mui/material';
import { useNavigate } from 'react-router-dom';


const theme = createTheme({
  typography: {
    fontFamily: "Sora, sans-serif",
  },
  palette: {
    mode: "dark",
    primary: {
      main: "#3778f6",
    },
  },
});
export default function SignIn({ isAuthenticated, toggleAuth }) {
  let navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const [isLoading, setIsLoading] = useState(false);

  const [open, setOpen] = useState(false);
  const [severity, setSeverity] = useState('success');
  const [message, setMessage] = useState('');

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    console.log('Email error:', emailError);
  }, [emailError]);

  useEffect(() => {
    console.log('Password error:', passwordError);
  }, [passwordError]);

  const validateEmail = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setEmailError(!emailRegex.test(email));
  };

  const validatePassword = () => {
    setPasswordError(password.length < 8);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // validate email and password inputs
    validateEmail();
    validatePassword();

    // check if there are any errors
    if (emailError || passwordError) {
      return;
    }

    setIsLoading(true);

    try {
      const response = await loginUser(email, password);
      console.log(response);

      if (response.status === 200) {
        localStorage.setItem('token', response.data.access);
        setSeverity('success');
        setMessage('Login successful');
        toggleAuth();
        navigate('/');
      } else {
        setMessage('Login failed ' + response.data.detail + ' ' + response.statusText);
        setSeverity('error');
      }
    } catch (error) {
      setSeverity('error');
      setMessage('Login failed ' + error);
    } finally {
      handleOpen();
      setIsLoading(false);
    }
  };



  return (
    <ThemeProvider theme={theme}>
      <Container
        maxWidth="md"
        style={{
          backgroundColor: "#121212",
          minHeight: " calc(100vh - 160px)",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-evenly",
          alignItems: "center",
        }}
      >
        <CssBaseline />

        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          flexGrow={1}
        >
          <Typography variant="h4" align="center" color="primary">
            Welcome to PASGC
          </Typography>
          <br />
          <Typography variant="body1" align="center" color="textSecondary">
            Please enter your login credential <br /> below to access your
            account.
          </Typography>
        </Box>

        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          flexGrow={1}
        >
          <Typography variant="h5" align="center" color="textPrimary">
            Login
          </Typography>
          <TextField
            label="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onBlur={validateEmail}
            error={emailError}
            helperText={emailError && "Please enter a valid email address."}
            color="primary"
            fullWidth
            style={{ marginTop: "16px", marginBottom: "16px" }}
            FormHelperTextProps={{
              sx: {
                position: "absolute",
                top: "100%",
              },
            }}
          />

          <TextField
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onBlur={validatePassword}
            error={passwordError}
            helperText={
              passwordError && "Password must be at least 6 characters long."
            }
            color="primary"
            fullWidth
            style={{ marginTop: "16px", marginBottom: "16px" }}
            FormHelperTextProps={{
              sx: {
                position: "absolute",
                top: "100%",
              },
            }}
          />

          <Button
            variant="contained"
            color="primary"
            onClick={(event) => {
              handleSubmit(event);
            }}
            fullWidth
            disabled={isLoading} // disable the button while loading
            sx={{ marginTop: "16px" }}
          >
            {isLoading ? <CircularProgress size={24} /> : 'Login'}
          </Button>


        </Box>

        <Snackbar
          open={open}
          autoHideDuration={5000} // How long the toast should stay open, in ms
          onClose={handleClose}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }} // The position of the toast on the screen
        >
          <Alert onClose={handleClose} severity={severity} sx={{ width: '100%' }}>
            {message}
          </Alert>
        </Snackbar>
      </Container>
    </ThemeProvider>
  );
}
