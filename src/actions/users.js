export const Types = {
    GET_USERS_REQUEST: 'users/get_users_request',
    GET_USERS_SUCCESS:'users/get_users_success',
    CREATE_USER_REQUEST: 'users/create_user_request',
    CREATE_USER_SUCCESS: 'users/create_user_success',
    DELETE_USER_REQUEST: 'users/delete_user_request',
    USERS_ERROR: 'users/user_error',
    UPDATE_USER_REQUEST: 'users/update_user_request',
};

export const getUsersRequest =()=>({
    type: Types.GET_USERS_REQUEST
});

export const getUsersSuccess = ({items}) => ({
	type: Types.GET_USERS_SUCCESS,
	payload: {
		items
	}
});

export const createUserSuccess=(user)=>({
    type:Types.CREATE_USER_SUCCESS,
    payload: user,
});

export const createUserRequest = ({firstName,lastName})=> ({
    type: Types.CREATE_USER_REQUEST,
    payload: {
        firstName,
        lastName
    }
});

export const deleteUserRequest = (userId) => ({
    type: Types.DELETE_USER_REQUEST,
    payload: {
        userId
    }
});
export const usersError = ({error}) => ({
    type: Types.USERS_ERROR,
    payload: {
        error
    }
});

// export const updateUserRequest = ({ id, firstName, lastName }) => ({
//     type: Types.UPDATE_USER_REQUEST,
//     payload: {
//         id,
//         firstName,
//         lastName
//     }
// });
export const updateUserRequest = (user) => ({
    type: Types.UPDATE_USER_REQUEST,
    payload: user,
});