import React, { useEffect, useState } from "react";
import { Chip } from "@mui/material";
import { Stack } from "@mui/material";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import Radio from "@mui/material/Radio";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import RadioGroup from "@mui/material/RadioGroup";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Container, CssBaseline } from "@mui/material";
import Typography from "@mui/material/Typography";
import { Link } from "react-scroll";
import { scroller } from "react-scroll";
import { Tabs, Tab } from "@mui/material";
import { InputLabel, Slider, FormHelperText } from "@mui/material";
import { MenuItem, Select } from "@mui/material";
import { embedMarks, getCareerData, getGradeData, sendCareerData, sendGradeData, updateCareerData, updateGradeData } from "../helper";
import CircularProgress from "@mui/material/CircularProgress";
import { Snackbar, Alert } from '@mui/material';


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

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

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

  const [dataIsAvailable, setDataIsAvailable] = useState(false);
  const [careerDataIsAvailable, setCareerDataIsAvailable] = useState(false);

  const [isLoading, setIsLoading] = useState(false);

  const [open, setOpen] = useState(false);
  const [severity, setSeverity] = useState('success');
  const [message, setMessage] = useState('');

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


  const genderOptions = [
    { value: "male", label: "Male" },
    { value: "female", label: "Female" },
  ];

  const familySizeOptions = [
    { value: "LE3", label: "Less than 3" },
    { value: "GT3", label: "Greater than 3" },
  ];

  const parentStatusOptions = [
    { value: "T", label: "Together" },
    { value: "A", label: "Apart" },
  ];

  const addressOptions = [
    { value: "U", label: "Urban" },
    { value: "R", label: "Rural" },
  ];

  const educationOptions = [
    { value: 0, label: "None" },
    { value: 1, label: "Primary" },
    { value: 2, label: "Secondary" },
    { value: 3, label: "Higher" },
  ];

  const jobOptions = [
    { value: "teacher", label: "Teacher" },
    { value: "health", label: "Health" },
    { value: "services", label: "Services" },
    { value: "at_home", label: "At Home" },
    { value: "other", label: "Other" },
  ];

  const reasonOptions = [
    { value: "home", label: "Home" },
    { value: "reputation", label: "Reputation" },
    { value: "course", label: "Course" },
    { value: "other", label: "Other" },
  ];

  const guardianOptions = [
    { value: "mother", label: "Mother" },
    { value: "father", label: "Father" },
    { value: "other", label: "Other" },
  ];

  const travelTimeOptions = [
    { value: 1, label: "<15 min" },
    { value: 2, label: "15-30 min" },
    { value: 3, label: "30-60 min" },
    { value: 4, label: ">60 min" },
  ];

  const studyTimeOptions = [
    { value: 1, label: "<2 hours" },
    { value: 2, label: "2-5 hours" },
    { value: 3, label: "5-10 hours" },
    { value: 4, label: ">10 hours" },
  ];

  const yesNoOptions = [
    { value: "no", label: "No" },
    { value: "yes", label: "Yes" },
  ];

  const veryBadToVeryGoodOptions = [
    { value: 1, label: "Very Bad" },
    { value: 2, label: "Bad" },
    { value: 3, label: "Neutral" },
    { value: 4, label: "Good" },
    { value: 5, label: "Very Good" },
  ];

  const veryLowToVeryHighOptions = [
    { value: 1, label: "Very Low" },
    { value: 2, label: "Low" },
    { value: 3, label: "Average/Moderate" },
    { value: 4, label: "High" },
    { value: 5, label: "Very High" },
  ];

  const veryRareToVeryFrequntOptions = [
    { value: 1, label: "Very Rare" },
    { value: 2, label: "Rare" },
    { value: 3, label: "Average" },
    { value: 4, label: "Frequent" },
    { value: 5, label: "Very Frequent" },
  ];

  const veryBadToExcellentOptions = [
    { value: 1, label: "Very Poor" },
    { value: 2, label: "Poor" },
    { value: 3, label: "Average" },
    { value: 4, label: "Good" },
    { value: 5, label: "Excellent" },
  ];

  const veryNegativeToVeryPositiveOptions = [
    { value: 1, label: "Very Negative" },
    { value: 2, label: "Negative" },
    { value: 3, label: "Neutral" },
    { value: 4, label: "Positive" },
    { value: 5, label: "Very Positive" },
  ];

  const veryInsufficientToVerySufficientOptions = [
    { value: 1, label: "Very Insufficient" },
    { value: 2, label: "Insufficient" },
    { value: 3, label: "Neutral" },
    { value: 4, label: "Sufficient" },
    { value: 5, label: "Very Sufficient" },
  ];

  const neverToAlwaysOptions = [
    { value: 1, label: "Never" },
    { value: 2, label: "Rarely" },
    { value: 3, label: "Sometimes" },
    { value: 4, label: "Often" },
    { value: 5, label: "Always" },
  ];

  const veryLightToVeryHeavyOptions = [
    { value: 1, label: "Very Light" },
    { value: 2, label: "Light" },
    { value: 3, label: "Neutral" },
    { value: 4, label: "Heavy" },
    { value: 5, label: "Very Heavy" },
  ];

  const validateName = () => {
    setNameError(!name.trim());
  };

  const validateEnrollmentNumber = () => {
    setEnrollmentNumberError(!enrollmentNumber);
  };

  const validateAge = () => {
    setAgeError(!age);
  };

  const validateAddress = () => {
    console.log(!address.trim());
    if (!address.trim()) {
      alert("Please select ADDRESS!");
    }
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
    console.log(!mothersEducation);
    if (!mothersEducation) {
      alert("Please select MOTHER'S EDUCATION");
    }
  };

  const validateFathersEducation = () => {
    console.log(fathersEducation);
    if (!fathersEducation) {
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
    console.log(!travelTime);
    if (!travelTime) {
      alert("Please select TRAVEL TIME");
    }
  };

  const validateStudyTime = () => {
    console.log(!studyTime);
    if (!studyTime) {
      alert("Please select STUDY TIME");
    }
  };

  const validateFailure = () => {
    // setFailuresError(!failures);
    console.log(!failures);
    if (failures === "") {
      alert("Please select FAILURES");
    }
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
    console.log(!familyRelationship);
    if (!familyRelationship) {
      alert("Please select FAMILY RELATIONSHIP");
    }
  };

  const validateFreeTime = () => {
    console.log(!freeTime);
    if (!freeTime) {
      alert("Please select FREE TIME");
    }
  };

  const validateGoingOut = () => {
    console.log(!goOut);
    if (!goOut) {
      alert("Please select GOING OUT");
    }
  };

  const validateHealth = () => {
    console.log(!health);
    if (!health) {
      alert("Please select HEALTH");
    }
  };

  const validateAbsences = () => {
    // console.log(!absences.trim());
    // if (!absences.trim()) {
    //   alert("Please select ABSENCES");
    // }

    // if (absences > 93) {
    //   alert("Please enter valid ABSENCES");
    // }

    // if (absences < 0) {
    //   alert("Please enter valid ABSENCES");
    // }
    setAbsences(100 - attendanceRate)
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
    console.log(!attendanceRate);
    if (!attendanceRate) {
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
    console.log(!classParticipation);
    if (!classParticipation) {
      alert("Please select CLASS PARTICIPATION");
    }
  };

  const validateMotivation = () => {
    console.log(!motivation);
    if (!motivation) {
      alert("Please select MOTIVATION");
    }
  };

  const validateSelfDiscipline = () => {
    console.log(!selfDiscipline);
    if (!selfDiscipline) {
      alert("Please select SELF DISCIPLINE");
    }
  };

  const validateTeacherQuality = () => {
    console.log(!teacherQuality);
    if (!teacherQuality) {
      alert("Please select TEACHER QUALITY");
    }
  };

  const validateTimeManagement = () => {
    console.log(!timeManagement);
    if (!timeManagement) {
      alert("Please select TIME MANAGEMENT");
    }
  };

  const validatePeerInfluence = () => {
    console.log(!peerInfluence);
    if (!peerInfluence) {
      alert("Please select PEER INFLUENCE");
    }
  };

  const validateParentalInvolvement = () => {
    console.log(!parentalInvolvement);
    if (!parentalInvolvement) {
      alert("Please select PARENTAL INVOLVEMENT");
    }
  };

  const validateTeacherStudentRelationship = () => {
    console.log(!teacherStudentRelationship);
    if (!teacherStudentRelationship) {
      alert("Please select TEACHER STUDENT RELATIONSHIP");
    }
  };

  const validateStressLevel = () => {
    console.log(!stressLevel);
    if (!stressLevel) {
      alert("Please select STRESS LEVEL");
    }
  };

  const validateMentalHealth = () => {
    console.log(!mentalHealth);
    if (!mentalHealth) {
      alert("Please select MENTAL HEALTH");
    }
  };

  const validateGoalSetting = () => {
    console.log(!goalsSetting);
    if (!goalsSetting) {
      alert("Please select GOAL SETTING");
    }
  };

  const validateLearningReasources = () => {
    console.log(!learningResources);
    if (!learningResources) {
      alert("Please select LEARNING RESOURCES");
    }
  };

  const validateGroupStudy = () => {
    console.log(!groupStudy);
    if (!groupStudy) {
      alert("Please select GROUP STUDY");
    }
  };

  const validateTimeSpentOnHomework = () => {
    console.log(!timeSpentOnHomework);
    if (!timeSpentOnHomework) {
      alert("Please select TIME SPENT ON HOMEWORK");
    }
  };

  const validateSubjectInterest = () => {
    console.log(!subjectInterest);
    if (!subjectInterest) {
      alert("Please select SUBJECT INTEREST");
    }
  };

  const validateClassroomEnvironment = () => {
    console.log(!classroomEnvironment);
    if (!classroomEnvironment) {
      alert("Please select CLASS ENVIRONMENT");
    }
  };

  const validateTestPreparation = () => {
    console.log(!testPreparation);
    if (!testPreparation) {
      alert("Please select TEST PREPARATION");
    }
  };

  const validateTimeSpentOnExtraCurricularActivities = () => {
    console.log(!timeSpentOnExtraActivities);
    if (!timeSpentOnExtraActivities) {
      alert("Please select TIME SPENT ON EXTRA CURRICULAR ACTIVITIES");
    }
  };

  const validateWorkload = () => {
    console.log(!workload);
    if (!workload) {
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
    console.log(!semester);
    if (!semester) {
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

  const handleAddressChange = (e) => {
    setAddress(e.target.value);
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    validateName();
    validateEnrollmentNumber();
    validateAddress();
    validateAge();
    validateSex();
    validateFamilySize();
    validateParentsCohabitation();
    validateMothersEducation();
    validateFathersEducation();
    validateMothersJob();
    validateFathersJob();

    // School and Academic Details
    validateReasonToJoinCollege();
    validateGuardian();
    validateTravelTime();
    validateStudyTime();
    validateFailure();
    validateSchoolSupport();
    validateFamilySupport();
    validateExtraActivities();
    validateNurserySchool();
    validateHigherEducation();
    validateInternetAccess();
    validateFamilyRelationship();
    validateFreeTime();
    validateGoingOut();
    validateHealth();
    validateAbsences();
    validateMidSemesterMarks();
    validateAttendaceRate();
    validateClassParticipation();
    validateMotivation();
    validateSelfDiscipline();
    validateTeacherQuality();
    validateTimeManagement();
    validatePeerInfluence();
    validateParentalInvolvement();
    validateTeacherStudentRelationship();
    validateStressLevel();
    validateMentalHealth();
    validateGoalSetting();
    validateLearningReasources();
    validateGroupStudy();
    validateTimeSpentOnHomework();
    validateSubjectInterest();
    validateClassroomEnvironment();
    validateTestPreparation();
    validateTimeSpentOnExtraCurricularActivities();
    validateWorkload();
    validateDegree();
    validateSubject();
    validateSubjectCode();
    validateSemester();

    if (nameError || ageError || enrollmentNumberError || failuresError) {
      return;
    }

    const data = {
      user_id: 0,
      name: name,
      enrollment_number: enrollmentNumber,
      sex: sex,
      age: age,
      address: address,
      family_size: familySize,
      parent_status: parentsCohabitation,
      mother_education: mothersEducation,
      father_education: fathersEducation,
      mother_job: mothersJob,
      father_job: fathersJob,
      reason: reasonToJoinCollege,
      guardian: guardian,
      travel_time: travelTime,
      study_time: studyTime,
      failures: failures,
      school_support: schoolSupport,
      family_support: familySupport,
      extra_activities: extraActivities,
      nursery: nursery,
      higher: higherEducation,
      internet: internetAccess,
      family_relationship: familyRelationship,
      free_time: freeTime,
      go_out: goOut,
      health: health,
      absences: absences,
      class_participation: classParticipation,
      motivation: motivation,
      self_discipline: selfDiscipline,
      teacher_quality: teacherQuality,
      time_management: timeManagement,
      peer_influence: peerInfluence,
      parental_involvement: parentalInvolvement,
      teacher_student_relationship: teacherStudentRelationship,
      stress_level: stressLevel,
      mental_health: mentalHealth,
      goal_setting: goalsSetting,
      learning_resources: learningResources,
      group_study: groupStudy,
      subject_interest: subjectInterest,
      classroom_environment: classroomEnvironment,
      test_preparation: testPreparation,
      workload: workload,
      attendance_rate: attendanceRate,
      time_spent_on_homework: timeSpentOnHomework,
      time_spent_on_extracurricular_activities: timeSpentOnExtraActivities,
      degree: degree,
      semester: semester,
      subjects: subject,
      subjects_codes: subjectCode,
      mid_sem_marks: midSemMarks,
    };
    setIsLoading(true);

    if (dataIsAvailable) {
      try {
        const response = await updateGradeData(data);
        console.log(response);
        if (response.status === 200) {
          setSeverity('success');
          setMessage('Data updated successfully!');
        } else {
          setMessage('Something went wrong! ' + response.data.detail + ' ' + response.statusText);
          setSeverity('error');
        }
      } catch (error) {
        setSeverity('error');
        setMessage('Something went wrong ' + error);
      } finally {
        handleOpen();
        setIsLoading(false);
      }
    } else {
      try {
        const response = await sendGradeData(data);
        console.log(response);
        if (response.status === 200) {
          setSeverity('success');
          setMessage('Data saved successfully!');
          setDataIsAvailable(true);
        } else {
          setMessage('Something went wrong! ' + response.data.detail + ' ' + response.statusText);
          setSeverity('error');
        }
      } catch (error) {
        setSeverity('error');
        setMessage('Something went wrong ' + error);
      } finally {
        handleOpen();
        setIsLoading(false);
      }
    }
  };

  useEffect(() => {
    getData();
    getCareerAnalysisData();
  }, []);

  const getData = async () => {
    const response = await getGradeData();

    if (response.status === 200) {
      const data = response.data.data;

      setDataIsAvailable(true);

      setEnrollmentNumber(data.enrollment_number);
      setSex(data.sex);
      setAddress(data.address);
      setAge(data.age);
      setFamilySize(data.family_size);
      setParentsCohabitation(data.parent_status);
      setMothersEducation(data.mother_education);
      setFathersEducation(data.father_education);
      setMothersJob(data.mother_job);
      setFathersJob(data.father_job);
      setReasonToJoinCollege(data.reason);
      setGuardian(data.guardian);
      setTravelTime(data.travel_time);
      setStudyTime(data.study_time);
      setFailures(data.failures);
      setSchoolSupport(data.school_support);
      setFamilySupport(data.family_support);
      setExtraActivities(data.extra_activities);
      setNursery(data.nursery);
      setHigherEducation(data.higher);
      setInternetAccess(data.internet);
      setFamilyRelationship(data.family_relationship);
      setFreeTime(data.free_time);
      setGoOut(data.go_out);
      setHealth(data.health);
      setAbsences(data.absences);
      setMidSemMarks(embedMarks(data.mid_sem_marks, 30));
      setAttendanceRate(data.attendance_rate);
      setClassParticipation(data.class_participation);
      setMotivation(data.motivation);
      setSelfDiscipline(data.self_discipline);
      setTeacherQuality(data.teacher_quality);
      setTimeManagement(data.time_management);
      setPeerInfluence(data.peer_influence);
      setParentalInvolvement(data.parental_involvement);
      setTeacherStudentRelationship(data.teacher_student_relationship);
      setStressLevel(data.stress_level);
      setMentalHealth(data.mental_health);
      setGoalsSetting(data.goal_setting);
      setLearningResources(data.learning_resources);
      setGroupStudy(data.group_study);
      setSubjectInterest(data.subject_interest);
      setClassroomEnvironment(data.classroom_environment);
      setTestPreparation(data.test_preparation);
      setWorkload(data.workload);
      setDegree(data.degree);
      setSubject(data.subjects);
      setSubjectCode(data.subjects_codes);
      setSemester(data.semester);
      setTimeSpentOnExtraActivities(data.time_spent_on_extracurricular_activities);
      setTimeSpentOnHomework(data.time_spent_on_homework);
    }
  }

  const getCareerAnalysisData = async () => {
    const response = await getCareerData();

    if (response.status === 200) {
      const data = response.data.data;

      setCareerDataIsAvailable(true);

      setLogicalQuotionRating(data.logical_quotient_rating);
      setHackathons(data.hackathons);
      setCodingSkillsRating(data.coding_skills_rating);
      setPublicSpeakingPoints(data.public_speaking_points);
      setSelfLearningCapability(data.self_learning_capability);
      setExtraCourses(data.extra_courses_did);
      setCertifications(data.certifications);
      setWorkshops(data.workshops);
      setReadingAndWritingSkills(data.reading_writing_skills);
      setMemoryCapabilityScore(data.memory_capability_score);
      setInterestedSubjects(data.interested_subjects);
      setInterestedCareer(data.interested_career_area);
      setTypeOfCompanyWantToSettle(data.type_of_company_want_to_settle_in);
      setTakeInputsFromSeniors(data.taken_inputs_from_seniors_or_elders);
      setInterestedTypeOfBooks(data.interested_type_of_books);
      setManagementOrTechnical(data.management_or_technical);
      setHardOrSmartWorker(data.hard_or_smart_worker);
      setWorkedInTeam(data.worked_in_teams_ever);
      setIntrovert(data.introvert);
      // setSuggestedJobRole(data.suggested_job_role);
    }
  }

  const [logicalQuotionRating, setLogicalQuotionRating] = useState(0);
  const [hackathons, setHackathons] = useState(0);
  const [codingSkillsRating, setCodingSkillsRating] = useState(0);
  const [publicSpeakingPoints, setPublicSpeakingPoints] = useState(0);
  const [selfLearningCapability, setSelfLearningCapability] = useState("");
  const [extraCourses, setExtraCourses] = useState("");
  const [certifications, setCertifications] = useState("");
  const [workshops, setWorkshops] = useState("");
  const [readingAndWritingSkills, setReadingAndWritingSkills] = useState("");
  const [memoryCapabilityScore, setMemoryCapabilityScore] = useState("");
  const [interestedSubjects, setInterestedSubjects] = useState("");
  const [interestedCareer, setInterestedCareer] = useState("");
  const [typeOfCompanyWantToSettle, setTypeOfCompanyWantToSettle] =
    useState("");
  const [takeInputsFromSeniors, setTakeInputsFromSeniors] = useState("");
  const [interestedTypeOfBooks, setInterestedTypeOfBooks] = useState("");
  const [managementOrTechnical, setManagementOrTechnical] = useState("");
  const [hardOrSmartWorker, setHardOrSmartWorker] = useState("");
  const [workedInTeam, setWorkedInTeam] = useState("");
  const [introvert, setIntrovert] = useState("");
  const [suggestedJobRole, setSuggestedJobRole] = useState("");

  const handleLogicalQuotionRatingChange = (e) => {
    setLogicalQuotionRating(e.target.value);
  };

  const handleHackathonsChange = (e) => {
    setHackathons(e.target.value);
  };

  const handleCodingSkillsRatingChange = (e) => {
    setCodingSkillsRating(e.target.value);
  };

  const handlePublicSpeakingPointsChange = (e) => {
    setPublicSpeakingPoints(e.target.value);
  };

  const handleSelfLearningCapabilityChange = (e) => {
    setSelfLearningCapability(e.target.value);
  };

  const handleExtraCoursesChange = (e) => {
    setExtraCourses(e.target.value);
  };

  const handleCertificationsChange = (e) => {
    setCertifications(e.target.value);
  };

  const handleWorkshopsChange = (e) => {
    setWorkshops(e.target.value);
  };

  const handleReadingAndWritingSkillsChange = (e) => {
    setReadingAndWritingSkills(e.target.value);
  };

  const handleMemoryCapabilityScoreChange = (e) => {
    setMemoryCapabilityScore(e.target.value);
  };

  const handleInterestedSubjectsChange = (e) => {
    setInterestedSubjects(e.target.value);
  };

  const handleInterestedCareerChange = (e) => {
    setInterestedCareer(e.target.value);
  };

  const handleTypeOfCompanyWantToSettleChange = (e) => {
    setTypeOfCompanyWantToSettle(e.target.value);
  };

  const handleTakeInputsFromSeniorsChange = (e) => {
    setTakeInputsFromSeniors(e.target.value);
  };

  const handleInterestedTypeOfBooksChange = (e) => {
    setInterestedTypeOfBooks(e.target.value);
  };

  const handleManagementOrTechnicalChange = (e) => {
    setManagementOrTechnical(e.target.value);
  };

  const handleHardOrSmartWorkerChange = (e) => {
    setHardOrSmartWorker(e.target.value);
  };

  const handleWorkedInTeamChange = (e) => {
    setWorkedInTeam(e.target.value);
  };

  const handleIntrovertChange = (e) => {
    setIntrovert(e.target.value);
  };

  const handleSuggestedJobRoleChange = (e) => {
    setSuggestedJobRole(e.target.value);
  };

  const validateLogicalQuotionRating = () => {
    if (logicalQuotionRating === 0) {
      alert("Please rate your logical quotion");
      return false;
    }
    return true;
  };

  const validateHackathons = () => {
    if (hackathons === 0) {
      alert("Please rate your hackathons");
      return false;
    }
    return true;
  };

  const validateCodingSkillsRating = () => {
    if (codingSkillsRating === 0) {
      alert("Please rate your coding skills");
      return false;
    }
    return true;
  };

  const validatePublicSpeakingPoints = () => {
    if (publicSpeakingPoints === 0) {
      alert("Please rate your public speaking points");
      return false;
    }
    return true;
  };

  const validateSelfLearningCapability = () => {
    if (selfLearningCapability === "") {
      alert("Please enter your self learning capability");
      return false;
    }
    return true;
  };

  const validateExtraCourses = () => {
    if (extraCourses === "") {
      alert("Please enter your extra courses");
      return false;
    }
    return true;
  };

  const validateCertifications = () => {
    if (certifications === "") {
      alert("Please enter your certifications");
      return false;
    }
    return true;
  };

  const validateWorkshops = () => {
    if (workshops === "") {
      alert("Please enter your workshops");
      return false;
    }
    return true;
  };

  const validateReadingAndWritingSkills = () => {
    if (readingAndWritingSkills === "") {
      alert("Please enter your reading and writing skills");
      return false;
    }
    return true;
  };

  const validateMemoryCapabilityScore = () => {
    if (memoryCapabilityScore === "") {
      alert("Please enter your memory capability score");
      return false;
    }
    return true;
  };

  const validateInterestedSubjects = () => {
    if (interestedSubjects === "") {
      alert("Please enter your interested subjects");
      return false;
    }

    return true;
  };

  const validateInterestedCareer = () => {
    if (interestedCareer === "") {
      alert("Please enter your interested career");
      return false;
    }
    return true;
  };

  const validateTypeOfCompanyWantToSettle = () => {
    if (typeOfCompanyWantToSettle === "") {
      alert("Please enter type of company want to settle");
      return false;
    }
    return true;
  };

  const validateTakeInputsFromSeniors = () => {
    if (takeInputsFromSeniors === "") {
      alert("Please rate your take inputs from seniors");
      return false;
    }
    return true;
  };

  const validateInterestedTypeOfBooks = () => {
    if (interestedTypeOfBooks === "") {
      alert("Please input your interested type of books");
      return false;
    }
    return true;
  };

  const validateManagementOrTechnical = () => {
    if (managementOrTechnical === "") {
      alert("Please rate your management or technical");
      return false;
    }

    return true;
  };

  const validateHardOrSmartWorker = () => {
    if (hardOrSmartWorker === "") {
      alert("Please rate your hard or smart worker");
      return false;
    }
    return true;
  };

  const validateWorkedInTeam = () => {
    if (workedInTeam === "") {
      alert("Please rate your worked in team");
      return false;
    }
    return true;
  };

  const validateIntrovert = () => {
    if (introvert === "") {
      alert("Please rate your introvert");
      return false;
    }
    return true;
  };

  const validateSuggestedJobRole = () => {
    if (suggestedJobRole === "") {
      alert("Please enter your suggested job role");
      return false;
    }
    return true;
  };

  const validateAll = () => {
    if (
      validateLogicalQuotionRating() &&
      validateHackathons() &&
      validateCodingSkillsRating() &&
      validatePublicSpeakingPoints() &&
      validateSelfLearningCapability() &&
      validateExtraCourses() &&
      validateCertifications() &&
      validateWorkshops() &&
      validateReadingAndWritingSkills() &&
      validateMemoryCapabilityScore() &&
      validateInterestedSubjects() &&
      validateInterestedCareer() &&
      validateTypeOfCompanyWantToSettle() &&
      validateTakeInputsFromSeniors() &&
      validateInterestedTypeOfBooks() &&
      validateManagementOrTechnical() &&
      validateHardOrSmartWorker() &&
      validateWorkedInTeam() &&
      validateIntrovert()) {
      return true;
    }
    return false;
  };

  const handleSubmitCareer = async (e) => {
    e.preventDefault();
    if (validateAll()) {
      console.log("All validations passed");

      const data = {
        logical_quotion_rating: logicalQuotionRating,
        hackathons: hackathons,
        coding_skills_rating: codingSkillsRating,
        public_speaking_points: publicSpeakingPoints,
        self_learning_capability: selfLearningCapability,
        extra_courses_did: extraCourses,
        certifications: certifications,
        workshops: workshops,
        reading_writing_skills: readingAndWritingSkills,
        memory_capability_score: memoryCapabilityScore,
        interested_subjects: interestedSubjects,
        interested_career_area: interestedCareer,
        type_of_company_want_to_settle_in: typeOfCompanyWantToSettle,
        taken_inputs_from_seniors_or_elders: takeInputsFromSeniors,
        interested_type_of_books: interestedTypeOfBooks,
        management_or_technical: managementOrTechnical,
        hard_or_smart_worker: hardOrSmartWorker,
        worked_in_team: workedInTeam,
        introvert: introvert,
        suggested_job_role: "",
      };

      console.log(data);

      setIsLoading(true);

      if (careerDataIsAvailable) {
        try {
          const response = await updateCareerData(data);
          console.log(response);
          if (response.status === 200) {
            setSeverity('success');
            setMessage('Data updated successfully!');
          } else {
            setMessage('Something went wrong! ' + response.data.detail + ' ' + response.statusText);
            setSeverity('error');
          }
        } catch (error) {
          setSeverity('error');
          setMessage('Something went wrong ' + error);
        } finally {
          handleOpen();
          setIsLoading(false);
        }
      } else {
        try {
          const response = await sendCareerData(data);
          console.log(response);
          if (response.status === 201) {
            setSeverity('success');
            setMessage('Data saved successfully!');
            setCareerDataIsAvailable(true);
          } else {
            setMessage('Something went wrong! ' + response.data.detail + ' ' + response.statusText);
            setSeverity('error');
          }
        } catch (error) {
          setSeverity('error');
          setMessage('Something went wrong ' + error);
        } finally {
          handleOpen();
          setIsLoading(false);
        }
      }
    }
  };

  const styles = {
    chip: {
      marginRight: "8px",
      marginBottom: "8px",
    },
  };

  const chipData = [
    { id: 1, label: "Personal Details", target: "personal" },
    { id: 2, label: "School & Academic Details", target: "academics" },
    { id: 3, label: "Course Info", target: "course" },
  ];

  const [selectedChipId, setSelectedChipId] = useState(null);

  const handleChipClick = (chipId, target) => {
    setSelectedChipId(chipId);
    scroller.scrollTo(target, {
      duration: 1000,
      smooth: true,
      offset: -180 /* Replace with the height of your Navbar */,
    });
  };

  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const selfLearningCapabilityOptions = [
    { value: "Yes", label: "Yes" },
    { value: "No", label: "No" },
  ];

  const extraCoursesOptions = [
    { value: "Yes", label: "Yes" },
    { value: "No", label: "No" },
  ];

  const certificationsOptions = [
    { value: "machine learning", label: "Machine Learning" },
    { value: "information security", label: "Information Security" },
    { value: "app development", label: "App Development" },
    { value: "full stack", label: "Full Stack" },
    { value: "distro making", label: "Distro Making" },
    { value: "hadoop", label: "Hadoop" },
    { value: "r programming", label: "R Programming" },
    { value: "shell programming", label: "Shell Programming" },
    { value: "python", label: "Python" },
  ];

  const workshopsOptions = [
    { value: "cloud computing", label: "Cloud Computing" },
    { value: "web technologies", label: "Web Technologies" },
    { value: "data science", label: "Data Science" },
    { value: "hacking", label: "Hacking" },
    { value: "Testing", label: "Testing" },
    { value: "database security", label: "Database Security" },
    { value: "system designing", label: "System Designing" },
    { value: "game development", label: "Game Development" },
  ];

  const readingWritingSkillsOptions = [
    { value: "poor", label: "Poor" },
    { value: "medium", label: "Medium" },
    { value: "excellent", label: "Excellent" },
  ];

  const memoryCapabilityScoreOptions = [
    { value: "poor", label: "Poor" },
    { value: "medium", label: "Medium" },
    { value: "excellent", label: "Excellent" },
  ];
  const interestedSubjectsOptions = [
    { value: "programming", label: "Programming" },
    { value: "Software Engineering", label: "Software Engineering" },
    { value: "IOT", label: "IOT" },
    { value: "data engineering", label: "Data Engineering" },
    { value: "networks", label: "Networks" },
    { value: "hacking", label: "Hacking" },
    { value: "Management", label: "Management" },
    { value: "parallel computing", label: "Parallel Computing" },
    { value: "Computer Architecture", label: "Computer Architecture" },
    { value: "cloud computing", label: "Cloud Computing" },
  ];

  const interestedCareerAreaOptions = [
    { value: "developer", label: "Developer" },
    { value: "cloud computing", label: "Cloud Computing" },
    { value: "testing", label: "Testing" },
    { value: "security", label: "Security" },
    { value: "system developer", label: "System Developer" },
    { value: "Business process analyst", label: "Business Process Analyst" },
  ];

  const typeOfCompanyOptions = [
    { value: "product development", label: "Product Development" },
    { value: "Product based", label: "Product Based" },
    { value: "BPA", label: "BPA" },
    { value: "Web Services", label: "Web Services" },
    { value: "Service Based", label: "Service Based" },
    { value: "Finance", label: "Finance" },
    {
      value: "Testing and Maintenance Services",
      label: "Testing and Maintenance Services",
    },
    { value: "SAaS services", label: "SAaS Services" },
    { value: "Sales and Marketing", label: "Sales and Marketing" },
    { value: "Cloud Services", label: "Cloud Services" },
  ];

  const inputsFromSeniorsOptions = [
    { value: "No", label: "No" },
    { value: "Yes", label: "Yes" },
  ];

  const interestedBookTypesOptions = [
    { value: "Diaries", label: "Diaries" },
    { value: "Mystery", label: "Mystery" },
    { value: "Romance", label: "Romance" },
    { value: "Satire", label: "Satire" },
    { value: "Drama", label: "Drama" },
    { value: "Travel", label: "Travel" },
    { value: "Trilogy", label: "Trilogy" },
    { value: "Prayer books", label: "Prayer Books" },
    { value: "Art", label: "Art" },
    { value: "Series", label: "Series" },
    { value: "Self help", label: "Self Help" },
    { value: "Autobiographies", label: "Autobiographies" },
    { value: "Childrens", label: "Childrens" },
    { value: "History", label: "History" },
    { value: "Fantasy", label: "Fantasy" },
    { value: "Health", label: "Health" },
    { value: "Anthology", label: "Anthology" },
    { value: "Encyclopedias", label: "Encyclopedias" },
    { value: "Cookbooks", label: "Cookbooks" },
    { value: "Horror", label: "Horror" },
    { value: "Biographies", label: "Biographies" },
    { value: "Action and Adventure", label: "Action and Adventure" },
    { value: "Journals", label: "Journals" },
    { value: "Comics", label: "Comics" },
    { value: "Math", label: "Math" },
    { value: "Poetry", label: "Poetry" },
    { value: "Science fiction", label: "Science Fiction" },
    { value: "Dictionaries", label: "Dictionaries" },
    { value: "Science", label: "Science" },
    { value: "Guide", label: "Guide" },
    { value: "Religion-Spirituality", label: "Religion-Spirituality" },
  ];

  const managementOrTechnicalOptions = [
    { value: "Technical", label: "Technical" },
    { value: "Management", label: "Management" },
  ];

  const hardOrSmartWorkerOptions = [
    { value: "Smart worker", label: "Smart Worker" },
    { value: "Hard Worker", label: "Hard Worker" },
  ];

  const workedInTeamsOptions = [
    { value: "Yes", label: "Yes" },
    { value: "No", label: "No" },
  ];

  const introvertOptions = [
    { value: "No", label: "No" },
    { value: "Yes", label: "Yes" },
  ];

  return (
    <ThemeProvider theme={theme}>
      <Container
        style={{
          backgroundColor: "#121212",
          minHeight: " calc(100vh - 160px)",
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <CssBaseline />
        <Box>
          <Box
            position="fixed"
            top="80px" /* Replace with the height of your Navbar */
            color="white"
            width="1100px"
            margin="auto"
            zIndex={1000}
            sx={{ maxWidth: "100%" }}
          >
            <Tabs
              value={value}
              onChange={handleChange}
              centered
              sx={{ bgcolor: "background.paper" }}
            >
              <Tab label="Data for Marks Analysis" />
              <Tab label="Data for Career Analysis" />
            </Tabs>
          </Box>
          <TabPanel value={value} index={0}>
            {/* Content for Marks Analysis tab */}
            <Box
              position="fixed"
              top="128px" /* Replace with the height of your Navbar */
              color="white"
              textAlign="center"
              width="1100px"
              margin="auto"
              bgcolor="background.paper"
              zIndex={1000}
              sx={{ maxWidth: "100%", px: 2 }}
            >
              <Stack
                direction="row"
                spacing={1}
                sx={{ my: 2 }}
                justifyContent="center"
              >
                {chipData.map((chip) => (
                  <Chip
                    key={chip.id}
                    label={chip.label}
                    style={styles.chip}
                    onClick={() => handleChipClick(chip.id, chip.target)}
                    color={selectedChipId === chip.id ? "primary" : "default"}
                  />
                ))}
              </Stack>
            </Box>
            <div
              id="personal"
              style={{
                width: "100%",
                marginTop: "80px",
                padding: "24px 24px",
                maxWidth: "1100px",
              }}
            >
              <Typography variant="h5" align="center" color="textPrimary">
                Personal Details
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

              <FormControl
                fullWidth
                margin="normal"
              >
                <FormLabel component="legend" style={{ marginBottom: "8px" }}>
                  What is your gender?
                </FormLabel>
                <Select
                  labelId="dropdown-label"
                  id="dropdown"
                  value={sex}
                  onChange={handleSexChange}
                >
                  {genderOptions.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>


              <TextField
                label="Age"
                value={age}
                onChange={handleAgeChange}
                error={ageError} //To display error state for invalid input
                helperText={
                  ageError && "Please enter valid age. range: 18 - 26"
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

              <FormControl
                fullWidth
                margin="normal"
              >
                <FormLabel component="legend" style={{ marginBottom: "8px" }}>
                  What is your address type?
                </FormLabel>
                <Select
                  labelId="dropdown-label"
                  id="dropdown"
                  value={address}
                  onChange={handleAddressChange}
                >
                  {addressOptions.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>

              <FormControl
                fullWidth
                margin="normal"
              >
                <FormLabel component="legend" style={{ marginBottom: "8px" }}>
                  What is the size of your family?
                </FormLabel>
                <Select
                  labelId="dropdown-label"
                  id="dropdown"
                  value={familySize}
                  onChange={handleFamilySizeChange}
                >
                  {familySizeOptions.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>


              <FormControl
                fullWidth
                margin="normal"
              >
                <FormLabel component="legend" style={{ marginBottom: "8px" }}>
                  What is you parent's cohabitaion status?
                </FormLabel>
                <Select
                  labelId="dropdown-label"
                  id="dropdown"
                  value={parentsCohabitation}
                  onChange={handleParentsCohabitationChange}
                >
                  {parentStatusOptions.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>

              <FormControl
                fullWidth
                margin="normal"
              >
                <FormLabel component="legend" style={{ marginBottom: "8px" }}>
                  What is your mother's eduction level?
                </FormLabel>
                <Select
                  labelId="dropdown-label"
                  id="dropdown"
                  value={mothersEducation}
                  onChange={handleMothersEducationChange}
                >
                  {educationOptions.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>

              <FormControl
                fullWidth
                margin="normal"
              >
                <FormLabel component="legend" style={{ marginBottom: "8px" }}>
                  What is your father's eduction level?
                </FormLabel>
                <Select
                  labelId="dropdown-label"
                  id="dropdown"
                  value={fathersEducation}
                  onChange={handleFathersEducationChange}
                >
                  {educationOptions.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>

              <FormControl
                fullWidth
                margin="normal"
              >
                <FormLabel component="legend" style={{ marginBottom: "8px" }}>
                  What is your mother's job?
                </FormLabel>
                <Select
                  labelId="dropdown-label"
                  id="dropdown"
                  value={mothersJob}
                  onChange={handleMothersJobChange}
                >
                  {jobOptions.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>

              <FormControl
                fullWidth
                margin="normal"
              >
                <FormLabel component="legend" style={{ marginBottom: "8px" }}>
                  What is your father's job?
                </FormLabel>
                <Select
                  labelId="dropdown-label"
                  id="dropdown"
                  value={fathersJob}
                  onChange={handleFathersJobChange}
                >
                  {jobOptions.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>

            </div>

            <div
              id="academics"
              style={{
                width: "100%",
                padding: "24px 24px",
                maxWidth: "1100px",
              }}
            >
              <Typography variant="h5" align="center" color="textPrimary">
                School and Academics Details
              </Typography>
              <FormControl
                fullWidth
                margin="normal"
              >
                <FormLabel component="legend" style={{ marginBottom: "8px" }}>
                  What is your reason to choose your college?
                </FormLabel>
                <Select
                  labelId="dropdown-label"
                  id="dropdown"
                  value={reasonToJoinCollege}
                  onChange={handleReasonToJoinCollegeChange}
                >
                  {reasonOptions.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>


              <FormControl
                fullWidth
                margin="normal"
              >
                <FormLabel component="legend" style={{ marginBottom: "8px" }}>
                  Who is your guardian?
                </FormLabel>
                <Select
                  labelId="dropdown-label"
                  id="dropdown"
                  value={guardian}
                  onChange={handleGuardianChange}
                >
                  {guardianOptions.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>


              <FormControl
                fullWidth
                margin="normal"
              >
                <FormLabel component="legend" style={{ marginBottom: "8px" }}>
                  How much time does it take you to travel from home to college?
                </FormLabel>
                <Select
                  labelId="dropdown-label"
                  id="dropdown"
                  value={travelTime}
                  onChange={handleTravelTimeChange}
                >
                  {travelTimeOptions.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>


              <FormControl
                fullWidth
                margin="normal"
              >
                <FormLabel component="legend" style={{ marginBottom: "8px" }}>
                  How much time do you study weekly outside college?
                </FormLabel>
                <Select
                  labelId="dropdown-label"
                  id="dropdown"
                  value={studyTime}
                  onChange={handleStudyTimeChange}
                >
                  {studyTimeOptions.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </Select>
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

              <FormControl
                fullWidth
                margin="normal"
              >
                <FormLabel component="legend" style={{ marginBottom: "8px" }}>
                  Does your college supports you?
                </FormLabel>
                <Select
                  labelId="dropdown-label"
                  id="dropdown"
                  value={schoolSupport}
                  onChange={handleSchoolSupporChange}
                >
                  {yesNoOptions.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>

              <FormControl
                fullWidth
                margin="normal"
              >
                <FormLabel component="legend" style={{ marginBottom: "8px" }}>
                  Do you have support from you family?
                </FormLabel>
                <Select
                  labelId="dropdown-label"
                  id="dropdown"
                  value={familySupport}
                  onChange={handleFamilySupportChange}
                >
                  {yesNoOptions.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>

              <FormControl
                fullWidth
                margin="normal"
              >
                <FormLabel component="legend" style={{ marginBottom: "8px" }}>
                  Do you do any extra activities?
                </FormLabel>
                <Select
                  labelId="dropdown-label"
                  id="dropdown"
                  value={extraActivities}
                  onChange={handleExtraActivitiesChange}
                >
                  {yesNoOptions.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>

              <FormControl
                fullWidth
                margin="normal"
              >
                <FormLabel component="legend" style={{ marginBottom: "8px" }}>
                  Have you done nursery?
                </FormLabel>
                <Select
                  labelId="dropdown-label"
                  id="dropdown"
                  value={nursery}
                  onChange={handleNurseryChange}
                >
                  {yesNoOptions.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>

              <FormControl
                fullWidth
                margin="normal"
              >
                <FormLabel component="legend" style={{ marginBottom: "8px" }}>
                  Do have any plan for higher education?
                </FormLabel>
                <Select
                  labelId="dropdown-label"
                  id="dropdown"
                  value={higherEducation}
                  onChange={handleHigherEducationChange}
                >
                  {yesNoOptions.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>

              <FormControl
                fullWidth
                margin="normal"
              >
                <FormLabel component="legend" style={{ marginBottom: "8px" }}>
                  Do you have internet access?
                </FormLabel>
                <Select
                  labelId="dropdown-label"
                  id="dropdown"
                  value={internetAccess}
                  onChange={handleInternetAccessChange}
                >
                  {yesNoOptions.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>

              <FormControl
                fullWidth
                margin="normal"
              >
                <FormLabel component="legend" style={{ marginBottom: "8px" }}>
                  How would you rate your family relationship?
                </FormLabel>
                <Select
                  labelId="dropdown-label"
                  id="dropdown"
                  value={familyRelationship}
                  onChange={handleFamilyRelationshipChange}
                >
                  {veryBadToVeryGoodOptions.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>

              <FormControl
                fullWidth
                margin="normal"
              >
                <FormLabel component="legend" style={{ marginBottom: "8px" }}>
                  How much free time do you have after college?
                </FormLabel>
                <Select
                  labelId="dropdown-label"
                  id="dropdown"
                  value={freeTime}
                  onChange={handleFreeTimeChange}
                >
                  {veryLowToVeryHighOptions.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>

              <FormControl
                fullWidth
                margin="normal"
              >
                <FormLabel component="legend" style={{ marginBottom: "8px" }}>
                  How much time do you spend with your friends?
                </FormLabel>
                <Select
                  labelId="dropdown-label"
                  id="dropdown"
                  value={goOut}
                  onChange={handleGoOutChange}
                >
                  {veryRareToVeryFrequntOptions.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>

              <FormControl
                fullWidth
                margin="normal"
              >
                <FormLabel component="legend" style={{ marginBottom: "8px" }}>
                  How would you describe your health status?
                </FormLabel>
                <Select
                  labelId="dropdown-label"
                  id="dropdown"
                  value={health}
                  onChange={handleHealthChange}
                >
                  {veryBadToExcellentOptions.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>


              <FormControl
                fullWidth
                margin="normal"
              >
                <FormLabel component="legend" style={{ marginBottom: "8px" }}>
                  How would you describe your class participation in school:
                </FormLabel>
                <Select
                  labelId="dropdown-label"
                  id="dropdown"
                  value={classParticipation}
                  onChange={handleClassParticipationChange}
                >
                  {veryLowToVeryHighOptions.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>

              <FormControl
                fullWidth
                margin="normal"
              >
                <FormLabel component="legend" style={{ marginBottom: "8px" }}>
                  How much motivated are you to study?
                </FormLabel>
                <Select
                  labelId="dropdown-label"
                  id="dropdown"
                  value={motivation}
                  onChange={handleMotivationChange}
                >
                  {veryLowToVeryHighOptions.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>


              <FormControl
                fullWidth
                margin="normal"
              >
                <FormLabel component="legend" style={{ marginBottom: "8px" }}>
                  How much self-discipline do you have?
                </FormLabel>
                <Select
                  labelId="dropdown-label"
                  id="dropdown"
                  value={selfDiscipline}
                  onChange={handleSelfDisciplineChange}
                >
                  {veryLowToVeryHighOptions.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>


              <FormControl
                fullWidth
                margin="normal"
              >
                <FormLabel component="legend" style={{ marginBottom: "8px" }}>
                  How would you describe the quality of teacher in your school?
                </FormLabel>
                <Select
                  labelId="dropdown-label"
                  id="dropdown"
                  value={teacherQuality}
                  onChange={handleTeacherQualityChange}
                >
                  {veryBadToVeryGoodOptions.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>

              <FormControl
                fullWidth
                margin="normal"
              >
                <FormLabel component="legend" style={{ marginBottom: "8px" }}>
                  How would you describe your time management skills?
                </FormLabel>
                <Select
                  labelId="dropdown-label"
                  id="dropdown"
                  value={timeManagement}
                  onChange={handleTimeManagementChange}
                >
                  {veryBadToExcellentOptions.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>

              <FormControl
                fullWidth
                margin="normal"
              >
                <FormLabel component="legend" style={{ marginBottom: "8px" }}>
                  How much you feel influenced by your peers in your studies:
                </FormLabel>
                <Select
                  labelId="dropdown-label"
                  id="dropdown"
                  value={peerInfluence}
                  onChange={handlePeerInfluenceChange}
                >
                  {veryNegativeToVeryPositiveOptions.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>

              <FormControl
                fullWidth
                margin="normal"
              >
                <FormLabel component="legend" style={{ marginBottom: "8px" }}>
                  How would you describe involvemnt of your parents in your studies:
                </FormLabel>
                <Select
                  labelId="dropdown-label"
                  id="dropdown"
                  value={parentalInvolvement}
                  onChange={handleParentalInvolvementChange}
                >
                  {veryBadToVeryGoodOptions.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>

              <FormControl
                fullWidth
                margin="normal"
              >
                <FormLabel component="legend" style={{ marginBottom: "8px" }}>
                  How would you describe teacher relation with students in your school:
                </FormLabel>
                <Select
                  labelId="dropdown-label"
                  id="dropdown"
                  value={teacherStudentRelationship}
                  onChange={handleTeacherStudentRelationshipChange}
                >
                  {veryBadToExcellentOptions.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>

              <FormControl
                fullWidth
                margin="normal"
              >
                <FormLabel component="legend" style={{ marginBottom: "8px" }}>
                  How would you describe your stress level during studies:
                </FormLabel>
                <Select
                  labelId="dropdown-label"
                  id="dropdown"
                  value={stressLevel}
                  onChange={handleStressLevelChange}
                >
                  {veryLowToVeryHighOptions.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>

              <FormControl
                fullWidth
                margin="normal"
              >
                <FormLabel component="legend" style={{ marginBottom: "8px" }}>
                  How would you describe your mental health during studies:
                </FormLabel>
                <Select
                  labelId="dropdown-label"
                  id="dropdown"
                  value={mentalHealth}
                  onChange={handleMentalHealthChange}
                >
                  {veryBadToExcellentOptions.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>

              <FormControl
                fullWidth
                margin="normal"
              >
                <FormLabel component="legend" style={{ marginBottom: "8px" }}>
                  How would you describe your goal setting during studies:
                </FormLabel>
                <Select
                  labelId="dropdown-label"
                  id="dropdown"
                  value={goalsSetting}
                  onChange={handleGoalsSettingChange}
                >
                  {veryBadToExcellentOptions.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>

              <FormControl
                fullWidth
                margin="normal"
              >
                <FormLabel component="legend" style={{ marginBottom: "8px" }}>
                  How much learning resources are available to you:
                </FormLabel>
                <Select
                  labelId="dropdown-label"
                  id="dropdown"
                  value={learningResources}
                  onChange={handleLearningResourcesChange}
                >
                  {veryInsufficientToVerySufficientOptions.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>

              <FormControl
                fullWidth
                margin="normal"
              >
                <FormLabel component="legend" style={{ marginBottom: "8px" }}>
                  How often do you go for group studies:
                </FormLabel>
                <Select
                  labelId="dropdown-label"
                  id="dropdown"
                  value={groupStudy}
                  onChange={handleGroupStudyChange}
                >
                  {neverToAlwaysOptions.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>

              <FormControl
                fullWidth
                margin="normal"
              >
                <FormLabel component="legend" style={{ marginBottom: "8px" }}>
                  How would you describe your interest in subjects:
                </FormLabel>
                <Select
                  labelId="dropdown-label"
                  id="dropdown"
                  value={subjectInterest}
                  onChange={handleSubjectInterestChange}
                >
                  {veryLowToVeryHighOptions.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>

              <FormControl
                fullWidth
                margin="normal"
              >
                <FormLabel component="legend" style={{ marginBottom: "8px" }}>
                  How would you describe classroom environment:
                </FormLabel>
                <Select
                  labelId="dropdown-label"
                  id="dropdown"
                  value={classroomEnvironment}
                  onChange={handleClassroomEnvironmentChange}
                >
                  {veryBadToExcellentOptions.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>

              <FormControl
                fullWidth
                margin="normal"
              >
                <FormLabel component="legend" style={{ marginBottom: "8px" }}>
                  How would you describe your preparation for exams:
                </FormLabel>
                <Select
                  labelId="dropdown-label"
                  id="dropdown"
                  value={testPreparation}
                  onChange={handleTestPreparationChange}
                >
                  {veryBadToExcellentOptions.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>

              <FormControl
                fullWidth
                margin="normal"
              >
                <FormLabel component="legend" style={{ marginBottom: "8px" }}>
                  How would you describe workload of your course:
                </FormLabel>
                <Select
                  labelId="dropdown-label"
                  id="dropdown"
                  value={workload}
                  onChange={handleWorkloadChange}
                >
                  {veryLightToVeryHeavyOptions.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>

              <TextField
                label="Attendance Rate (%)"
                value={attendanceRate}
                onChange={handleAttendanceRateChange}
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

              <TextField
                label="Time spent on study (hours/week)"
                value={timeSpentOnHomework}
                onChange={handleTimeSpentOnHomeworkChange}
                error={failuresError} //To display error state for invalid input
                helperText={
                  failuresError && "Please enter time spent on homework"
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

              <TextField
                label="Time spent on extra curricular activity (hours/week)"
                value={timeSpentOnExtraActivities}
                onChange={handleTimeSpentOnExtraActivitiesChange}
                error={failuresError} //To display error state for invalid input
                helperText={
                  failuresError &&
                  "Please enter time spent on extra curricular activity"
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
            </div>

            <div
              id="course"
              style={{
                width: "100%",
                padding: "24px 24px",
                maxWidth: "1100px",
              }}
            >
              <Typography variant="h5" align="center" color="textPrimary">
                Course Information
              </Typography>
              <TextField
                label="Degree (short form)"
                value={degree}
                onChange={handleDegreeChange}
                error={failuresError} //To display error state for invalid input
                helperText={failuresError && "Please enter a degree"} //helper text to show when there's an error.
                fullWidth
                margin="normal"
                FormHelperTextProps={{
                  sx: {
                    position: "absolute",
                    top: "100%",
                  },
                }}
                type="text"
              />

              <TextField
                label="Semester Number"
                value={semester}
                onChange={handleSemesterChange}
                error={failuresError} //To display error state for invalid input
                helperText={failuresError && "Please enter semester"} //helper text to show when there's an error.
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

              <TextField
                label="Subjects of this semester seprated with coma ','"
                value={subject}
                onChange={handleSubjectChange}
                error={failuresError} //To display error state for invalid input
                helperText={failuresError && "Please enter subjects"} //helper text to show when there's an error.
                fullWidth
                margin="normal"
                FormHelperTextProps={{
                  sx: {
                    position: "absolute",
                    top: "100%",
                  },
                }}
                type="text"
              />

              <TextField
                label="Subjects Code of this semester seprated with coma ','"
                value={subjectCode}
                onChange={handleSubjectCodeChange}
                error={failuresError} //To display error state for invalid input
                helperText={failuresError && "Please enter subjects code"} //helper text to show when there's an error.
                fullWidth
                margin="normal"
                FormHelperTextProps={{
                  sx: {
                    position: "absolute",
                    top: "100%",
                  },
                }}
                type="text"
              />

              <TextField
                label="Mid Semester Marks of each subject seprated with coma ',' (out of 30)"
                value={midSemMarks}
                onChange={handleMidSemMarksChange}
                error={failuresError} //To display error state for invalid input
                helperText={
                  failuresError && "Please enter a mid semester marks"
                } //helper text to show when there's an error.
                fullWidth
                margin="normal"
                FormHelperTextProps={{
                  sx: {
                    position: "absolute",
                    top: "100%",
                  },
                }}
                type="text"
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
                {isLoading ? <CircularProgress size={24} /> : 'Save'}
              </Button>
            </div>
          </TabPanel>
          <TabPanel value={value} index={1}>
            {/* Content for Marks Analysis tab */}

            <div
              id="personal"
              style={{
                width: "100%",
                marginTop: "60px",
                padding: "24px 24px",
                maxWidth: "1100px",
              }}
            >
              <Typography variant="h5" align="center" color="textPrimary">
                Carrer Related Details
              </Typography>

              <FormControl
                fullWidth
                style={{
                  marginTop: "16px",
                }}
              >
                <FormLabel component="legend">
                  On a scale of 1 to 9, how would you rate your ability to
                  reason logically and think critically?
                </FormLabel>
                <Slider
                  id="slider"
                  defaultValue={logicalQuotionRating}
                  valueLabelDisplay="auto"
                  step={1}
                  marks
                  onChange={handleLogicalQuotionRatingChange}
                  min={1}
                  max={9}
                />
              </FormControl>

              <FormControl
                fullWidth
                style={{
                  marginTop: "16px",
                }}
              >
                <FormLabel component="legend">
                  How many hackathons have you participated in?
                </FormLabel>
                <Slider
                  id="slider"
                  defaultValue={hackathons}
                  valueLabelDisplay="auto"
                  step={1}
                  marks
                  onChange={handleHackathonsChange}
                  min={1}
                  max={9}
                />
              </FormControl>

              <FormControl
                fullWidth
                style={{
                  marginTop: "16px",
                }}
              >
                <FormLabel component="legend">
                  On a scale of 1 to 9, how would you rate your coding ability?
                </FormLabel>
                <Slider
                  id="slider"
                  defaultValue={codingSkillsRating}
                  valueLabelDisplay="auto"
                  step={1}
                  marks
                  onChange={handleCodingSkillsRatingChange}
                  min={1}
                  max={9}
                />
              </FormControl>

              <FormControl
                fullWidth
                style={{
                  marginTop: "16px",
                }}
                h
              >
                <FormLabel component="legend">
                  On a scale of 1 to 9, how confident are you in your ability to
                  give a public speech?
                </FormLabel>
                <Slider
                  id="slider"
                  defaultValue={0}
                  valueLabelDisplay="auto"
                  step={1}
                  onChange={publicSpeakingPoints}
                  marks
                  min={1}
                  max={9}
                />
              </FormControl>

              <FormControl
                fullWidth
                style={{
                  marginTop: "16px",
                }}
              >
                <FormLabel component="legend">
                  Would you describe yourself as someone who is capable of
                  learning new skills on your own?
                </FormLabel>
                <Select
                  labelId="dropdown-label"
                  id="dropdown"
                  value={selfLearningCapability}
                  onChange={handleSelfLearningCapabilityChange}
                >
                  {selfLearningCapabilityOptions.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>

              <FormControl
                fullWidth
                style={{
                  marginTop: "16px",
                }}
              >
                <FormLabel component="legend">
                  Have you taken any extra courses outside of your formal
                  education?
                </FormLabel>
                <Select
                  labelId="dropdown-label"
                  id="dropdown"
                  value={extraCourses}
                  onChange={handleExtraCoursesChange}
                >
                  {extraCoursesOptions.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>

              <FormControl
                fullWidth
                style={{
                  marginTop: "16px",
                }}
              >
                <FormLabel component="legend">
                  Have you earned any certifications in any of the following
                  areas?
                </FormLabel>
                <Select
                  labelId="dropdown-label"
                  id="dropdown"
                  value={certifications}
                  onChange={handleCertificationsChange}
                >
                  {certificationsOptions.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>

              <FormControl
                fullWidth
                style={{
                  marginTop: "16px",
                }}
              >
                <FormLabel component="legend">
                  Have you attended any workshops in any of the following areas?
                </FormLabel>
                <Select
                  labelId="dropdown-label"
                  id="dropdown"
                  value={workshops}
                  onChange={handleWorkshopsChange}
                >
                  {workshopsOptions.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>

              <FormControl
                fullWidth
                style={{
                  marginTop: "16px",
                }}
              >
                <FormLabel component="legend">
                  How would you rate your proficiency in reading and writing?
                </FormLabel>
                <Select
                  labelId="dropdown-label"
                  id="dropdown"
                  value={readingAndWritingSkills}
                  onChange={handleReadingAndWritingSkillsChange}
                >
                  {readingWritingSkillsOptions.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>

              <FormControl
                fullWidth
                style={{
                  marginTop: "16px",
                }}
              >
                <FormLabel component="legend">
                  How would you rate your ability to remember things?
                </FormLabel>
                <Select
                  labelId="dropdown-label"
                  id="dropdown"
                  value={memoryCapabilityScore}
                  onChange={handleMemoryCapabilityScoreChange}
                >
                  {memoryCapabilityScoreOptions.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>

              <FormControl
                fullWidth
                style={{
                  marginTop: "16px",
                }}
              >
                <FormLabel component="legend">
                  Which of the following subject are you interested in studying
                  or pursuing as a career?
                </FormLabel>
                <Select
                  labelId="dropdown-label"
                  id="dropdown"
                  value={interestedSubjects}
                  onChange={handleInterestedSubjectsChange}
                >
                  {interestedSubjectsOptions.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>

              <FormControl
                fullWidth
                style={{
                  marginTop: "16px",
                }}
              >
                <FormLabel component="legend">
                  Which of the following career areas are you most interested in
                  pursuing?
                </FormLabel>
                <Select
                  labelId="dropdown-label"
                  id="dropdown"
                  value={interestedCareer}
                  onChange={handleInterestedCareerChange}
                >
                  {interestedCareerAreaOptions.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>

              <FormControl
                fullWidth
                style={{
                  marginTop: "16px",
                }}
              >
                <FormLabel component="legend">
                  What type of company are you most interested in working for?
                </FormLabel>
                <Select
                  labelId="dropdown-label"
                  id="dropdown"
                  value={typeOfCompanyWantToSettle}
                  onChange={handleTypeOfCompanyWantToSettleChange}
                >
                  {typeOfCompanyOptions.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>

              <FormControl
                fullWidth
                style={{
                  marginTop: "16px",
                }}
              >
                <FormLabel component="legend">
                  Have you received any advice or guidance from seniors or
                  elders in your field?
                </FormLabel>
                <Select
                  labelId="dropdown-label"
                  id="dropdown"
                  value={takeInputsFromSeniors}
                  onChange={handleTakeInputsFromSeniorsChange}
                >
                  {inputsFromSeniorsOptions.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>

              <FormControl
                fullWidth
                style={{
                  marginTop: "16px",
                }}
              >
                <FormLabel component="legend">
                  What type of books do you enjoy reading or would you be
                  interested in reading in the future?
                </FormLabel>
                <Select
                  labelId="dropdown-label"
                  id="dropdown"
                  value={interestedTypeOfBooks}
                  onChange={handleInterestedTypeOfBooksChange}
                >
                  {interestedBookTypesOptions.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>

              <FormControl
                fullWidth
                style={{
                  marginTop: "16px",
                }}
              >
                <FormLabel component="legend">
                  Which of the following do you see yourself pursuing as a
                  career?
                </FormLabel>
                <Select
                  labelId="dropdown-label"
                  id="dropdown"
                  value={managementOrTechnical}
                  onChange={handleManagementOrTechnicalChange}
                >
                  {managementOrTechnicalOptions.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>

              <FormControl
                fullWidth
                style={{
                  marginTop: "16px",
                }}
              >
                <FormLabel component="legend">
                  Would you describe yourself as a hard worker or a smart
                  worker?
                </FormLabel>
                <Select
                  labelId="dropdown-label"
                  id="dropdown"
                  value={hardOrSmartWorker}
                  onChange={handleHardOrSmartWorkerChange}
                >
                  {hardOrSmartWorkerOptions.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>

              <FormControl
                fullWidth
                style={{
                  marginTop: "16px",
                }}
              >
                <FormLabel component="legend">
                  Have you ever worked in a team on a project or task?
                </FormLabel>
                <Select
                  labelId="dropdown-label"
                  id="dropdown"
                  value={workedInTeam}
                  onChange={handleWorkedInTeamChange}
                >
                  {workedInTeamsOptions.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>

              <FormControl
                fullWidth
                style={{
                  marginTop: "16px",
                }}
              >
                <FormLabel component="legend">
                  Would you describe yourself as an introvert?
                </FormLabel>
                <Select
                  labelId="dropdown-label"
                  id="dropdown"
                  value={introvert}
                  onChange={handleIntrovertChange}
                >
                  {introvertOptions.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>

              <Button
                variant="contained"
                color="primary"
                onClick={(event) => {
                  handleSubmitCareer(event);
                }}
                fullWidth
                disabled={isLoading} // disable the button while loading
                sx={{ marginTop: "16px" }}
              >
                {isLoading ? <CircularProgress size={24} /> : 'Save'}
              </Button>
            </div>
          </TabPanel>
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
};

export default Profile;
