import React, { useEffect, useState } from "react";
import { Chart } from "react-google-charts";
import { styled } from '@mui/material/styles';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Paper from '@mui/material/Paper';
import { convertToOutOf, getCareerAnalysisResult, getGradeAnalysisResult, getMarks, getOccurance } from "../helper";

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 5,
  width: "100%",
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === 'light' ? '#1a90ff' : '#308fe8',
  },
  position: 'relative', // add position to enable label positioning
  '& .MuiLinearProgress-bar': {
    position: 'absolute', // set position of bar inside the parent container
    top: 0,
    left: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    color: theme.palette.mode === 'light' ? '#000' : '#fff', // set label color
  },
}));

export default function Analysis() {

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

  const [data, setData] = useState([]);

  const [subjects, setSubject] = useState([])

  const options = {
    backgroundColor: '#121212', // set background color
    legendTextStyle: { color: "#FFF" }, // set font color
    titleTextStyle: { color: "#FFF" }, // set font color
    pieHole: 0.1,
    is3D: true,
  };

  useEffect(() => {
    getUserCareerAnalysisResult();
    getUserGradeAnalysisResult();
  }, []);

  const getUserCareerAnalysisResult = async () => {
    const response = await getCareerAnalysisResult();
    // console.log(response);

    if (response.status === 200) {
      console.log("Success");
      const data = response.data;
      const careerList = data.data
      const updatedCareerList = getOccurance(careerList);
      setData(updatedCareerList);
    } else {
      console.log("Failed");
    }
  }

  const getUserGradeAnalysisResult = async () => {
    const response = await getGradeAnalysisResult();
    // console.log(response);

    if (response.status === 200) {
      console.log("Success");
      const data = response.data;
      const gradeList = data.data
      console.log(gradeList);
      setSubject(getMarks(gradeList));
      console.log(subjects);
    } else {
      console.log("Failed");
    }
  }


  return (
    <ThemeProvider theme={theme}>
      <Container
        style={{
          backgroundColor: "#121212",
          minHeight: " calc(100vh - 160px)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-evenly",
          alignItems: "center",
          padding: "24px",
        }}
      >
        <CssBaseline />
        <div style={{ width: "100%" }}>
          <Typography variant="body1" >
            Carrer Prediction
          </Typography>

          {data.length === 0 && <Typography variant="body2" gutterBottom>
            No data available
          </Typography>}

          {data.length > 0 && <Chart
            chartType="PieChart"
            width="100%"
            height="400px"
            data={data}
            options={options}
            style={{ backgroundColor: "#121212" }}
          />}

          {
            data.slice(1).map((career) => {
              return (
                <>
                  <Paper elevation={3} sx={{ p: 2, borderRadius: 4, borderWidth: 2, marginBottom: "16px" }}>
                    <Typography variant="body1" gutterBottom>
                      {career[0]}
                    </Typography>
                    <Typography variant="body2" gutterBottom>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis faucibus arcu ac mauris vestibulum, vel dignissim libero bibendum. Pellentesque aliquam turpis ut leo dignissim, vel efficitur felis faucibus. Suspendisse eget velit vel velit ultricies aliquam.
                    </Typography>
                  </Paper>
                </>
              )
            })
          }
        </div>
        <div style={{ width: "100%" }}>
          <Typography variant="body1" >
            Grade Prediction
          </Typography>

          {subjects.length != 0 && subjects.map((subject) => {
            return (
              <div style={{ width: "100%", marginTop: "16px" }}>
                <Typography variant="body1" >
                  {subject[0]} {subject[1]} out of 70
                </Typography>
                <BorderLinearProgress variant="determinate" value={(subject[1] / 70) * 100} />
              </div>
            )
          })}

          {subjects.length === 0 && <Typography variant="body2" gutterBottom>
            No data available
          </Typography>}

        </div>

      </Container>
    </ThemeProvider>
  );
};