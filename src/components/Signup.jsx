import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
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
  const [name, setName] = useState("");
  const [enrollmentNumber, setEnrollmentNumber] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [nameError, setNameError] = useState(false);
  const [enrollmentNumberError, setEnrollmentNumberError] = useState(false);
  const [rePasswordError, setRePasswordError] = useState(false);

  const validateEmail = () => {
    setEmailError(!/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(email));
  };

  const validatePassword = () => {
    setPasswordError(password.length < 6);
  };

  const validateName = () => {
    setNameError(!/^[a-zA-Z ]+$/.test(name));
  };

  const validateEnrollmentNumber = () => {
    setEnrollmentNumberError(!/^[0-9]+$/.test(enrollmentNumber));
  };

  const validateRePassword = () => {
    setRePasswordError(rePassword !== password || rePassword.length < 6);
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
            Please fill in the following information
            <br /> to create a new account.
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
            Create Account
          </Typography>

          <TextField
            label="Name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            onBlur={validateName}
            error={nameError}
            helperText={nameError && "Please enter a valid name."}
            color="primary"
            fullWidth
            FormHelperTextProps={{
              sx: {
                position: "absolute",
                top: "100%",
              },
            }}
            style={{ marginTop: "16px", marginBottom: "16px" }}
          />

          <TextField
            label="Enrollment Number"
            type="number"
            value={enrollmentNumber}
            onChange={(e) => setEnrollmentNumber(e.target.value)}
            onBlur={validateEnrollmentNumber}
            error={enrollmentNumberError}
            helperText={enrollmentNumberError && "Please enter a valid enrollment number."}
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

          <TextField
            label="Re-enter Password"
            type="password"
            value={rePassword}
            onChange={(e) => setRePassword(e.target.value)}
            onBlur={validateRePassword}
            error={rePasswordError}
            helperText={
              rePasswordError && "Password did not match."
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
              validateEmail();
              validatePassword();
              validateName();
              validateEnrollmentNumber();
              validateRePassword();
              if (
                !emailError &&
                !passwordError &&
                !nameError &&
                !enrollmentNumberError &&
                !rePasswordError
              ) {
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
