import Axios from 'axios';

export const login = (data) => {
    return{
        type: 'LOGIN',
        payload: Axios.post('http://localhost:3001/api/user/login', data)
    }
}

export const register = (data) => {
    return{
        type: 'REGISTER',
        payload: Axios.post('http://localhost:3001/api/user/register', data)
    }
}