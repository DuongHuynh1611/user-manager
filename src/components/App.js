import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getUsersRequest, createUserRequest,deleteUserRequest,usersError,updateUserRequest } from '../actions/users';
import UsersList from './UsersList';
import NewUserForm from './NewUserForm';
import { Alert } from 'antd';

const App=({users,getUsersRequest, createUserRequest,deleteUserRequest,usersError,updateUserRequest})=> {

  useEffect(() => {
    getUsersRequest();
  }, [getUsersRequest]);

  const handleCreateUserSubmit = ({firstName,lastName}) =>{
    createUserRequest({
      firstName,
      lastName
    });
  };

  const handleDeleteUserClick = (userId) => {
    deleteUserRequest(userId);
  };

  const handleEditUserClick = (userId, firstName, lastName) => {
    updateUserRequest({ id: userId, firstName, lastName });
    console.log(`Editing user ${userId}: ${firstName} ${lastName}`);
}

  const handleCloseAlert = () => {
    usersError({error: ''});
  };
  return(
    <div style={{margin:'0 auto',padding:'20px',maxWidth:'600px'}}>
      <h2>
        Users
      </h2>
      <Alert color="danger" isOpen={!!users.error} toggle={handleCloseAlert}>
        {users.error}
      </Alert>
      <NewUserForm onSubmit={handleCreateUserSubmit}/> <hr/>
      {!!users.items && !!users.items.length &&
        <UsersList onDeleteUserClick={handleDeleteUserClick}
        onEditUserClick={handleEditUserClick}
        users={users.items}/>
      }
      </div>
    );
}; 
export default connect(({users})=>({users}),{
  getUsersRequest,
  createUserRequest,
  deleteUserRequest,
  usersError,
  updateUserRequest
  
}) (App);
