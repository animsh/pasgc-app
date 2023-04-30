import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Container } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import { Avatar, IconButton } from "@mui/material";
import { GitHub, Email, LinkedIn } from "@mui/icons-material";

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

const teamMembers = [
  {
    name: "Member 1",
    role: "Role 1",
    image: "https://via.placeholder.com/150",
    college: "College 1",
    github: "",
    linkedin: "",
    gmail: "",
  },
  {
    name: "Member 2",
    role: "Role 2",
    image: "https://via.placeholder.com/150",
    college: "College 1",
    github: "",
    linkedin: "",
    gmail: "",
  },
  {
    name: "Member 3",
    role: "Role 3",
    image: "https://via.placeholder.com/150",
    college: "College 1",
    github: "",
    linkedin: "",
    gmail: "",
  },
  {
    name: "Member 4",
    role: "Role 4",
    image: "https://via.placeholder.com/150",
    college: "College 1",
    github: "",
    linkedin: "",
    gmail: "",
  },
];
const About = () => {
  return (
    <ThemeProvider theme={theme}>
      <Container
        style={{
          backgroundColor: "#121212",
          minHeight: "calc(100vh - 160px)",
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
        }}
      >
        <CssBaseline />

        <div
          style={{
            width: "100%",
            padding: "24px 24px",
            maxWidth: "1100px",
          }}
        >
          <Typography variant="h4" component="h2" gutterBottom>
            Project Details
          </Typography>
          {/* Add your project details here */}
          <Typography variant="body1" gutterBottom>
            This is a sample project with a team of four members.
          </Typography>

          <Typography variant="h5" component="h3" gutterBottom>
            Meet the Team
          </Typography>

          <Grid container spacing={4} direction="column">
            {teamMembers.map((member, index) => (
              <Grid item key={index}>
                <Card>
                  <CardContent>
                    <Grid container alignItems="center">
                      <Grid item>
                        <Avatar
                          src={member.image}
                          alt={member.name}
                          sx={{ width: 80, height: 80 }}
                        />
                      </Grid>
                      <Grid item xs style={{ padding: "0 24px" }}>
                        <Typography gutterBottom variant="h6" component="div">
                          {member.name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {member.college}
                        </Typography>
                      </Grid>
                      <Grid item>
                        <IconButton href={member.github} target="_blank">
                          <GitHub />
                        </IconButton>
                        <IconButton href={`mailto:${member.gmail}`}>
                          <Email />
                        </IconButton>
                        <IconButton href={member.linkedin} target="_blank">
                          <LinkedIn />
                        </IconButton>
                      </Grid>
                    </Grid>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </div>
      </Container>
    </ThemeProvider>
  );
};

export default About;
