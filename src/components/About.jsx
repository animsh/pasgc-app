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
    name: "Prof. S. V. Shinde",
    role: "Project Guide",
    image: "https://media.licdn.com/dms/image/C4E03AQEwvlLqKDHDPg/profile-displayphoto-shrink_200_200/0/1616044305241?e=1689206400&v=beta&t=KcBQNcQgrNyuTcfxvrOuinKW-A-5XOFyOOryDHej5Bs",
    college: "PDEA's College of Engineering, Manjari (BK), Pune",
    github: "",
    linkedin: "https://www.linkedin.com/in/sach-shinde-6686bb209/",
    gmail: "",
  },
  {
    name: "Sagar More",
    role: "Developer",
    image: "https://avatars.githubusercontent.com/u/68194471?s=400&u=e63d886edf29c34d12f7bb090a9a04a656c5160d&v=4",
    college: "PDEA's College of Engineering, Manjari (BK), Pune",
    github: "https://github.com/animsh",
    linkedin: "https://www.linkedin.com/in/animsh/",
    gmail: "animsh.more@gmail.com",
  },
  {
    name: "Pravin Bhagwat",
    role: "Developer",
    image: "https://avatars.githubusercontent.com/u/85389806?v=4",
    college: "PDEA's College of Engineering, Manjari (BK), Pune",
    github: "https://github.com/pravinbhagwat",
    linkedin: "https://www.linkedin.com/in/pravin-bhagwat/",
    gmail: "pravinbhagwat150@gmail.com",
  },
  {
    name: "Indrajeet Karande",
    role: "Technical Researcher",
    image: "https://media.licdn.com/dms/image/D4D03AQH-ImMTREVZRg/profile-displayphoto-shrink_200_200/0/1678798701155?e=1689206400&v=beta&t=0whLAwKT_F-uDdojDocNSY4lIik29rivvBlOJFkUQdY",
    college: "PDEA's College of Engineering, Manjari (BK), Pune",
    github: "",
    linkedin: "https://www.linkedin.com/in/indrajeet-karande-82879b1b1/",
    gmail: "indrajeetkarande4444@gmail.com",
  },
  {
    name: "Sayaji Dhandge",
    role: "Techniocal Researcher",
    image: "https://media.licdn.com/dms/image/D4D03AQG5tp4P0qBO3Q/profile-displayphoto-shrink_200_200/0/1672595665040?e=1689206400&v=beta&t=sgQA47qm4rkhwFOwLmeSspLTSW5f-dSVbM4F4OvSVkM",
    college: "PDEA's College of Engineering, Manjari (BK), Pune",
    github: "",
    linkedin: "https://www.linkedin.com/in/sayaji-dhandge-6261b0222/",
    gmail: "sayajidhandge02@gmail.com",
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
          <Typography variant="body1" textAlign={'justify'} gutterBottom>
            The "Predictive Analysis of Student Grade and Career" project is designed specifically for computer engineering students at SPPU (Savitribai Phule Pune University). It utilizes student data and questionnaires to forecast potential outcomes for end-semester grades and career paths. It should be noted that this project provides predictions based on the available data and questionnaires, but real-life outcomes may vary for individual students. While the project aims to assist students by offering insights into potential future possibilities, the actual results may differ.          </Typography>

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
                          {member.role}, {member.college}
                        </Typography>
                      </Grid>
                      <Grid item>
                        {member.github !== '' && <IconButton href={member.github} target="_blank">
                          <GitHub />
                        </IconButton>
                        }
                        {member.gmail !== '' && <IconButton href={`mailto:${member.gmail}`}>
                          <Email />
                        </IconButton>
                        }
                        {member.linkedin !== '' && <IconButton href={member.linkedin} target="_blank">
                          <LinkedIn />
                        </IconButton>
                        }
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
