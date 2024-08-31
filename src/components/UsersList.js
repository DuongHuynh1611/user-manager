import React from 'react';
import {List, Card} from 'antd';
import UserListItem from './UserListItem';


const UsersList =({users,onDeleteUserClick,onEditUserClick}) => {
    

    console.log(users); 
    return(
        <List.Item>
            {users.map((user)=>{
                return(
                <Card key={user.id}>
                    <UserListItem onDeleteClick={onDeleteUserClick}
                    onEditClick={onEditUserClick}
                    user={user}/>
                </Card> 
                );
            })}
        </List.Item>
    )
};

export default UsersList;