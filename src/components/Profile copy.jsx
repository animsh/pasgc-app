import React, { useState } from "react";
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
  };

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
      validateIntrovert() &&
      validateSuggestedJobRole()
    ) {
      return true;
    }
    return false;
  };

  const handleSubmitCareer = (e) => {
    e.preventDefault();
    if (validateAll()) {
      console.log("All validations passed");
    }
  };

  const options = [
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" },
  ];

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
      duration: 500,
      smooth: true,
      offset: -140 /* Replace with the height of your Navbar */,
    });
  };

  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const selfLearningCapabilityOptions = [
    { value: "yes", label: "Yes" },
    { value: "no", label: "No" },
  ];

  const extraCoursesOptions = [
    { value: "yes", label: "Yes" },
    { value: "no", label: "No" },
  ];

  const certificationsOptions = [
    { value: "machine learning", label: "Machine Learning" },
    { value: "information security", label: "Information Security" },
    { value: "app development", label: "App Development" },
    { value: "full stack", label: "Full Stack" },
    { value: "None", label: "None" },
    { value: "distro making", label: "Distro Making" },
    { value: "hadoop", label: "Hadoop" },
    { value: "r programming", label: "R Programming" },
    { value: "shell programming", label: "Shell Programming" },
    { value: "python", label: "Python" },
  ];

  const workshopsOptions = [
    { value: "cloud computing", label: "Cloud Computing" },
    { value: "web technologies", label: "Web Technologies" },
    { value: "None", label: "None" },
    { value: "data science", label: "Data Science" },
    { value: "hacking", label: "Hacking" },
    { value: "testing", label: "Testing" },
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
    { value: "None", label: "None" },
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
    { value: "None", label: "None" },
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
    { value: "None", label: "None" },
    {
      value: "Testing and Maintenance Services",
      label: "Testing and Maintenance Services",
    },
    { value: "SAaS services", label: "SAaS Services" },
    { value: "Sales and Marketing", label: "Sales and Marketing" },
    { value: "Cloud Services", label: "Cloud Services" },
  ];

  const inputsFromSeniorsOptions = [
    { value: "no", label: "No" },
    { value: "yes", label: "Yes" },
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
    { value: "smart worker", label: "Smart Worker" },
    { value: "hard worker", label: "Hard Worker" },
  ];

  const workedInTeamsOptions = [
    { value: "yes", label: "Yes" },
    { value: "no", label: "No" },
  ];

  const introvertOptions = [
    { value: "no", label: "No" },
    { value: "yes", label: "Yes" },
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
            sx={{ maxWidth: "100%", px: 2 }}
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
              top="130px" /* Replace with the height of your Navbar */
              color="white"
              textAlign="center"
              width="1100px"
              margin="auto"
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
                marginTop: "60px",
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
                <FormLabel component="legend">
                  Mother's Education Level:
                </FormLabel>
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
                <FormLabel component="legend">
                  Father's Education Level:
                </FormLabel>
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
                <RadioGroup
                  row
                  value={guardian}
                  onChange={handleGuardianChange}
                >
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
                <RadioGroup
                  row
                  value={studyTime}
                  onChange={handleStudyTimeChange}
                >
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

              <FormControl component="fieldset" fullWidth margin="normal">
                <FormLabel component="legend">
                  Do you have school/college support:
                </FormLabel>
                <RadioGroup
                  row
                  value={schoolSupport}
                  onChange={handleSchoolSupporChange}
                >
                  <FormControlLabel
                    value="yes"
                    control={<Radio color="primary" />}
                    label="Yes"
                  />
                  <FormControlLabel
                    value="no"
                    control={<Radio color="primary" />}
                    label="No"
                  />
                </RadioGroup>
              </FormControl>

              <FormControl component="fieldset" fullWidth margin="normal">
                <FormLabel component="legend">
                  Do you hvae family support:
                </FormLabel>
                <RadioGroup
                  row
                  value={familySupport}
                  onChange={handleFamilySupportChange}
                >
                  <FormControlLabel
                    value="yes"
                    control={<Radio color="primary" />}
                    label="Yes"
                  />
                  <FormControlLabel
                    value="no"
                    control={<Radio color="primary" />}
                    label="No"
                  />
                </RadioGroup>
              </FormControl>

              <FormControl component="fieldset" fullWidth margin="normal">
                <FormLabel component="legend">
                  Do you do any extra activity:
                </FormLabel>
                <RadioGroup
                  row
                  value={extraActivities}
                  onChange={handleExtraActivitiesChange}
                >
                  <FormControlLabel
                    value="yes"
                    control={<Radio color="primary" />}
                    label="Yes"
                  />
                  <FormControlLabel
                    value="no"
                    control={<Radio color="primary" />}
                    label="No"
                  />
                </RadioGroup>
              </FormControl>

              <FormControl component="fieldset" fullWidth margin="normal">
                <FormLabel component="legend">Have you done nursery:</FormLabel>
                <RadioGroup row value={nursery} onChange={handleNurseryChange}>
                  <FormControlLabel
                    value="yes"
                    control={<Radio color="primary" />}
                    label="Yes"
                  />
                  <FormControlLabel
                    value="no"
                    control={<Radio color="primary" />}
                    label="No"
                  />
                </RadioGroup>
              </FormControl>

              <FormControl component="fieldset" fullWidth margin="normal">
                <FormLabel component="legend">
                  Do you want to pursue higher education:
                </FormLabel>
                <RadioGroup
                  row
                  value={higherEducation}
                  onChange={handleHigherEducationChange}
                >
                  <FormControlLabel
                    value="yes"
                    control={<Radio color="primary" />}
                    label="Yes"
                  />
                  <FormControlLabel
                    value="no"
                    control={<Radio color="primary" />}
                    label="No"
                  />
                </RadioGroup>
              </FormControl>

              <FormControl component="fieldset" fullWidth margin="normal">
                <FormLabel component="legend">
                  Do you have access to the internet:
                </FormLabel>
                <RadioGroup
                  row
                  value={internetAccess}
                  onChange={handleInternetAccessChange}
                >
                  <FormControlLabel
                    value="yes"
                    control={<Radio color="primary" />}
                    label="Yes"
                  />
                  <FormControlLabel
                    value="no"
                    control={<Radio color="primary" />}
                    label="No"
                  />
                </RadioGroup>
              </FormControl>

              <FormControl component="fieldset" fullWidth margin="normal">
                <FormLabel component="legend">
                  How would you describe your relationship with your family:
                </FormLabel>
                <RadioGroup
                  row
                  value={familyRelationship}
                  onChange={handleFamilyRelationshipChange}
                >
                  <FormControlLabel
                    value="1"
                    control={<Radio color="primary" />}
                    label="Very Bad"
                  />
                  <FormControlLabel
                    value="2"
                    control={<Radio color="primary" />}
                    label="Bad"
                  />
                  <FormControlLabel
                    value="3"
                    control={<Radio color="primary" />}
                    label="Neutral"
                  />
                  <FormControlLabel
                    value="4"
                    control={<Radio color="primary" />}
                    label="Good"
                  />
                  <FormControlLabel
                    value="5"
                    control={<Radio color="primary" />}
                    label="Very Good"
                  />
                </RadioGroup>
              </FormControl>

              <FormControl component="fieldset" fullWidth margin="normal">
                <FormLabel component="legend">
                  How much free time do you have after school:
                </FormLabel>
                <RadioGroup
                  row
                  value={freeTime}
                  onChange={handleFreeTimeChange}
                >
                  <FormControlLabel
                    value="1"
                    control={<Radio color="primary" />}
                    label="Very Low"
                  />
                  <FormControlLabel
                    value="2"
                    control={<Radio color="primary" />}
                    label="Low"
                  />
                  <FormControlLabel
                    value="3"
                    control={<Radio color="primary" />}
                    label="Average"
                  />
                  <FormControlLabel
                    value="4"
                    control={<Radio color="primary" />}
                    label="High"
                  />
                  <FormControlLabel
                    value="5"
                    control={<Radio color="primary" />}
                    label="Very High"
                  />
                </RadioGroup>
              </FormControl>

              <FormControl component="fieldset" fullWidth margin="normal">
                <FormLabel component="legend">
                  How much you go out with your friends:
                </FormLabel>
                <RadioGroup row value={goOut} onChange={handleGoOutChange}>
                  <FormControlLabel
                    value="1"
                    control={<Radio color="primary" />}
                    label="Very Rarely"
                  />
                  <FormControlLabel
                    value="2"
                    control={<Radio color="primary" />}
                    label="Rarely"
                  />
                  <FormControlLabel
                    value="3"
                    control={<Radio color="primary" />}
                    label="Occasionally"
                  />
                  <FormControlLabel
                    value="4"
                    control={<Radio color="primary" />}
                    label="Freuently"
                  />
                  <FormControlLabel
                    value="5"
                    control={<Radio color="primary" />}
                    label="Very Freuently"
                  />
                </RadioGroup>
              </FormControl>

              <FormControl component="fieldset" fullWidth margin="normal">
                <FormLabel component="legend">
                  How would you describe your health status:
                </FormLabel>
                <RadioGroup row value={health} onChange={handleHealthChange}>
                  <FormControlLabel
                    value="1"
                    control={<Radio color="primary" />}
                    label="Very Bad"
                  />
                  <FormControlLabel
                    value="2"
                    control={<Radio color="primary" />}
                    label="Bad"
                  />
                  <FormControlLabel
                    value="3"
                    control={<Radio color="primary" />}
                    label="Fair"
                  />
                  <FormControlLabel
                    value="4"
                    control={<Radio color="primary" />}
                    label="Good"
                  />
                  <FormControlLabel
                    value="5"
                    control={<Radio color="primary" />}
                    label="Excellent"
                  />
                </RadioGroup>
              </FormControl>

              <FormControl component="fieldset" fullWidth margin="normal">
                <FormLabel component="legend">
                  How would you describe your class participation in school:
                </FormLabel>
                <RadioGroup
                  row
                  value={classParticipation}
                  onChange={handleClassParticipationChange}
                >
                  <FormControlLabel
                    value="1"
                    control={<Radio color="primary" />}
                    label="Very Low"
                  />
                  <FormControlLabel
                    value="2"
                    control={<Radio color="primary" />}
                    label="Low"
                  />
                  <FormControlLabel
                    value="3"
                    control={<Radio color="primary" />}
                    label="Average"
                  />
                  <FormControlLabel
                    value="4"
                    control={<Radio color="primary" />}
                    label="High"
                  />
                  <FormControlLabel
                    value="5"
                    control={<Radio color="primary" />}
                    label="Very High"
                  />
                </RadioGroup>
              </FormControl>

              <FormControl component="fieldset" fullWidth margin="normal">
                <FormLabel component="legend">
                  How much motivated are you to study:
                </FormLabel>
                <RadioGroup
                  row
                  value={motivation}
                  onChange={handleMotivationChange}
                >
                  <FormControlLabel
                    value="1"
                    control={<Radio color="primary" />}
                    label="Very Low"
                  />
                  <FormControlLabel
                    value="2"
                    control={<Radio color="primary" />}
                    label="Low"
                  />
                  <FormControlLabel
                    value="3"
                    control={<Radio color="primary" />}
                    label="Average"
                  />
                  <FormControlLabel
                    value="4"
                    control={<Radio color="primary" />}
                    label="High"
                  />
                  <FormControlLabel
                    value="5"
                    control={<Radio color="primary" />}
                    label="Very High"
                  />
                </RadioGroup>
              </FormControl>

              <FormControl component="fieldset" fullWidth margin="normal">
                <FormLabel component="legend">
                  How much self-discipline do you have:
                </FormLabel>
                <RadioGroup
                  row
                  value={selfDiscipline}
                  onChange={handleSelfDisciplineChange}
                >
                  <FormControlLabel
                    value="1"
                    control={<Radio color="primary" />}
                    label="Very Low"
                  />
                  <FormControlLabel
                    value="2"
                    control={<Radio color="primary" />}
                    label="Low"
                  />
                  <FormControlLabel
                    value="3"
                    control={<Radio color="primary" />}
                    label="Average"
                  />
                  <FormControlLabel
                    value="4"
                    control={<Radio color="primary" />}
                    label="High"
                  />
                  <FormControlLabel
                    value="5"
                    control={<Radio color="primary" />}
                    label="Very High"
                  />
                </RadioGroup>
              </FormControl>

              <FormControl component="fieldset" fullWidth margin="normal">
                <FormLabel component="legend">
                  How would you describe the quality of teacher in your school:
                </FormLabel>
                <RadioGroup
                  row
                  value={teacherQuality}
                  onChange={handleTeacherQualityChange}
                >
                  <FormControlLabel
                    value="1"
                    control={<Radio color="primary" />}
                    label="Very Poor"
                  />
                  <FormControlLabel
                    value="2"
                    control={<Radio color="primary" />}
                    label="Poor"
                  />
                  <FormControlLabel
                    value="3"
                    control={<Radio color="primary" />}
                    label="Average"
                  />
                  <FormControlLabel
                    value="4"
                    control={<Radio color="primary" />}
                    label="Good"
                  />
                  <FormControlLabel
                    value="5"
                    control={<Radio color="primary" />}
                    label="Excellent"
                  />
                </RadioGroup>
              </FormControl>

              <FormControl component="fieldset" fullWidth margin="normal">
                <FormLabel component="legend">
                  How would you describe your time management skills:
                </FormLabel>
                <RadioGroup
                  row
                  value={timeManagement}
                  onChange={handleTimeManagementChange}
                >
                  <FormControlLabel
                    value="1"
                    control={<Radio color="primary" />}
                    label="Very Poor"
                  />
                  <FormControlLabel
                    value="2"
                    control={<Radio color="primary" />}
                    label="Poor"
                  />
                  <FormControlLabel
                    value="3"
                    control={<Radio color="primary" />}
                    label="Average"
                  />
                  <FormControlLabel
                    value="4"
                    control={<Radio color="primary" />}
                    label="Good"
                  />
                  <FormControlLabel
                    value="5"
                    control={<Radio color="primary" />}
                    label="Excellent"
                  />
                </RadioGroup>
              </FormControl>

              <FormControl component="fieldset" fullWidth margin="normal">
                <FormLabel component="legend">
                  How much you feel influenced by your peers in your studies:
                </FormLabel>
                <RadioGroup
                  row
                  value={peerInfluence}
                  onChange={handlePeerInfluenceChange}
                >
                  <FormControlLabel
                    value="1"
                    control={<Radio color="primary" />}
                    label="Very Negative"
                  />
                  <FormControlLabel
                    value="2"
                    control={<Radio color="primary" />}
                    label="Negative"
                  />
                  <FormControlLabel
                    value="3"
                    control={<Radio color="primary" />}
                    label="Neutral"
                  />
                  <FormControlLabel
                    value="4"
                    control={<Radio color="primary" />}
                    label="Positive"
                  />
                  <FormControlLabel
                    value="5"
                    control={<Radio color="primary" />}
                    label="Very Positive"
                  />
                </RadioGroup>
              </FormControl>

              <FormControl component="fieldset" fullWidth margin="normal">
                <FormLabel component="legend">
                  How would you describe involvemnt of your parents in your
                  studies:
                </FormLabel>
                <RadioGroup
                  row
                  value={timeManagement}
                  onChange={handleTimeManagementChange}
                >
                  <FormControlLabel
                    value="1"
                    control={<Radio color="primary" />}
                    label="Very Low"
                  />
                  <FormControlLabel
                    value="2"
                    control={<Radio color="primary" />}
                    label="Low"
                  />
                  <FormControlLabel
                    value="3"
                    control={<Radio color="primary" />}
                    label="Average"
                  />
                  <FormControlLabel
                    value="4"
                    control={<Radio color="primary" />}
                    label="High"
                  />
                  <FormControlLabel
                    value="5"
                    control={<Radio color="primary" />}
                    label="Very High"
                  />
                </RadioGroup>
              </FormControl>

              <FormControl component="fieldset" fullWidth margin="normal">
                <FormLabel component="legend">
                  How would you describe teacher relation with students in your
                  school:
                </FormLabel>
                <RadioGroup
                  row
                  value={teacherStudentRelationship}
                  onChange={handleTeacherStudentRelationshipChange}
                >
                  <FormControlLabel
                    value="1"
                    control={<Radio color="primary" />}
                    label="Very Poor"
                  />
                  <FormControlLabel
                    value="2"
                    control={<Radio color="primary" />}
                    label="Poor"
                  />
                  <FormControlLabel
                    value="3"
                    control={<Radio color="primary" />}
                    label="Average"
                  />
                  <FormControlLabel
                    value="4"
                    control={<Radio color="primary" />}
                    label="Good"
                  />
                  <FormControlLabel
                    value="5"
                    control={<Radio color="primary" />}
                    label="Excellent"
                  />
                </RadioGroup>
              </FormControl>

              <FormControl component="fieldset" fullWidth margin="normal">
                <FormLabel component="legend">
                  How would you describe your stress level during studies:
                </FormLabel>
                <RadioGroup
                  row
                  value={stressLevel}
                  onChange={handleStressLevelChange}
                >
                  <FormControlLabel
                    value="1"
                    control={<Radio color="primary" />}
                    label="Very Low"
                  />
                  <FormControlLabel
                    value="2"
                    control={<Radio color="primary" />}
                    label="Low"
                  />
                  <FormControlLabel
                    value="3"
                    control={<Radio color="primary" />}
                    label="Moderate"
                  />
                  <FormControlLabel
                    value="4"
                    control={<Radio color="primary" />}
                    label="High"
                  />
                  <FormControlLabel
                    value="5"
                    control={<Radio color="primary" />}
                    label="Very High"
                  />
                </RadioGroup>
              </FormControl>

              <FormControl component="fieldset" fullWidth margin="normal">
                <FormLabel component="legend">
                  How would you describe your mental health during studies:
                </FormLabel>
                <RadioGroup
                  row
                  value={mentalHealth}
                  onChange={handleMentalHealthChange}
                >
                  <FormControlLabel
                    value="1"
                    control={<Radio color="primary" />}
                    label="Very Poor"
                  />
                  <FormControlLabel
                    value="2"
                    control={<Radio color="primary" />}
                    label="Poor"
                  />
                  <FormControlLabel
                    value="3"
                    control={<Radio color="primary" />}
                    label="Average"
                  />
                  <FormControlLabel
                    value="4"
                    control={<Radio color="primary" />}
                    label="Good"
                  />
                  <FormControlLabel
                    value="5"
                    control={<Radio color="primary" />}
                    label="Excellent"
                  />
                </RadioGroup>
              </FormControl>

              <FormControl component="fieldset" fullWidth margin="normal">
                <FormLabel component="legend">
                  How would you describe your goal setting during studies:
                </FormLabel>
                <RadioGroup
                  row
                  value={goalsSetting}
                  onChange={handleGoalsSettingChange}
                >
                  <FormControlLabel
                    value="1"
                    control={<Radio color="primary" />}
                    label="Very Low"
                  />
                  <FormControlLabel
                    value="2"
                    control={<Radio color="primary" />}
                    label="Low"
                  />
                  <FormControlLabel
                    value="3"
                    control={<Radio color="primary" />}
                    label="Average"
                  />
                  <FormControlLabel
                    value="4"
                    control={<Radio color="primary" />}
                    label="Good"
                  />
                  <FormControlLabel
                    value="5"
                    control={<Radio color="primary" />}
                    label="Excellent"
                  />
                </RadioGroup>
              </FormControl>

              <FormControl component="fieldset" fullWidth margin="normal">
                <FormLabel component="legend">
                  How much learning resources are available to you:
                </FormLabel>
                <RadioGroup
                  row
                  value={learningResources}
                  onChange={handleLearningResourcesChange}
                >
                  <FormControlLabel
                    value="1"
                    control={<Radio color="primary" />}
                    label="Very Insufficient"
                  />
                  <FormControlLabel
                    value="2"
                    control={<Radio color="primary" />}
                    label="Insufficient"
                  />
                  <FormControlLabel
                    value="3"
                    control={<Radio color="primary" />}
                    label="Adequate"
                  />
                  <FormControlLabel
                    value="4"
                    control={<Radio color="primary" />}
                    label="Good"
                  />
                  <FormControlLabel
                    value="5"
                    control={<Radio color="primary" />}
                    label="Excellent"
                  />
                </RadioGroup>
              </FormControl>

              <FormControl component="fieldset" fullWidth margin="normal">
                <FormLabel component="legend">
                  How often do you go for group studies:
                </FormLabel>
                <RadioGroup
                  row
                  value={groupStudy}
                  onChange={handleGroupStudyChange}
                >
                  <FormControlLabel
                    value="1"
                    control={<Radio color="primary" />}
                    label="Never"
                  />
                  <FormControlLabel
                    value="2"
                    control={<Radio color="primary" />}
                    label="Rarely"
                  />
                  <FormControlLabel
                    value="3"
                    control={<Radio color="primary" />}
                    label="Sometimes"
                  />
                  <FormControlLabel
                    value="4"
                    control={<Radio color="primary" />}
                    label="Often"
                  />
                  <FormControlLabel
                    value="5"
                    control={<Radio color="primary" />}
                    label="Always"
                  />
                </RadioGroup>
              </FormControl>

              <FormControl component="fieldset" fullWidth margin="normal">
                <FormLabel component="legend">
                  How would you describe your interest in subjects:
                </FormLabel>
                <RadioGroup
                  row
                  value={subjectInterest}
                  onChange={handleSubjectInterestChange}
                >
                  <FormControlLabel
                    value="1"
                    control={<Radio color="primary" />}
                    label="Very Low"
                  />
                  <FormControlLabel
                    value="2"
                    control={<Radio color="primary" />}
                    label="Low"
                  />
                  <FormControlLabel
                    value="3"
                    control={<Radio color="primary" />}
                    label="Average"
                  />
                  <FormControlLabel
                    value="4"
                    control={<Radio color="primary" />}
                    label="High"
                  />
                  <FormControlLabel
                    value="5"
                    control={<Radio color="primary" />}
                    label="Very High"
                  />
                </RadioGroup>
              </FormControl>

              <FormControl component="fieldset" fullWidth margin="normal">
                <FormLabel component="legend">
                  How would you describe classroom environment:
                </FormLabel>
                <RadioGroup
                  row
                  value={classroomEnvironment}
                  onChange={handleClassroomEnvironmentChange}
                >
                  <FormControlLabel
                    value="1"
                    control={<Radio color="primary" />}
                    label="Very Low"
                  />
                  <FormControlLabel
                    value="2"
                    control={<Radio color="primary" />}
                    label="Low"
                  />
                  <FormControlLabel
                    value="3"
                    control={<Radio color="primary" />}
                    label="Average"
                  />
                  <FormControlLabel
                    value="4"
                    control={<Radio color="primary" />}
                    label="Good"
                  />
                  <FormControlLabel
                    value="5"
                    control={<Radio color="primary" />}
                    label="Excellent"
                  />
                </RadioGroup>
              </FormControl>

              <FormControl component="fieldset" fullWidth margin="normal">
                <FormLabel component="legend">
                  How would you describe your preparation for exams:
                </FormLabel>
                <RadioGroup
                  row
                  value={testPreparation}
                  onChange={handleTestPreparationChange}
                >
                  <FormControlLabel
                    value="1"
                    control={<Radio color="primary" />}
                    label="Very Poor"
                  />
                  <FormControlLabel
                    value="2"
                    control={<Radio color="primary" />}
                    label="Poor"
                  />
                  <FormControlLabel
                    value="3"
                    control={<Radio color="primary" />}
                    label="Average"
                  />
                  <FormControlLabel
                    value="4"
                    control={<Radio color="primary" />}
                    label="Good"
                  />
                  <FormControlLabel
                    value="5"
                    control={<Radio color="primary" />}
                    label="Excellent"
                  />
                </RadioGroup>
              </FormControl>

              <FormControl component="fieldset" fullWidth margin="normal">
                <FormLabel component="legend">
                  How would you describe workload of your course:
                </FormLabel>
                <RadioGroup
                  row
                  value={workload}
                  onChange={handleWorkloadChange}
                >
                  <FormControlLabel
                    value="1"
                    control={<Radio color="primary" />}
                    label="Very Light"
                  />
                  <FormControlLabel
                    value="2"
                    control={<Radio color="primary" />}
                    label="Light"
                  />
                  <FormControlLabel
                    value="3"
                    control={<Radio color="primary" />}
                    label="Manageable"
                  />
                  <FormControlLabel
                    value="4"
                    control={<Radio color="primary" />}
                    label="Heavy"
                  />
                  <FormControlLabel
                    value="5"
                    control={<Radio color="primary" />}
                    label="Very Heavy"
                  />
                </RadioGroup>
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
                type="number"
              />

              <Button
                variant="contained"
                color="primary"
                onClick={(event) => {
                  handleSubmit(event);
                }}
                style={{ marginTop: "24px", width: "100%" }}
              >
                Save
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
                  defaultValue={1}
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
                  defaultValue={1}
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
                  defaultValue={1}
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
                  onChange={handlePublicSpeakingPointsChange}
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
            </div>
          </TabPanel>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default Profile;
