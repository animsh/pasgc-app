import * as React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useState } from "react";

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
export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const validateEmail = () => {
    setEmailError(!/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(email));
  };

  const validatePassword = () => {
    setPasswordError(password.length < 6);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    // const data = new FormData(event.currentTarget);
    console.log({
      email: email,
      password: password,
    });
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
            margin="normal"
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
            margin="normal"
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
              validateEmail();
              validatePassword();
              if (!emailError && !passwordError) {
                handleSubmit(event);
              }
            }}
            fullWidth
            sx={{ marginTop: "16px" }}
          >
            Login
          </Button>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
