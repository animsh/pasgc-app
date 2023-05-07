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

export const createUser = async () => {
    try {
        const response = await axios.post('http://127.0.0.1:8000/auth/users/', {
            name: 'Sagar More',
            email: 'animsh.more@gmail.com',
            enrollment_number: 1002,
            password: 'Animesh@7800',
            re_password: 'Animesh@7800'
        });
        console.log(response.data);
        return response;
    } catch (error) {
        console.error(error.response.status);
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


