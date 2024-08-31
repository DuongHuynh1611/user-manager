import React,{useState} from 'react';
import {Button, Modal,Input} from 'antd';
import ConfirmDialog from './ConfirmDialog';
import useDisclosure from '../hooks/useDisclosure';

const UserListItem = ({user, onDeleteClick,onEditClick}) => {

  const { isOpen: isModalOpen,open: showModal,  close: closeModal } = useDisclosure();
  const { isOpen: isDialogOpen,open: showDialog,  close: closeDialog } = useDisclosure();
    
  // const [isModalOpen,setIsModalOpen] =useState(false);
  const [editedFirstName, setEditedFirstName]= useState(user.firstName);
  const [editedLastName, setEditedLastName] = useState(user.lastName);
    
  // const [isDialogOpen, setIsDialogOpen] = useState(false);

  const stringToHslColor = (str = '') => {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
        hash = str.charCodeAt(i) + ((hash << 5) - hash);
    }

    const h = hash % 360;
    return `hsl(${h},60%,80%)`;
  };
  const getInitials = (firstName, lastName) => {
    return firstName && lastName ? `${firstName[0].toUpperCase()}${lastName[0].toUpperCase()}` : '';
  };
  if (!user || !user.firstName || !user.lastName) {
    return <div style={{ color: 'red' }}>Invalid user data</div>; // Display a message if user data is incomplete or missing
  }

  // const handleDeleteClick =()=>{
  //   setIsDialogOpen(true);
  // };

  // const handleConfirmDelete=()=>{
  //   onDeleteClick(user.id);
  //   setIsDialogOpen(false);
  // };

  // const handleCancelDelete = () => {
  //   setIsDialogOpen(false);
  // };
    
  // const showModal=()=>{
  //   setIsModalOpen(true);
  // };

  // const handleOk = () => { //useDisclosure
  //   onEditClick(user.id, editedFirstName, editedLastName);
  //   setIsModalOpen(false);
  // };

  // const handleCancel = () => {
  //   setIsModalOpen(false);
  // };
  const handleDeleteClick = () => {
      showDialog();
  };

  const handleConfirmDelete = () => {
      onDeleteClick(user.id);
      closeDialog();
  };

  const handleOk = () => {
      onEditClick(user.id, editedFirstName, editedLastName);
      closeModal();
  };

    
  return (
    <div style={{display: 'flex'}}>
      <div style={{
        margin: 'auto 0',
        textAlign: 'center',
        height: '40px',
        width: '40px',
        lineHeight: '40px',
        borderRadius: '50%',
        color: 'white',
        fontWeight: 'bold',
        background: stringToHslColor(user.firstName + user.lastName)}}>
            {getInitials(user.firstName, user.lastName)}
        {!!user && !!user.firstName && !!user.lastName ? user.firstName[0].toUpperCase() + user.lastName[0].toUpperCase() : ''}
      </div>
      <div style={{margin: 'auto 0', flexGrow: 1, paddingLeft: '10px'}}>
          {user.firstName} {user.lastName}
      </div>
      <div style={{margin: 'auto 0'}}>
          <Button size="sm" color="danger"  onClick={showModal}>
              Edit
          </Button>
          <Button size="sm" color="danger"  onClick={handleDeleteClick}>
              Delete
          </Button>
          <ConfirmDialog
              isOpen={isDialogOpen}
              onConfirm={handleConfirmDelete}
              // onCancel={handleCancelDelete}
              onCancel={closeDialog}
              message={`Are you sure you want to delete ${user.firstName} ${user.lastName}?`}/>
      </div>
      
      <Modal
          title="Edit User"
          open={isModalOpen}
          onOk={handleOk}
          // onCancel={handleCancel}
          onCancel={closeModal}
          >
          <Input placeholder="First Name"
              value={editedFirstName}
              onChange={(e) => setEditedFirstName(e.target.value)} 
          />

          <Input
              placeholder="Last Name"
              value={editedLastName}
              onChange={(e) => setEditedLastName(e.target.value)}
          />
      </Modal>
  </div>
  );
};

export default UserListItem;
