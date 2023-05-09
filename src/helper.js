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
                mid_sem_marks: data.mid_sem_marks,
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
                mid_sem_marks: data.mid_sem_marks,
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
        result.push((parseInt(arr['first'][i])
            + parseInt(arr['second'][i])
            + parseInt(arr['third'][i])
            + parseInt(arr['fourth'][i])
            + parseInt(arr['fifth'][i])) / 5)
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

export function convertToOutOf(value, outOf) {
    console.log((value / outOf) * 100);
    return (value / outOf) * 100;
}
