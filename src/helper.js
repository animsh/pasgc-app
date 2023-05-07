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


export const getGradeData = async (enrollment_number) => {
    try {
        const response = await axios.get(
            `http://127.0.0.1:8000/core/user_grade_analysis_data/${enrollment_number}/`, {
            headers: {
                Authorization: `JWT ${localStorage.getItem('token')}`
            }
        });
        return response;
    } catch (error) {
        return error.response;
    }
};


