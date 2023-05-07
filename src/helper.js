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


