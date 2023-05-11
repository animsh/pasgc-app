import axios from 'axios';

export const checkToken = () => {
    const token = localStorage.getItem('token');
    console.log(token);
    if (token !== null && token !== undefined && token !== '') {
        // Token is present in local storage
        return true;
    } else {
        // Token is not present in local storage
        return false;
    }
}

export const createUser = async (name, email, enrollment_number, password, re_password) => {
    try {
        const response = await axios.post('http://127.0.0.1:8000/auth/users/', {
            name: name,
            email: email,
            enrollment_number: enrollment_number,
            password: password,
            re_password: re_password
        });
        return response;
    } catch (error) {
        return error.response;
    }
};

export const loginUser = async (email, password) => {
    try {
        const response = await axios.post('http://127.0.0.1:8000/auth/jwt/create/', {
            email: email,
            password: password
        });
        // console.log(response.data);
        return response;
    } catch (error) {
        // console.error(error.response.status);
        return error.response;
    }
};

export const getUser = async () => {
    try {
        const response = await axios.get('http://127.0.0.1:8000/auth/users/me/', {
            headers: {
                Authorization: `JWT ${localStorage.getItem('token')}`
            }
        });
        return response;
    } catch (error) {
        return error.response;
    }
};

export const sendGradeData = async (data) => {
    try {
        const response = await axios.post(
            'http://127.0.0.1:8000/core/user_grade_analysis_data/',
            {
                user_id: data.user_id,
                enrollment_number: data.enrollment_number,
                sex: data.sex,
                age: data.age,
                address: data.address,
                family_size: data.family_size,
                parent_status: data.parent_status,
                mother_education: data.mother_education,
                father_education: data.father_education,
                mother_job: data.mother_job,
                father_job: data.father_job,
                reason: data.reason,
                guardian: data.guardian,
                travel_time: data.travel_time,
                study_time: data.study_time,
                failures: data.failures,
                school_support: data.school_support,
                family_support: data.family_support,
                extra_activities: data.extra_activities,
                nursery: data.nursery,
                higher: data.higher,
                internet: data.internet,
                family_relationship: data.family_relationship,
                free_time: data.free_time,
                go_out: data.go_out,
                health: data.health,
                absences: data.absences,
                mid_sem_marks: embedMarks(data.mid_sem_marks, 30),
                end_sem_marks: data.end_sem_marks,
                attendance_rate: data.attendance_rate,
                class_participation: data.class_participation,
                motivation: data.motivation,
                self_discipline: data.self_discipline,
                teacher_quality: data.teacher_quality,
                time_management: data.time_management,
                peer_influence: data.peer_influence,
                parental_involvement: data.parental_involvement,
                teacher_student_relationship: data.teacher_student_relationship,
                stress_level: data.stress_level,
                mental_health: data.mental_health,
                goal_setting: data.goal_setting,
                learning_resources: data.learning_resources,
                group_study: data.group_study,
                time_spent_on_homework: data.time_spent_on_homework,
                subject_interest: data.subject_interest,
                classroom_environment: data.classroom_environment,
                test_preparation: data.test_preparation,
                time_spent_on_extracurricular_activities:
                    data.time_spent_on_extracurricular_activities,
                workload: data.workload,
                degree: data.degree,
                subjects: data.subjects,
                subjects_codes: data.subjects_codes,
                semester: data.semester
            },
            {
                headers: {
                    Authorization: `JWT ${localStorage.getItem('token')}`
                }
            }
        );
        return response;
    } catch (error) {
        return error.response;
    }
};

export const updateGradeData = async (data) => {
    try {
        const response = await axios.put(
            `http://127.0.0.1:8000/core/user_grade_analysis_data/${localStorage.getItem('user_enrollment_number')}/`,
            {
                user_id: data.user_id,
                enrollment_number: data.enrollment_number,
                sex: data.sex,
                age: data.age,
                address: data.address,
                family_size: data.family_size,
                parent_status: data.parent_status,
                mother_education: data.mother_education,
                father_education: data.father_education,
                mother_job: data.mother_job,
                father_job: data.father_job,
                reason: data.reason,
                guardian: data.guardian,
                travel_time: data.travel_time,
                study_time: data.study_time,
                failures: data.failures,
                school_support: data.school_support,
                family_support: data.family_support,
                extra_activities: data.extra_activities,
                nursery: data.nursery,
                higher: data.higher,
                internet: data.internet,
                family_relationship: data.family_relationship,
                free_time: data.free_time,
                go_out: data.go_out,
                health: data.health,
                absences: data.absences,
                mid_sem_marks: embedMarks(data.mid_sem_marks, 30),
                end_sem_marks: data.end_sem_marks,
                attendance_rate: data.attendance_rate,
                class_participation: data.class_participation,
                motivation: data.motivation,
                self_discipline: data.self_discipline,
                teacher_quality: data.teacher_quality,
                time_management: data.time_management,
                peer_influence: data.peer_influence,
                parental_involvement: data.parental_involvement,
                teacher_student_relationship: data.teacher_student_relationship,
                stress_level: data.stress_level,
                mental_health: data.mental_health,
                goal_setting: data.goal_setting,
                learning_resources: data.learning_resources,
                group_study: data.group_study,
                time_spent_on_homework: data.time_spent_on_homework,
                subject_interest: data.subject_interest,
                classroom_environment: data.classroom_environment,
                test_preparation: data.test_preparation,
                time_spent_on_extracurricular_activities:
                    data.time_spent_on_extracurricular_activities,
                workload: data.workload,
                degree: data.degree,
                subjects: data.subjects,
                subjects_codes: data.subjects_codes,
                semester: data.semester
            },
            {
                headers: {
                    Authorization: `JWT ${localStorage.getItem('token')}`
                }
            }
        );
        return response;
    } catch (error) {
        return error.response;
    }
};

export const getGradeData = async () => {
    try {
        const response = await axios.get(
            `http://127.0.0.1:8000/core/user_grade_analysis_data/${localStorage.getItem('user_enrollment_number')}/`, {
            headers: {
                Authorization: `JWT ${localStorage.getItem('token')}`
            }
        });
        return response;
    } catch (error) {
        return error.response;
    }
};

export const sendCareerData = async (data) => {
    try {
        const response = await axios.post(
            'http://127.0.0.1:8000/core/user_career_analysis_data/',
            {
                user_id: localStorage.getItem('user_id'),
                enrollment_number: localStorage.getItem('user_enrollment_number'),
                logical_quotient_rating: data.logical_quotion_rating,
                hackathons: data.hackathons,
                coding_skills_rating: data.coding_skills_rating,
                public_speaking_points: data.public_speaking_points,
                self_learning_capability: data.self_learning_capability,
                extra_courses_did: data.extra_courses_did,
                certifications: data.certifications,
                workshops: data.workshops,
                reading_writing_skills: data.reading_writing_skills,
                memory_capability_score: data.memory_capability_score,
                interested_subjects: data.interested_subjects,
                interested_career_area: data.interested_career_area,
                type_of_company_want_to_settle_in: data.type_of_company_want_to_settle_in,
                taken_inputs_from_seniors_or_elders: data.taken_inputs_from_seniors_or_elders,
                interested_type_of_books: data.interested_type_of_books,
                management_or_technical: data.management_or_technical,
                hard_or_smart_worker: data.hard_or_smart_worker,
                worked_in_teams_ever: data.worked_in_team,
                introvert: data.introvert,
                suggested_job_role: "",
            },
            {
                headers: {
                    Authorization: `JWT ${localStorage.getItem('token')}`
                }
            }
        );
        return response;
    } catch (error) {
        return error.response;
    }
};

export const updateCareerData = async (data) => {
    try {
        const response = await axios.put(
            `http://127.0.0.1:8000/core/user_career_analysis_data/${localStorage.getItem('user_enrollment_number')}/`,
            {
                user_id: localStorage.getItem('user_id'),
                enrollment_number: localStorage.getItem('user_enrollment_number'),
                logical_quotient_rating: data.logical_quotion_rating,
                hackathons: data.hackathons,
                coding_skills_rating: data.coding_skills_rating,
                public_speaking_points: data.public_speaking_points,
                self_learning_capability: data.self_learning_capability,
                extra_courses_did: data.extra_courses_did,
                certifications: data.certifications,
                workshops: data.workshops,
                reading_writing_skills: data.reading_writing_skills,
                memory_capability_score: data.memory_capability_score,
                interested_subjects: data.interested_subjects,
                interested_career_area: data.interested_career_area,
                type_of_company_want_to_settle_in: data.type_of_company_want_to_settle_in,
                taken_inputs_from_seniors_or_elders: data.taken_inputs_from_seniors_or_elders,
                interested_type_of_books: data.interested_type_of_books,
                management_or_technical: data.management_or_technical,
                hard_or_smart_worker: data.hard_or_smart_worker,
                worked_in_teams_ever: data.worked_in_team,
                introvert: data.introvert,
                suggested_job_role: "",
            },
            {
                headers: {
                    Authorization: `JWT ${localStorage.getItem('token')}`
                }
            }
        );
        return response;
    } catch (error) {
        return error.response;
    }
};


export const getCareerData = async () => {
    try {
        const response = await axios.get(
            `http://127.0.0.1:8000/core/user_career_analysis_data/${localStorage.getItem('user_enrollment_number')}/`, {
            headers: {
                Authorization: `JWT ${localStorage.getItem('token')}`
            }
        });
        // console.log(response);
        return response;
    } catch (error) {
        // console.log(error.response);
        return error.response;
    }
};


export const getCareerAnalysisResult = async () => {
    try {
        const response = await axios.get(
            `http://127.0.0.1:8000/core/user_career_analysis_result/${localStorage.getItem('user_enrollment_number')}/`, {
            headers: {
                Authorization: `JWT ${localStorage.getItem('token')}`
            }
        });
        // console.log(response);
        return response;
    } catch (error) {
        // console.log(error.response);
        return error.response;
    }
};

export const getGradeAnalysisResult = async () => {
    try {
        const response = await axios.get(
            `http://127.0.0.1:8000/core/user_grade_analysis_result/${localStorage.getItem('user_enrollment_number')}/`, {
            headers: {
                Authorization: `JWT ${localStorage.getItem('token')}`
            }
        });
        // console.log(response);
        return response;
    } catch (error) {
        // console.log(error.response);
        return error.response;
    }
};

export const getMarks = (arr) => {
    let result = [];
    for (let i = 0; i < arr['first'].length; i++) {
        result.push([arr["subjects"][i], (parseInt(arr['first'][i])
            + parseInt(arr['second'][i])
            + parseInt(arr['third'][i])
            + parseInt(arr['fourth'][i])
            + parseInt(arr['fifth'][i])) / 5])
    }
    console.log(result);
    return result;
};


export const getOccurance = (arr) => {
    const map = new Map();

    // Iterate over the array and count the occurrences of each value
    for (let val of arr) {
        if (map.has(val)) {
            map.set(val[0], map.get(val) + 1);
        } else {
            map.set(val[0], 1);
        }
    }

    // Convert the map to an array of key-value pairs
    const result = Array.from(map.entries());
    const updatedResult = [['Career', 'Occurance']];
    for (let i = 0; i < result.length; i++) {
        updatedResult.push([[result[i][0]][0], result[i][1]]);
    }
    console.log(updatedResult);
    return updatedResult;
};


export const embedMarks = (marks, outof) => {
    const arr = marks.split(',');

    let result = "";
    for (let i = 0; i < arr.length; i++) {
        if (outof === 30) {
            if (i === arr.length - 1) {
                result += convertMarksOutOf30To100(parseInt(arr[i]));
                break;
            }
            result += convertMarksOutOf30To100(parseInt(arr[i])) + ",";
        } else {
            if (i === arr.length - 1) {
                result += convertMarksOutOf100To30(parseInt(arr[i]));
                break;
            }
            result += convertMarksOutOf100To30(parseInt(arr[i])) + ",";
        }
    }
    return result;
}

export function convertToOutOf(value, outOf, tooutof) {
    console.log(value / outOf * tooutof);
    return Math.round(value * (outOf / tooutof));
}

export function convertMarksOutOf30To100(marksOutOf30) {
    return (marksOutOf30 / 30) * 100;
}

function convertMarksOutOf100To30(marksOutOf100) {
    return (marksOutOf100 / 100) * 30;
}

export const getCareerDetails = (career) => {
    const careerDict = {
        'Applications Developer': {
            'description': 'An applications developer is responsible for designing, coding, and modifying software applications according to user requirements.',
            'how_it_works': 'Applications developers typically work closely with clients or end users to understand their needs and translate them into functional applications. They write code, test and debug applications, and may also be involved in maintaining and updating existing applications.',
            'how_to_become': "To become an applications developer, you typically need a bachelor's degree in computer science, software engineering, or a related field. Strong programming skills, knowledge of software development methodologies, and experience with relevant programming languages (such as Java, C#, or Python) are important. Building a portfolio of projects and gaining practical experience through internships or entry-level positions can also be beneficial."
        },
        'CRM Technical Developer': {
            'description': 'A CRM (Customer Relationship Management) technical developer specializes in customizing and extending CRM systems to meet specific business requirements.',
            'how_it_works': 'CRM technical developers collaborate with business analysts and stakeholders to identify CRM system needs and design solutions. They configure and customize CRM platforms, create workflows and automation, integrate external systems, and develop extensions or plugins to enhance CRM functionality.',
            'how_to_become': 'To become a CRM technical developer, you should have a strong understanding of CRM concepts and platforms (such as Salesforce, Microsoft Dynamics 365, or Oracle CRM). Familiarity with programming languages (such as JavaScript, C#, or Apex) and web technologies (HTML, CSS) is important. Acquiring relevant certifications, gaining hands-on experience with CRM systems, and staying updated with the latest CRM trends can also be advantageous.'
        },
        'Database Developer': {
            'description': 'A database developer is responsible for creating and maintaining databases to store and organize data efficiently.',
            'how_it_works': 'Database developers design and implement database structures, write and optimize SQL queries, ensure data integrity and security, and troubleshoot database performance issues. They may also be involved in database administration tasks, such as backup and recovery.',
            'how_to_become': "To become a database developer, a bachelor's degree in computer science, information technology, or a related field is typically required. You should have a strong understanding of database concepts, SQL programming, and database management systems (such as Oracle, MySQL, or Microsoft SQL Server). Practical experience with database development, internships, or certifications can help in gaining the necessary skills."
        },
        'Mobile Applications Developer': {
            'description': 'A mobile applications developer specializes in creating applications for mobile devices such as smartphones and tablets.',
            'how_it_works': 'Mobile applications developers use programming languages such as Java, Swift, or Kotlin to develop mobile apps for iOS or Android platforms. They collaborate with designers and other developers to create user-friendly interfaces, implement functionality, and optimize app performance. They also conduct testing and debugging to ensure apps function as intended.',
            'how_to_become': 'To become a mobile applications developer, you should have a strong foundation in programming languages such as Java or Swift. Familiarity with mobile app development frameworks (such as React Native or Flutter) and experience with mobile app development tools (Android Studio, Xcode) are important. Building your own mobile app projects, gaining practical experience through internships or freelance work, and staying updated with the latest mobile development trends can be beneficial.'
        },
        'Network Security Engineer': {
            'description': 'A network security engineer is responsible for designing, implementing, and maintaining security measures to protect computer networks from unauthorized access and cyber threats.',
            'how_it_works': 'Network security engineers assess network vulnerabilities, develop security protocols, configure firewalls and intrusion detection systems,and monitor network traffic for suspicious activity. They also collaborate with other IT professionals to implement security policies, train employees on security best practices, and respond to security incidents.',
            'how_to_become': "To become a network security engineer, a bachelor's degree in computer science, information technology, or a related field is typically required. Knowledge of networking protocols, security tools and technologies (such as firewalls, VPNs, and encryption), and operating systems is important. Relevant certifications (such as Certified Information Systems Security Professional - CISSP) can also be beneficial in demonstrating proficiency and credibility in the field."
        },
        'Software Developer': {
            'description': 'A software developer is responsible for designing, coding, testing, and maintaining software applications for various platforms and purposes.',
            'how_it_works': 'Software developers collaborate with other IT professionals (such as business analysts, designers, and project managers) to understand user requirements and design software solutions. They write code, test and debug applications, and may also be involved in maintaining and updating existing software. Depending on their specialization, software developers may work on desktop applications, web applications, or mobile apps.',
            'how_to_become': "To become a software developer, a bachelor's degree in computer science, software engineering, or a related field is typically required. Strong programming skills, knowledge of software development methodologies, and experience with relevant programming languages (such as Java, C++, or Python) are important. Building a portfolio of projects and gaining practical experience through internships or entry-level positions can also be beneficial."
        },
        'Software Engineer': {
            'description': 'A software engineer is responsible for designing, developing, and maintaining complex software systems and solutions.',
            'how_it_works': 'Software engineers work closely with business stakeholders, designers, and other IT professionals to develop software solutions that meet business needs and requirements. They may be involved in all phases of the software development lifecycle, from design to testing and deployment. They also maintain and improve software systems to ensure they remain functional, efficient, and secure.',
            'how_to_become': "To become a software engineer, a bachelor's degree in computer science, software engineering, or a related field is typically required. Strong programming skills, knowledge of software development methodologies and practices, and experience with relevant programming languages (such as Java, C++, or Python) are important. Building a portfolio of complex software projects and gaining practical experience through internships or entry-level positions can also be beneficial."
        },
        'Software Quality Assurance (QA) / Testing': {
            'description': 'Software quality assurance (QA) or testing is the process of ensuring software products or systems meet specified requirements and quality standards.',
            'how_it_works': 'Software QA engineers or testers develop and execute test plans and test cases to identify bugs, defects, or issues in software systems. They may use automated testing tools or manual testing techniques to validate software functionality, performance, and usability. They also report defects and work with software developers to resolve issues and improve software quality.',
            'how_to_become': "To become a software QA engineer or tester, a bachelor's degree in computer science, software engineering, or a related field is typically required. Familiarity with software testing methodologies and tools (such as Selenium, JMeter, or Appium) is important. Building a portfolio of testing projects, gaining practical experience through internships or entry-level positions, and obtaining relevant certifications (such as Certified Software Tester - CST) can also be beneficial."
        },
        'Systems Security Administrator': {
            'description': 'A systems security administrator is responsible for configuring and maintaining IT systems to ensure they are secure and protected from cyber threats.',
            'how_it_works': 'Systems security administratorsare responsible for implementing security policies, managing access controls, monitoring system activity, and responding to security incidents. They also work with other IT professionals to identify vulnerabilities in systems and implement appropriate security measures to address them.',
            'how_to_become': "To become a systems security administrator, a bachelor's degree in computer science, information technology, or a related field is typically required. Knowledge of network and system security principles and technologies (such as firewalls, intrusion detection and prevention systems, and antivirus software) is important. Relevant certifications (such as Certified Information Systems Security Professional - CISSP) can also be beneficial in demonstrating proficiency and credibility in the field."
        },
        'Technical Support': {
            'description': 'Technical support professionals provide assistance and troubleshooting for software, hardware, and network issues.',
            'how_it_works': 'Technical support professionals may work in a help desk or support center, where they receive and respond to customer requests for assistance. They may use remote access tools or phone support to troubleshoot issues and provide guidance to customers. They also maintain documentation and knowledge bases to help customers find solutions to common problems.',
            'how_to_become': "To become a technical support professional, a bachelor's degree in computer science, information technology, or a related field is typically required. Strong communication and problem-solving skills, as well as experience with relevant hardware and software systems, are important. Building experience through internships or entry-level positions can also be beneficial."
        },
        'UX Designer': {
            'description': 'A UX (user experience) designer is responsible for creating and designing user interfaces and experiences that are intuitive, attractive, and easy to use.',
            'how_it_works': 'UX designers work with business stakeholders and other IT professionals to understand user requirements and design interfaces and experiences that meet those needs. They may create wireframes, prototypes, or mockups to test and validate designs, and work with developers to implement them in software applications. They also conduct user research to identify areas for improvement and refine design solutions.',
            'how_to_become': "To become a UX designer, a bachelor's degree in graphic design, human-computer interaction, or a related field is typically required. Strong design skills, knowledge of UX principles and methodologies, and experience with design tools (such as Sketch, Adobe XD, or Figma) are important. Building a portfolio of design projects and gaining practical experience through internships or entry-level positions can also be beneficial."
        },
        'Web Developer': {
            'description': 'A web developer is responsible for designing, coding, and maintaining websites and web applications.',
            'how_it_works': 'Web developers work with designers and other IT professionals to develop websites and web applications that meet business needs and user requirements. They may be involved in all phases of the web development lifecycle, from design to testing and deployment. They also maintain and update websites to ensure they remain functional, efficient, and secure.',
            'how_to_become': "To become a web developer, a bachelor's degree in computer science, web development, or a related field is typically required. Strong programming skills, knowledge of web development languages and frameworks (such as HTML, CSS, JavaScript, and React), and experience with web development tools and platforms (such as WordPress or Shopify) are important. Building a portfolio of web development projects and gaining practical experience through internships or entry-level positions can also be beneficial."
        }
    }

    return careerDict[career];
};

export function getRemark(predictedMarks) {
    if (predictedMarks >= 0 && predictedMarks <= 27) {
        return "Fail. You need to put in more effort to improve.";
    } else if (predictedMarks >= 28 && predictedMarks <= 40) {
        return "Needs improvement. You should focus on strengthening your weak areas.";
    } else if (predictedMarks >= 41 && predictedMarks <= 50) {
        return "Satisfactory performance. Keep up the good work!";
    } else if (predictedMarks >= 51 && predictedMarks <= 60) {
        return "Good effort. You're meeting expectations, but strive for better.";
    } else if (predictedMarks >= 61 && predictedMarks <= 70) {
        return "Outstanding performance. Keep up the excellent work!";
    } else {
        return "Invalid marks. Please enter a value between 0 and 70.";
    }
}

