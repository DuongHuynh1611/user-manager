import API_BASE_URL from "./apiConfig";

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

