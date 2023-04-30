import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import Radio from "@mui/material/Radio";
import Button from "@mui/material/Button";
import RadioGroup from "@mui/material/RadioGroup";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Container, CssBaseline } from "@mui/material";
import Typography from "@mui/material/Typography";
import { LinkS } from "./js/OtherElements"

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

const Profile = () => {
  const [name, setName] = useState("");
  const [enrollmentNumber, setEnrollmentNumber] = useState("");
  const [sex, setSex] = useState("");
  const [age, setAge] = useState("");
  const [address, setAddress] = useState("");
  const [familySize, setFamilySize] = useState("");
  const [parentsCohabitation, setParentsCohabitation] = useState("");
  const [mothersEducation, setMothersEducation] = useState("");
  const [fathersEducation, setFathersEducation] = useState("");
  const [mothersJob, setMothersJob] = useState("");
  const [fathersJob, setFathersJob] = useState("");
  const [reasonToJoinCollege, setReasonToJoinCollege] = useState("");
  const [guardian, setGuardian] = useState("");
  const [travelTime, setTravelTime] = useState("");
  const [studyTime, setStudyTime] = useState("");
  const [failures, setFailures] = useState("");
  const [schoolSupport, setSchoolSupport] = useState("");
  const [familySupport, setFamilySupport] = useState("");
  const [extraActivities, setExtraActivities] = useState("");
  const [nursery, setNursery] = useState("");
  const [higherEducation, setHigherEducation] = useState("");
  const [internetAccess, setInternetAccess] = useState("");
  const [familyRelationship, setFamilyRelationship] = useState("");
  const [freeTime, setFreeTime] = useState("");
  const [goOut, setGoOut] = useState("");
  const [health, setHealth] = useState("");
  const [absences, setAbsences] = useState("");
  const [midSemMarks, setMidSemMarks] = useState("");
  const [attendanceRate, setAttendanceRate] = useState("");
  const [classParticipation, setClassParticipation] = useState("");
  const [motivation, setMotivation] = useState("");
  const [selfDiscipline, setSelfDiscipline] = useState("");
  const [teacherQuality, setTeacherQuality] = useState("");
  const [timeManagement, setTimeManagement] = useState("");
  const [peerInfluence, setPeerInfluence] = useState("");
  const [parentalInvolvement, setParentalInvolvement] = useState("");
  const [teacherStudentRelationship, setTeacherStudentRelationship] =
    useState("");
  const [stressLevel, setStressLevel] = useState("");
  const [mentalHealth, setMentalHealth] = useState("");
  const [goalsSetting, setGoalsSetting] = useState("");
  const [learningResources, setLearningResources] = useState("");
  const [groupStudy, setGroupStudy] = useState("");
  const [timeSpentOnHomework, setTimeSpentOnHomework] = useState("");
  const [subjectInterest, setSubjectInterest] = useState("");
  const [classroomEnvironment, setClassroomEnvironment] = useState("");
  const [testPreparation, setTestPreparation] = useState("");
  const [timeSpentOnExtraActivities, setTimeSpentOnExtraActivities] =
    useState("");
  const [workload, setWorkload] = useState("");
  const [degree, setDegree] = useState("");
  const [subject, setSubject] = useState("");
  const [subjectCode, setSubjectCode] = useState("");
  const [semester, setSemester] = useState("");

  const [nameError, setNameError] = useState(false);
  const [enrollmentNumberError, setEnrollmentNumberError] = useState(false);
  const [ageError, setAgeError] = useState(false);
  const [failuresError, setFailuresError] = useState(false);

  const validateName = () => {
    setNameError(!name.trim());
  };

  const validateEnrollmentNumber = () => {
    setEnrollmentNumberError(!enrollmentNumber.trim());
  };

  const validateAge = () => {
    setAgeError(!age.trim());
  };

  const validateSex = () => {
    console.log(!sex.trim());
    if (!sex.trim()) {
      alert("Please select GENDER!");
    }
  };

  const validateFamilySize = () => {
    console.log(!familySize.trim());
    if (!familySize.trim()) {
      alert("Please select FAMILY SIZE!");
    }
  };

  const validateParentsCohabitation = () => {
    console.log(!parentsCohabitation.trim());
    if (!parentsCohabitation.trim()) {
      alert("Please select PARENT'S COHABITATION STATUS!");
    }
  };

  const validateMothersEducation = () => {
    console.log(!mothersEducation.trim());
    if (!mothersEducation.trim()) {
      alert("Please select MOTHER'S EDUCATION");
    }
  };

  const validateFathersEducation = () => {
    console.log(!fathersEducation.trim());
    if (!fathersEducation.trim()) {
      alert("Please select FATHER'S EDUCATION");
    }
  };

  const validateMothersJob = () => {
    console.log(!mothersJob.trim());
    if (!mothersJob.trim()) {
      alert("Please select MOTHER'S JOB");
    }
  };

  const validateFathersJob = () => {
    console.log(!fathersJob.trim());
    if (!fathersJob.trim()) {
      alert("Please select FATHER'S JOB");
    }
  };

  const validateReasonToJoinCollege = () => {
    console.log(!reasonToJoinCollege.trim());
    if (!reasonToJoinCollege.trim()) {
      alert("Please select REASON TO JOIN COLLEGE");
    }
  };

  const validateGuardian = () => {
    console.log(!guardian.trim());
    if (!guardian.trim()) {
      alert("Please select GUARDIAN");
    }
  };

  const validateTravelTime = () => {
    console.log(!travelTime.trim());
    if (!travelTime.trim()) {
      alert("Please select TRAVEL TIME");
    }
  };

  const validateStudyTime = () => {
    console.log(!studyTime.trim());
    if (!studyTime.trim()) {
      alert("Please select STUDY TIME");
    }
  };

  const validateFailure = () => {
    setFailuresError(!failures.trim());
  };

  const validateSchoolSupport = () => {
    console.log(!schoolSupport.trim());
    if (!schoolSupport.trim()) {
      alert("Please select SCHOOL SUPPORT");
    }
  };

  const validateFamilySupport = () => {
    console.log(!familySupport.trim());
    if (!familySupport.trim()) {
      alert("Please select FAMILY SUPPORT");
    }
  };

  const validateExtraActivities = () => {
    console.log(!extraActivities.trim());
    if (!extraActivities.trim()) {
      alert("Please select EXTRA ACTIVIES");
    }
  };

  const validateNurserySchool = () => {
    console.log(!nursery.trim());
    if (!nursery.trim()) {
      alert("Please select NURSERY");
    }
  };

  const validateHigherEducation = () => {
    console.log(!higherEducation.trim());
    if (!higherEducation.trim()) {
      alert("Please select HIGHER EDUCATION");
    }
  };

  const validateInternetAccess = () => {
    console.log(!internetAccess.trim());
    if (!internetAccess.trim()) {
      alert("Please select INTERNET ACCESS");
    }
  };

  const validateFamilyRelationship = () => {
    console.log(!familyRelationship.trim());
    if (!familyRelationship.trim()) {
      alert("Please select FAMILY RELATIONSHIP");
    }
  };

  const validateFreeTime = () => {
    console.log(!freeTime.trim());
    if (!freeTime.trim()) {
      alert("Please select FREE TIME");
    }
  };

  const validateGoingOut = () => {
    console.log(!goOut.trim());
    if (!goOut.trim()) {
      alert("Please select GOING OUT");
    }
  };

  const validateHealth = () => {
    console.log(!health.trim());
    if (!health.trim()) {
      alert("Please select HEALTH");
    }
  };

  const validateAbsences = () => {
    console.log(!absences.trim());
    if (!absences.trim()) {
      alert("Please select ABSENCES");
    }

    if (absences > 93) {
      alert("Please enter valid ABSENCES");
    }

    if (absences < 0) {
      alert("Please enter valid ABSENCES");
    }
  };

  const validateMidSemesterMarks = () => {
    console.log(!midSemMarks.trim());
    if (!midSemMarks.trim()) {
      alert("Please select MID SEMESTER MARKS");
    }

    if (midSemMarks > 30) {
      alert("Please enter valid MID SEMESTER MARKS");
    }

    if (midSemMarks < 0) {
      alert("Please enter valid MID SEMESTER MARKS");
    }
  };

  const validateAttendaceRate = () => {
    console.log(!attendanceRate.trim());
    if (!attendanceRate.trim()) {
      alert("Please select ATTENDANCE RATE");
    }

    if (attendanceRate > 100) {
      alert("Please enter valid ATTENDANCE RATE");
    }

    if (attendanceRate < 0) {
      alert("Please enter valid ATTENDANCE RATE");
    }
  };

  const validateClassParticipation = () => {
    console.log(!classParticipation.trim());
    if (!classParticipation.trim()) {
      alert("Please select CLASS PARTICIPATION");
    }
  };

  const validateMotivation = () => {
    console.log(!motivation.trim());
    if (!motivation.trim()) {
      alert("Please select MOTIVATION");
    }
  };

  const validateSelfDiscipline = () => {
    console.log(!selfDiscipline.trim());
    if (!selfDiscipline.trim()) {
      alert("Please select SELF DISCIPLINE");
    }
  };

  const validateTeacherQuality = () => {
    console.log(!teacherQuality.trim());
    if (!teacherQuality.trim()) {
      alert("Please select TEACHER QUALITY");
    }
  };

  const validateTimeManagement = () => {
    console.log(!timeManagement.trim());
    if (!timeManagement.trim()) {
      alert("Please select TIME MANAGEMENT");
    }
  };

  const validatePeerInfluence = () => {
    console.log(!peerInfluence.trim());
    if (!peerInfluence.trim()) {
      alert("Please select PEER INFLUENCE");
    }
  };

  const validateParentalInvolvement = () => {
    console.log(!parentalInvolvement.trim());
    if (!parentalInvolvement.trim()) {
      alert("Please select PARENTAL INVOLVEMENT");
    }
  };

  const validateTeacherStudentRelationship = () => {
    console.log(!teacherStudentRelationship.trim());
    if (!teacherStudentRelationship.trim()) {
      alert("Please select TEACHER STUDENT RELATIONSHIP");
    }
  };

  const validateStressLevel = () => {
    console.log(!stressLevel.trim());
    if (!stressLevel.trim()) {
      alert("Please select STRESS LEVEL");
    }
  };

  const validateMentalHealth = () => {
    console.log(!mentalHealth.trim());
    if (!mentalHealth.trim()) {
      alert("Please select MENTAL HEALTH");
    }
  };

  const validateGoalSetting = () => {
    console.log(!goalsSetting.trim());
    if (!goalsSetting.trim()) {
      alert("Please select GOAL SETTING");
    }
  };

  const validateLearningReasources = () => {
    console.log(!learningResources.trim());
    if (!learningResources.trim()) {
      alert("Please select LEARNING RESOURCES");
    }
  };

  const validateGroupStudy = () => {
    console.log(!groupStudy.trim());
    if (!groupStudy.trim()) {
      alert("Please select GROUP STUDY");
    }
  };

  const validateTimeSpentOnHomework = () => {
    console.log(!timeSpentOnHomework.trim());
    if (!timeSpentOnHomework.trim()) {
      alert("Please select TIME SPENT ON HOMEWORK");
    }
  };

  const validateSubjectInterest = () => {
    console.log(!subjectInterest.trim());
    if (!subjectInterest.trim()) {
      alert("Please select SUBJECT INTEREST");
    }
  };

  const validateClassroomEnvironment = () => {
    console.log(!classroomEnvironment.trim());
    if (!classroomEnvironment.trim()) {
      alert("Please select CLASS ENVIRONMENT");
    }
  };

  const validateTestPreparation = () => {
    console.log(!testPreparation.trim());
    if (!testPreparation.trim()) {
      alert("Please select TEST PREPARATION");
    }
  };

  const validateTimeSpentOnExtraCurricularActivities = () => {
    console.log(!timeSpentOnExtraActivities.trim());
    if (!timeSpentOnExtraActivities.trim()) {
      alert("Please select TIME SPENT ON EXTRA CURRICULAR ACTIVITIES");
    }
  };

  const validateWorkload = () => {
    console.log(!workload.trim());
    if (!workload.trim()) {
      alert("Please select WORKLOAD");
    }
  };

  const validateDegree = () => {
    console.log(!degree.trim());
    if (!degree.trim()) {
      alert("Please select DEGREE");
    }
  };

  const validateSubject = () => {
    console.log(!subject.trim());
    if (!subject.trim()) {
      alert("Please select SUBJECT");
    }
  };

  const validateSubjectCode = () => {
    console.log(!subjectCode.trim());
    if (!subjectCode.trim()) {
      alert("Please select SUBJECT CODE");
    }
  };

  const validateSemester = () => {
    console.log(!semester.trim());
    if (!semester.trim()) {
      alert("Please select SEMESTER");
    }
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleSexChange = (e) => {
    setSex(e.target.value);
  };

  const handleEnrollmentNumberChange = (e) => {
    setEnrollmentNumber(e.target.value);
  };

  const handleAgeChange = (e) => {
    setAge(e.target.value);
  };

  const handleFamilySizeChange = (e) => {
    setFamilySize(e.target.value);
  };

  const handleParentsCohabitationChange = (e) => {
    setParentsCohabitation(e.target.value);
  };

  const handleMothersEducationChange = (e) => {
    setMothersEducation(e.target.value);
  };

  const handleFathersEducationChange = (e) => {
    setFathersEducation(e.target.value);
  };

  const handleMothersJobChange = (e) => {
    setMothersJob(e.target.value);
  };

  const handleFathersJobChange = (e) => {
    setFathersJob(e.target.value);
  };

  const handleReasonToJoinCollegeChange = (e) => {
    setReasonToJoinCollege(e.target.value);
  };

  const handleGuardianChange = (e) => {
    setGuardian(e.target.value);
  };

  const handleTravelTimeChange = (e) => {
    setTravelTime(e.target.value);
  };

  const handleStudyTimeChange = (e) => {
    setStudyTime(e.target.value);
  };

  const handleFailureChange = (e) => {
    setFailures(e.target.value);
  };

  const handleSchoolSupporChange = (e) => {
    setSchoolSupport(e.target.value);
  };

  const handleFamilySupportChange = (e) => {
    setFamilySupport(e.target.value);
  };

  const handleExtraActivitiesChange = (e) => {
    setExtraActivities(e.target.value);
  };

  const handleNurseryChange = (e) => {
    setNursery(e.target.value);
  };

  const handleHigherEducationChange = (e) => {
    setHigherEducation(e.target.value);
  };

  const handleInternetAccessChange = (e) => {
    setInternetAccess(e.target.value);
  };

  const handleFamilyRelationshipChange = (e) => {
    setFamilyRelationship(e.target.value);
  };

  const handleFreeTimeChange = (e) => {
    setFreeTime(e.target.value);
  };

  const handleGoOutChange = (e) => {
    setGoOut(e.target.value);
  };

  const handleHealthChange = (e) => {
    setHealth(e.target.value);
  };

  const handleAbsencesChange = (e) => {
    setAbsences(e.target.value);
  };

  const handleMidSemMarksChange = (e) => {
    setMidSemMarks(e.target.value);
  };

  const handleAttendanceRateChange = (e) => {
    setAttendanceRate(e.target.value);
  };

  const handleClassParticipationChange = (e) => {
    setClassParticipation(e.target.value);
  };

  const handleMotivationChange = (e) => {
    setMotivation(e.target.value);
  };

  const handleSelfDisciplineChange = (e) => {
    setSelfDiscipline(e.target.value);
  };

  const handleTeacherQualityChange = (e) => {
    setTeacherQuality(e.target.value);
  };

  const handleTimeManagementChange = (e) => {
    setTimeManagement(e.target.value);
  };

  const handlePeerInfluenceChange = (e) => {
    setPeerInfluence(e.target.value);
  };

  const handleParentalInvolvementChange = (e) => {
    setParentalInvolvement(e.target.value);
  };

  const handleTeacherStudentRelationshipChange = (e) => {
    setTeacherStudentRelationship(e.target.value);
  };

  const handleStressLevelChange = (e) => {
    setStressLevel(e.target.value);
  };

  const handleMentalHealthChange = (e) => {
    setMentalHealth(e.target.value);
  };

  const handleGoalsSettingChange = (e) => {
    setGoalsSetting(e.target.value);
  };

  const handleLearningResourcesChange = (e) => {
    setLearningResources(e.target.value);
  };

  const handleGroupStudyChange = (e) => {
    setGroupStudy(e.target.value);
  };

  const handleTimeSpentOnHomeworkChange = (e) => {
    setTimeSpentOnHomework(e.target.value);
  };

  const handleSubjectInterestChange = (e) => {
    setSubjectInterest(e.target.value);
  };

  const handleClassroomEnvironmentChange = (e) => {
    setClassroomEnvironment(e.target.value);
  };

  const handleTestPreparationChange = (e) => {
    setTestPreparation(e.target.value);
  };

  const handleTimeSpentOnExtraActivitiesChange = (e) => {
    setTimeSpentOnExtraActivities(e.target.value);
  };

  const handleWorkloadChange = (e) => {
    setWorkload(e.target.value);
  };

  const handleDegreeChange = (e) => {
    setDegree(e.target.value);
  };

  const handleSubjectChange = (e) => {
    setSubject(e.target.value);
  };

  const handleSubjectCodeChange = (e) => {
    setSubjectCode(e.target.value);
  };

  const handleSemesterChange = (e) => {
    setSemester(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    validateName();
    validateEnrollmentNumber();
    validateAge();
    validateSex();
    validateFamilySize();
    validateParentsCohabitation();
    validateMothersEducation();
    validateFathersEducation();
    validateMothersJob();
    validateFathersJob();
    validateReasonToJoinCollege();
    validateGuardian();
    validateTravelTime();
    validateStudyTime();
    validateFailure();
  };

  return (
    <ThemeProvider theme={theme}>
      <Container
        style={{
          backgroundColor: "#121212",
          minHeight: " calc(100vh - 160px)",
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
          <Typography variant="h5" align="center" color="textPrimary">
            Your Profile
          </Typography>
          <TextField
            label="Name"
            value={name}
            onChange={handleNameChange}
            error={nameError} //To display error state for invalid input
            helperText={nameError && "Please enter a valid Name"} //helper text to show when there's an error.
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
            label="Enrollment Number"
            value={enrollmentNumber}
            onChange={handleEnrollmentNumberChange}
            error={enrollmentNumberError} //To display error state for invalid input
            helperText={
              enrollmentNumberError && "Please enter a enrollment number"
            } //helper text to show when there's an error.
            fullWidth
            margin="normal"
            FormHelperTextProps={{
              sx: {
                position: "absolute",
                top: "100%",
              },
            }}
            type="number"
          />

          <FormControl component="fieldset" fullWidth margin="normal">
            <FormLabel component="legend">Gender/Sex:</FormLabel>
            <RadioGroup row value={sex} onChange={handleSexChange}>
              <FormControlLabel
                value="male"
                control={<Radio color="primary" />}
                label="Male"
              />
              <FormControlLabel
                value="female"
                control={<Radio color="primary" />}
                label="Female"
              />
            </RadioGroup>
          </FormControl>

          <TextField
            label="Age"
            value={age}
            onChange={handleAgeChange}
            error={ageError} //To display error state for invalid input
            helperText={ageError && "Please enter valid age. range: 18 - 26"} //helper text to show when there's an error.
            fullWidth
            margin="normal"
            FormHelperTextProps={{
              sx: {
                position: "absolute",
                top: "100%",
              },
            }}
            type="number"
          />

          <FormControl component="fieldset" fullWidth margin="normal">
            <FormLabel component="legend">Family Size:</FormLabel>
            <RadioGroup
              row
              value={familySize}
              onChange={handleFamilySizeChange}
            >
              <FormControlLabel
                value="LE3"
                control={<Radio color="primary" />}
                label="Less than or equal to 3"
              />
              <FormControlLabel
                value="GT3"
                control={<Radio color="primary" />}
                label="Greater than 3"
              />
            </RadioGroup>
          </FormControl>

          <FormControl component="fieldset" fullWidth margin="normal">
            <FormLabel component="legend">
              Parent's Cohabitation Status:
            </FormLabel>
            <RadioGroup
              row
              value={parentsCohabitation}
              onChange={handleParentsCohabitationChange}
            >
              <FormControlLabel
                value="T"
                control={<Radio color="primary" />}
                label="Together"
              />
              <FormControlLabel
                value="A"
                control={<Radio color="primary" />}
                label="Apart"
              />
            </RadioGroup>
          </FormControl>

          <FormControl component="fieldset" fullWidth margin="normal">
            <FormLabel component="legend">Mother's Education Level:</FormLabel>
            <RadioGroup
              row
              value={mothersEducation}
              onChange={handleMothersEducationChange}
            >
              <FormControlLabel
                value="0"
                control={<Radio color="primary" />}
                label="None"
              />
              <FormControlLabel
                value="1"
                control={<Radio color="primary" />}
                label="Primary Education (4th grade)"
              />

              <FormControlLabel
                value="2"
                control={<Radio color="primary" />}
                label="5th to 9th grade"
              />

              <FormControlLabel
                value="3"
                control={<Radio color="primary" />}
                label="Secondary Education"
              />

              <FormControlLabel
                value="4"
                control={<Radio color="primary" />}
                label="Higher Education"
              />
            </RadioGroup>
          </FormControl>

          <FormControl component="fieldset" fullWidth margin="normal">
            <FormLabel component="legend">Father's Education Level:</FormLabel>
            <RadioGroup
              row
              value={fathersEducation}
              onChange={handleFathersEducationChange}
            >
              <FormControlLabel
                value="0"
                control={<Radio color="primary" />}
                label="None"
              />
              <FormControlLabel
                value="1"
                control={<Radio color="primary" />}
                label="Primary Education (4th grade)"
              />

              <FormControlLabel
                value="2"
                control={<Radio color="primary" />}
                label="5th to 9th grade"
              />

              <FormControlLabel
                value="3"
                control={<Radio color="primary" />}
                label="Secondary Education"
              />

              <FormControlLabel
                value="4"
                control={<Radio color="primary" />}
                label="Higher Education"
              />
            </RadioGroup>
          </FormControl>

          <FormControl component="fieldset" fullWidth margin="normal">
            <FormLabel component="legend">Mother's Job:</FormLabel>
            <RadioGroup
              row
              value={mothersJob}
              onChange={handleMothersJobChange}
            >
              <FormControlLabel
                value="teacher"
                control={<Radio color="primary" />}
                label="Teacher"
              />
              <FormControlLabel
                value="health"
                control={<Radio color="primary" />}
                label="Health care related"
              />

              <FormControlLabel
                value="services"
                control={<Radio color="primary" />}
                label="Civil services (e.g. administrative or police)"
              />

              <FormControlLabel
                value="at_home"
                control={<Radio color="primary" />}
                label="At Home"
              />

              <FormControlLabel
                value="other"
                control={<Radio color="primary" />}
                label="Other"
              />
            </RadioGroup>
          </FormControl>

          <FormControl component="fieldset" fullWidth margin="normal">
            <FormLabel component="legend">Father's Job:</FormLabel>
            <RadioGroup
              row
              value={fathersJob}
              onChange={handleFathersJobChange}
            >
              <FormControlLabel
                value="teacher"
                control={<Radio color="primary" />}
                label="Teacher"
              />
              <FormControlLabel
                value="health"
                control={<Radio color="primary" />}
                label="Health care related"
              />

              <FormControlLabel
                value="services"
                control={<Radio color="primary" />}
                label="Civil services (e.g. administrative or police)"
              />

              <FormControlLabel
                value="at_home"
                control={<Radio color="primary" />}
                label="At Home"
              />

              <FormControlLabel
                value="other"
                control={<Radio color="primary" />}
                label="Other"
              />
            </RadioGroup>
          </FormControl>

          <FormControl component="fieldset" fullWidth margin="normal">
            <FormLabel component="legend">
              Reason to choose school/college:
            </FormLabel>
            <RadioGroup
              row
              value={reasonToJoinCollege}
              onChange={handleReasonToJoinCollegeChange}
            >
              <FormControlLabel
                value="home"
                control={<Radio color="primary" />}
                label="Close to home"
              />
              <FormControlLabel
                value="reputation"
                control={<Radio color="primary" />}
                label="College/School reputation"
              />

              <FormControlLabel
                value="course"
                control={<Radio color="primary" />}
                label="Course"
              />

              <FormControlLabel
                value="other"
                control={<Radio color="primary" />}
                label="Other"
              />
            </RadioGroup>
          </FormControl>

          <FormControl component="fieldset" fullWidth margin="normal">
            <FormLabel component="legend">Guardian:</FormLabel>
            <RadioGroup row value={guardian} onChange={handleGuardianChange}>
              <FormControlLabel
                value="mother"
                control={<Radio color="primary" />}
                label="Mother"
              />
              <FormControlLabel
                value="father"
                control={<Radio color="primary" />}
                label="Father"
              />

              <FormControlLabel
                value="other"
                control={<Radio color="primary" />}
                label="Other"
              />
            </RadioGroup>
          </FormControl>

          <FormControl component="fieldset" fullWidth margin="normal">
            <FormLabel component="legend">
              Home to college travel time:
            </FormLabel>
            <RadioGroup
              row
              value={travelTime}
              onChange={handleTravelTimeChange}
            >
              <FormControlLabel
                value="1"
                control={<Radio color="primary" />}
                label="< 15 min"
              />
              <FormControlLabel
                value="2"
                control={<Radio color="primary" />}
                label="15 to 30 min"
              />

              <FormControlLabel
                value="3"
                control={<Radio color="primary" />}
                label="30 min to 1 hour"
              />

              <FormControlLabel
                value="4"
                control={<Radio color="primary" />}
                label="> 1 hour"
              />
            </RadioGroup>
          </FormControl>

          <FormControl component="fieldset" fullWidth margin="normal">
            <FormLabel component="legend">
              Weekly study time outside school/college:
            </FormLabel>
            <RadioGroup row value={studyTime} onChange={handleStudyTimeChange}>
              <FormControlLabel
                value="1"
                control={<Radio color="primary" />}
                label="< 2 hours"
              />
              <FormControlLabel
                value="2"
                control={<Radio color="primary" />}
                label="2 to 5 hours"
              />

              <FormControlLabel
                value="3"
                control={<Radio color="primary" />}
                label="5 to 10 hours"
              />

              <FormControlLabel
                value="4"
                control={<Radio color="primary" />}
                label="> 10 hour"
              />
            </RadioGroup>
          </FormControl>

          <TextField
            label="Past class failures"
            value={failures}
            onChange={handleFailureChange}
            error={failuresError} //To display error state for invalid input
            helperText={failuresError && "Please enter a failure number"} //helper text to show when there's an error.
            fullWidth
            margin="normal"
            FormHelperTextProps={{
              sx: {
                position: "absolute",
                top: "100%",
              },
            }}
            type="number"
          />

          <Button
            variant="contained"
            color="primary"
            onClick={(event) => {
              handleSubmit(event);
            }}
            style={{ marginTop: "24px" }}
          >
            Save
          </Button>
        </div>
      </Container>
    </ThemeProvider>
  );
};

export default Profile;
