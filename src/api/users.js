import axios from 'axios';

const API_BASE_URL = axios.create({
    // baseURL : 'https://cors-anywhere.herokuapp.com/https://rem.dbwebb.se/api',
    baseURL : 'https://rem.dbwebb.se/api',
    headers: {
        'Content-Type': 'application/json',
    }
});

export const getUsers =()=>{
    return API_BASE_URL.get('/users',{
        params:{
            limit: 100
        }

    })
};

export const createUser=({firstName,lastName})=>{
    console.log("Creating user with", { firstName, lastName });
    return API_BASE_URL.post('/users',{
        firstName,
        lastName
    });
};

export const deleteUser = (userId) => {
    return API_BASE_URL.delete(`/users/${userId}`);
};

export const updateUser = (user) => {
    return API_BASE_URL.put(`/users/${user.id}`, {
        firstName: user.firstName,
        lastName: user.lastName
    });
}

